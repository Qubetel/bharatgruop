<?php
// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Load configuration
$config = require_once __DIR__ . '/../config.php';

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Get POST data
$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$name = trim($input['name'] ?? '');
$email = trim($input['email'] ?? '');
$phone = trim($input['phone'] ?? '');
$subject = trim($input['subject'] ?? '');
$message = trim($input['message'] ?? '');

if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields (name, email, subject, message)']);
    exit();
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please provide a valid email address']);
    exit();
}

// Sanitize inputs
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$phone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$subject = htmlspecialchars($subject, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// Admin email content
$adminEmailBody = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
</head>
<body style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;'>
    <div style='background: linear-gradient(135deg, #166534 0%, #15803d 100%); padding: 20px; text-align: center;'>
        <h1 style='color: white; margin: 0;'>New Contact Form Submission</h1>
    </div>

    <div style='padding: 30px; background: #f9fafb;'>
        <h2 style='color: #166534; border-bottom: 2px solid #166534; padding-bottom: 10px;'>Contact Details</h2>

        <table style='width: 100%; border-collapse: collapse;'>
            <tr>
                <td style='padding: 10px 0; font-weight: bold; color: #374151;'>Name:</td>
                <td style='padding: 10px 0; color: #4b5563;'>{$name}</td>
            </tr>
            <tr>
                <td style='padding: 10px 0; font-weight: bold; color: #374151;'>Email:</td>
                <td style='padding: 10px 0; color: #4b5563;'><a href='mailto:{$email}'>{$email}</a></td>
            </tr>
            <tr>
                <td style='padding: 10px 0; font-weight: bold; color: #374151;'>Phone:</td>
                <td style='padding: 10px 0; color: #4b5563;'>" . ($phone ?: 'Not provided') . "</td>
            </tr>
            <tr>
                <td style='padding: 10px 0; font-weight: bold; color: #374151;'>Subject:</td>
                <td style='padding: 10px 0; color: #4b5563;'>{$subject}</td>
            </tr>
        </table>

        <h3 style='color: #166534; margin-top: 20px;'>Message:</h3>
        <div style='background: white; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;'>
            <p style='color: #4b5563; line-height: 1.6; margin: 0; white-space: pre-wrap;'>{$message}</p>
        </div>
    </div>

    <div style='background: #1f2937; padding: 15px; text-align: center;'>
        <p style='color: #9ca3af; margin: 0; font-size: 12px;'>
            This email was sent from the Bharat Group website contact form.
        </p>
    </div>
</body>
</html>
";

// Customer auto-reply email content
$customerEmailBody = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
</head>
<body style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;'>
    <div style='background: linear-gradient(135deg, #166534 0%, #15803d 100%); padding: 20px; text-align: center;'>
        <h1 style='color: white; margin: 0;'>Bharat Group</h1>
        <p style='color: #bbf7d0; margin: 5px 0 0 0;'>Eco-Friendly Machinery Since 2005</p>
    </div>

    <div style='padding: 30px; background: #f9fafb;'>
        <h2 style='color: #166534;'>Thank you for reaching out, {$name}!</h2>

        <p style='color: #4b5563; line-height: 1.6;'>
            We have received your inquiry and our team will get back to you within 24 hours.
        </p>

        <div style='background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; margin: 20px 0;'>
            <h3 style='color: #374151; margin-top: 0;'>Your Message:</h3>
            <p style='color: #6b7280; font-style: italic;'>\"{$message}\"</p>
        </div>

        <p style='color: #4b5563; line-height: 1.6;'>
            In the meantime, feel free to explore our range of eco-friendly machinery on our website.
        </p>

        <div style='text-align: center; margin-top: 30px;'>
            <a href='https://bharatgroup.org/machines' style='background: #166534; color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; font-weight: bold;'>
                View Our Machines
            </a>
        </div>
    </div>

    <div style='background: #1f2937; padding: 20px; text-align: center;'>
        <p style='color: white; margin: 0 0 10px 0; font-weight: bold;'>Contact Us</p>
        <p style='color: #9ca3af; margin: 5px 0; font-size: 14px;'>📞 0771-3169531</p>
        <p style='color: #9ca3af; margin: 5px 0; font-size: 14px;'>📧 info@bharatgroup.org</p>
        <p style='color: #9ca3af; margin: 5px 0; font-size: 14px;'>📍 Office No. 207, 2nd Floor, Wallfort Zone, Fafadih, Raipur - 492001 (C.G.)</p>
    </div>
</body>
</html>
";

// Email headers
$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: Bharat Group <' . $config['from_email'] . '>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion()
];

$customerHeaders = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: Bharat Group <' . $config['from_email'] . '>',
    'X-Mailer: PHP/' . phpversion()
];

try {
    // Send email to admin
    $adminSent = mail(
        $config['contact_email'],
        "New Contact Form: {$subject}",
        $adminEmailBody,
        implode("\r\n", $headers)
    );

    // Send auto-reply to customer
    $customerSent = mail(
        $email,
        "Thank you for contacting Bharat Group",
        $customerEmailBody,
        implode("\r\n", $customerHeaders)
    );

    if ($adminSent) {
        echo json_encode([
            'success' => true,
            'message' => 'Thank you for your inquiry! We will get back to you soon.'
        ]);
    } else {
        throw new Exception('Failed to send email');
    }

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send message. Please try again later.'
    ]);
}
?>
