const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT || 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP connection error:', error);
  } else {
    console.log('SMTP server is ready to send emails');
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields (name, email, subject, message)',
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address',
      });
    }

    // Email content to admin
    const adminMailOptions = {
      from: `"Bharat Group Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #166534 0%, #15803d 100%); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
          </div>

          <div style="padding: 30px; background: #f9fafb;">
            <h2 style="color: #166534; border-bottom: 2px solid #166534; padding-bottom: 10px;">Contact Details</h2>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #374151;">Name:</td>
                <td style="padding: 10px 0; color: #4b5563;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 10px 0; color: #4b5563;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #374151;">Phone:</td>
                <td style="padding: 10px 0; color: #4b5563;">${phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #374151;">Subject:</td>
                <td style="padding: 10px 0; color: #4b5563;">${subject}</td>
              </tr>
            </table>

            <h3 style="color: #166534; margin-top: 20px;">Message:</h3>
            <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
              <p style="color: #4b5563; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>

          <div style="background: #1f2937; padding: 15px; text-align: center;">
            <p style="color: #9ca3af; margin: 0; font-size: 12px;">
              This email was sent from the Bharat Group website contact form.
            </p>
          </div>
        </div>
      `,
    };

    // Auto-reply to customer
    const customerMailOptions = {
      from: `"Bharat Group" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank you for contacting Bharat Group',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #166534 0%, #15803d 100%); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Bharat Group</h1>
            <p style="color: #bbf7d0; margin: 5px 0 0 0;">Eco-Friendly Machinery Since 2005</p>
          </div>

          <div style="padding: 30px; background: #f9fafb;">
            <h2 style="color: #166534;">Thank you for reaching out, ${name}!</h2>

            <p style="color: #4b5563; line-height: 1.6;">
              We have received your inquiry and our team will get back to you within 24 hours.
            </p>

            <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Your Message:</h3>
              <p style="color: #6b7280; font-style: italic;">"${message}"</p>
            </div>

            <p style="color: #4b5563; line-height: 1.6;">
              In the meantime, feel free to explore our range of eco-friendly machinery on our website.
            </p>

            <div style="text-align: center; margin-top: 30px;">
              <a href="https://bharatgroup.org/machines" style="background: #166534; color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; font-weight: bold;">
                View Our Machines
              </a>
            </div>
          </div>

          <div style="background: #1f2937; padding: 20px; text-align: center;">
            <p style="color: white; margin: 0 0 10px 0; font-weight: bold;">Contact Us</p>
            <p style="color: #9ca3af; margin: 5px 0; font-size: 14px;">📞 0771-3169531</p>
            <p style="color: #9ca3af; margin: 5px 0; font-size: 14px;">📧 info@bharatgroup.org</p>
            <p style="color: #9ca3af; margin: 5px 0; font-size: 14px;">📍 Office No. 207, 2nd Floor, Wallfort Zone, Fafadih, Raipur - 492001 (C.G.)</p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);

    res.status(200).json({
      success: true,
      message: 'Thank you for your inquiry! We will get back to you soon.',
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
