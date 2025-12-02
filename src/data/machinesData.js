// Product Images
import agarbattiMachine from '../assets/bharat-group/Automatic_Agarbatti-Making-Machine - 1.jpg';
import agarbattiMachine2 from '../assets/bharat-group/WhatsApp Image 2025-12-02 at 10.17.50 PM.jpeg';
import agarbattiMachine3 from '../assets/bharat-group/WhatsApp Image 2025-12-02 at 10.17.50 PM (1).jpeg';
import agarbattiMachine4 from '../assets/bharat-group/WhatsApp Image 2025-12-02 at 10.17.50 PM (2).jpeg';
import agarbattiMachine5 from '../assets/bharat-group/WhatsApp Image 2025-12-02 at 10.17.50 PM (3).jpeg';
import papadMachine from '../assets/bharat-group/Automatic Pampad MAchine - 2.jpg';
import paperCupMachine from '../assets/bharat-group/Automatic Paper Cup Machine - 3.jpg';
import cattleFeedMachine from '../assets/bharat-group/Cattle Feed Machine - 4.jpg';
import paperPlateMachine from '../assets/bharat-group/Double die paper plate making machine - 5.jpg';
import edgeSquaringMachine from '../assets/bharat-group/Edge squaring machine - 6.jpg';
import manualPressMachine from '../assets/bharat-group/Manual Paper Press Machine - 7.jpg';
import pulverizerMachine from '../assets/bharat-group/Pulverizer Micro Machine - 8.jpg';

// Categories
export const categories = [
  { id: 'all', name: 'All Machines' },
  { id: 'agarbatti', name: 'Agarbatti Machines' },
  { id: 'food-processing', name: 'Food Processing' },
  { id: 'paper-cup', name: 'Paper Cup Machines' },
  { id: 'paper-plate', name: 'Paper Plate Machines' },
  { id: 'cattle-feed', name: 'Cattle Feed' },
  { id: 'printing-binding', name: 'Printing & Binding' },
  { id: 'pulverizer', name: 'Pulverizer' },
];

// Machines Data with Key Features
export const machines = [
  {
    id: 1,
    category: 'agarbatti',
    name: 'Automatic Agarbatti Making Machine',
    image: agarbattiMachine,
    images: [agarbattiMachine2, agarbattiMachine3, agarbattiMachine4, agarbattiMachine5],
    description: 'High-speed automatic agarbatti manufacturing with precision engineering.',
    keyFeatures: [
      {
        title: 'Fully Automatic Operation',
        description: 'The machine automates the entire process: feeding raw materials, mixing the paste, rolling/coating the sticks, shaping and forming incense sticks.'
      },
      {
        title: 'High Production Capacity',
        description: 'These machines can produce large quantities of agarbatti per hour or per day.'
      },
      {
        title: 'Uniformity and Quality Control',
        description: 'Automatic machines ensure consistent thickness, diameter, and finish for each stick, leading to better burning quality and uniform product.'
      },
      {
        title: 'Adjustable Stick Size/Length and Customization',
        description: 'Many machines allow adjustment of stick length, diameter or thickness depending on market requirements.'
      },
      {
        title: 'Energy-Efficient and Low Power Consumption',
        description: 'Designed to use minimal power, lowering operational costs compared to manual labor.'
      },
      {
        title: 'Durable Build and Robust Construction',
        description: 'Often made from heavy-duty steel (mild steel or stainless steel), built to withstand continuous operation and wear-and-tear.'
      },
      {
        title: 'Low Maintenance & Easy to Operate',
        description: 'With simple controls or minimal operator intervention, maintenance is usually straightforward, making them suitable even for small-scale industries or startups.'
      },
      {
        title: 'Flexible Raw-Material Compatibility',
        description: 'Many machines can handle different types of paste/raw materials (charcoal powder, wood/sawdust powder, natural binders, fragrances) to produce different kinds of agarbatti.'
      }
    ]
  },
  {
    id: 2,
    category: 'food-processing',
    name: 'Automatic Papad Making Machine',
    image: papadMachine,
    description: 'Fully automatic papad production with uniform size and thickness.',
    keyFeatures: [
      {
        title: 'Fully Automatic Operation',
        description: 'These machines handle the entire process from dough sheeting/rolling, to cutting discs (papad shape), sometimes even drying, minimizing manual labour.'
      },
      {
        title: 'High Production Capacity / High Throughput',
        description: 'Many machines produce high volume: e.g. up to 500 kg of papads per day (or dozens of kg per hour) depending on model/design.'
      },
      {
        title: 'Uniform Size, Thickness & Shape',
        description: 'Automatic cutting and sheeting ensures consistent quality — each papad comes out roughly the same size and thickness, which helps in uniform drying/cooking.'
      },
      {
        title: 'Hygienic Food-Grade Construction',
        description: 'Parts in contact with dough are typically made from stainless steel (or food-grade materials) for hygiene, easy cleaning and durability.'
      },
      {
        title: 'Adjustable Output (Size/Thickness/Shape)',
        description: 'Some machines allow changing size/thickness of papad by adjusting rollers or changing mold/die — helpful if you want to make different types of papads.'
      },
      {
        title: 'Compact / Space-Efficient Design',
        description: 'Many machines are designed to fit small to medium-scale food units, enabling startups or small business owners to run papad production without large factory space.'
      },
      {
        title: 'Energy-Efficient / Low Maintenance / Easy Operation',
        description: 'Designed for continuous operation with simple control (often single-phase electric supply), require minimal specialized labour/training and easy maintenance.'
      }
    ]
  },
  {
    id: 3,
    category: 'paper-cup',
    name: 'Automatic Paper Cup Machine',
    image: paperCupMachine,
    description: 'High-speed automatic paper cup manufacturing with multiple sizes.',
    keyFeatures: [
      {
        title: 'Fully Automatic Operation',
        description: 'These machines automatically handle the entire paper-to-cup process: paper-roll feeding, paper shaping, side and bottom sealing, cutting, curling/knurling (cup rim shaping), and cup ejection/stacking.'
      },
      {
        title: 'High Production Capacity / High Throughput',
        description: 'Many machines deliver high speed production, e.g. anywhere from ~60 to 120 cups per minute (depending on the model and cup size).'
      },
      {
        title: 'Size and Material Flexibility',
        description: 'Compatible with a range of cup sizes (small tea-cup sizes to larger cups for beverages) and works with single or double PE/PVC-coated food-grade paper (sometimes 140–350 GSM paper, depending on machine).'
      },
      {
        title: 'Precision Sealing and Uniform Quality',
        description: 'Automated heating/sealing for bottom and side sealing ensures leak-proof, uniformly shaped cups with consistent thickness and good structural integrity.'
      },
      {
        title: 'Automated Control & Ease of Operation',
        description: 'Typically equipped with PLC-based (or other) control panel/interface, sensors (for paper feed detection, fault detection), auto-lubrication/oiling systems, automatic shutdown on error/paper shortage — reducing need for constant manual supervision and minimizing wastage.'
      },
      {
        title: 'Durable & Hygienic Build for Food Industry',
        description: 'Built using heavy-duty steel/industrial-grade materials, with hygienic design suitable for food-grade cup production (important for paper cups for tea/coffee/edibles).'
      },
      {
        title: 'Low Maintenance and Energy Efficiency',
        description: 'Designed for continuous operation, with modular design for easier maintenance; many are optimized for reasonable power consumption.'
      },
      {
        title: 'Automatic Stacking, Counting & Collection of Cups',
        description: 'Finished cups are often auto-stacked/collected, reducing manual handling and speeding up production flow.'
      }
    ]
  },
  {
    id: 4,
    category: 'cattle-feed',
    name: 'Cattle Feed Machine',
    image: cattleFeedMachine,
    description: 'Pelletising & feed-making automation for livestock nutrition.',
    keyFeatures: [
      {
        title: 'Pelletising & Feed-Making Automation',
        description: 'The machine compresses powdered or ground feed ingredients (like maize, bran, oil-cakes, soybean meal, rice-bran, additives, minerals, etc.) into dense, uniform pellets — easier for cattle/goats/cows to digest than loose mash. Many machines handle the full workflow: grinding → mixing → pelletizing → cutting → cooling/sieving (to remove fines) → (optionally) packing/bagging — reducing manual labour significantly.'
      },
      {
        title: 'Adjustable Pellet Size & Feed Type Flexibility',
        description: 'Pellet size can often be changed — e.g. from small pellets (≈ 2 mm) to larger ones (≈ 8–12 mm) depending on livestock type (calves, cows, goats, poultry, etc.) by changing die-plates/rollers. Some machines offer both pellet feed and mash (powdered) feed output — useful if certain animals require different feed texture.'
      },
      {
        title: 'Raw Material Versatility',
        description: 'They can process a variety of inputs: cereals (maize, wheat), oil-cakes, bran, husk, grains, by-products, mineral & vitamin mix, even fibrous or roughage materials (depending on machine). This allows custom feed formulation — meaning you can adjust the recipe (protein, energy, minerals) depending on animal type or nutritional requirement.'
      },
      {
        title: 'Output Capacity & Scalability',
        description: 'Machines come in a wide range of capacities — from small (say 75–300 kg/hour) for small farms, to medium (300–800 kg/hr), to large commercial plants (1,000–2,000 kg/hr or more). That makes them suitable for small-scale dairy, goat/sheep farms, as well as larger dairy farms or feed-manufacturing units.'
      },
      {
        title: 'Durable Build & Low Maintenance',
        description: 'Typically made with heavy-duty mild steel / cast-iron / food-grade materials to withstand continuous use and harsh farm environments. Design ensures relative ease of maintenance: die & rollers can be replaced or serviced; manageable energy consumption; machine parts configured for easy cleaning and long service life.'
      },
      {
        title: 'Efficiency, Feed Quality & Nutritional Uniformity',
        description: 'Pelletizing improves feed densification — leading to less wastage, easier storage/transport, uniform feed per animal, and potentially improved digestibility and nutritional absorption. Uniform pellet size and density help distribute nutrients evenly — helpful for large herds to ensure all animals get balanced feed.'
      },
      {
        title: 'Option for Full-Scale Feed Plants',
        description: 'Advanced feed-making plants incorporate multiple modules: raw material grinder/hammer mill, mixer, pellet mill, cooler, sieve/grader, bagging/packing unit. This makes them ideal for commercial feed production — like a small/medium-scale feed factory, dairy cooperative, or feed supplier business.'
      }
    ]
  },
  {
    id: 5,
    category: 'paper-plate',
    name: 'Double Die Paper Plate Making Machine',
    image: paperPlateMachine,
    description: 'High-output dual-die paper plate production for industrial scale.',
    keyFeatures: [
      {
        title: 'High Output / Productivity',
        description: 'Many machines produce ~3,000 to ~6,000 plates per hour (depending on plate size, paper quality, and machine model).'
      },
      {
        title: 'Support for Multiple Plate Sizes',
        description: 'Plate size (die-size) typically in range 4" up to 14" (and sometimes up to ~20" in some machines) — so you can make small plates, dinner plates, dona-plates, snack-plates etc.'
      },
      {
        title: 'Compatibility with Varied Paper Types / GSM',
        description: 'Works with a range of paper materials — duplex board, kraft, laminated/coated sheet, biodegradable eco-paper etc. GSM range often from ~80 GSM to ~500 GSM depending on machine and paper type.'
      },
      {
        title: 'Automatic or Semi-Automatic Operation',
        description: 'Many machines offer full automation (paper feeding → pressing → plate ejection), or semi-automatic — reducing manual labor and increasing efficiency.'
      },
      {
        title: 'Durable Construction / Heavy-Duty Build',
        description: 'Typically built with robust mild-steel body / heavy-duty frame — to sustain continuous industrial-scale production.'
      },
      {
        title: 'Energy & Cost Efficiency',
        description: 'With dual-die, the machine doubles output for roughly similar power input — improving per-plate cost, labour cost, and energy efficiency.'
      },
      {
        title: 'Flexible Die / Mould Options',
        description: 'Dies / moulds are often interchangeable: you can change to different sized dies (to produce different plate sizes) — giving flexibility for market demands (small plates, large plates, snack plates, dona, etc.).'
      },
      {
        title: 'Relatively Easy Operation & Maintenance',
        description: 'Designed for straightforward operation by 1–2 persons; maintenance and die-change are manageable; not highly skilled labor required.'
      }
    ]
  },
  {
    id: 6,
    category: 'printing-binding',
    name: 'Edge Squaring Machine',
    image: edgeSquaringMachine,
    description: 'Hydraulic clamping & pressing for professional book binding finish.',
    keyFeatures: [
      {
        title: 'Hydraulic Clamping & Pressing',
        description: 'Uses hydraulic pressure to clamp the book block securely and then press the spine with rollers — ensures firm, uniform squaring.'
      },
      {
        title: 'PLC-Controlled Operation',
        description: 'Many machines include PLC (Programmable Logic Controller) based controls for sequencing the clamping & squaring cycles — for consistent output and safety.'
      },
      {
        title: 'Adjustable Pressure & Settings',
        description: 'Clamp pressure and spine-squaring pressure are adjustable, to suit different book thicknesses and paper/board types.'
      },
      {
        title: 'Spine Thickness Range Support',
        description: 'Most machines support a wide range of spine thickness — e.g. 5 mm up to 70 mm (depending on model) — letting you process thin booklets to thick notebooks.'
      },
      {
        title: 'Book/Block Width Support',
        description: 'Machines are available in different widths (e.g. 700 mm, 800 mm, 1000+ mm) — so you can handle various book sizes / multi-up booklets.'
      },
      {
        title: 'Single, Double or Multiple-Stroke Squaring',
        description: 'Some models allow single-stroke or double-stroke squaring; flexibility helps achieve better finish for different book types.'
      },
      {
        title: 'Manual / Semi-Automatic / Fully-Automatic Modes',
        description: 'Depending on model — you can have manual operation or more automated cycles for higher output and consistency.'
      },
      {
        title: 'Safety & Ergonomic Features',
        description: 'Emergency-stop switch to abort cycle if needed; protective design to avoid operator injury; some have exhaust/ventilation for hydraulic unit to ensure safe and continuous operation.'
      },
      {
        title: 'Durable Build & Heavy-Duty Construction',
        description: 'Designed to handle repetitive clamping/pressing — robust frame, quality hydraulic components, heavy-duty rollers — ensures long life even in industrial use.'
      },
      {
        title: 'High Throughput Potential',
        description: 'Good models can handle many booklets/notebooks per hour — streamlining post-press work and improving manufacturing efficiency.'
      }
    ]
  },
  {
    id: 7,
    category: 'printing-binding',
    name: 'Manual Paper Press Machine',
    image: manualPressMachine,
    description: 'Precision manual pressing for bookbinding and paper flattening.',
    keyFeatures: [
      {
        title: 'Rigid Steel / Metal Construction',
        description: 'Built with a strong steel or metal frame + sturdy platen(s) to ensure uniform pressure across entire paper stack, giving flat, wrinkle-free and consistent results.'
      },
      {
        title: 'Manual Screw / Wheel / Lever Operation',
        description: 'Pressure is applied manually by turning a hand wheel or lever — this gives precise control over pressure (less risk of over-compression), and no dependency on electricity.'
      },
      {
        title: 'Adjustable Opening & Accommodates Different Thicknesses',
        description: 'Able to handle varied stack thicknesses — from few sheets to thicker book blocks or glued/stitched bundles — by adjusting the platen gap manually.'
      },
      {
        title: 'Compact Footprint / Small Workshop-Friendly',
        description: 'Manual presses often have small to moderate size — suitable for small binding units, offices, craft shops where space is limited.'
      },
      {
        title: 'Low or No Power Consumption',
        description: 'Since operation is manual — no power or electricity needed (or minimal) — so cheap to run; ideal in places with limited power supply or for cost-sensitive operations.'
      },
      {
        title: 'Simple to Operate, Minimal Skill Required',
        description: 'Easy operation — typically one operator can manage it after minimal training, without complicated electronics or control systems.'
      },
      {
        title: 'Low Maintenance & Long Life',
        description: 'Because of simple mechanical design (screw/lever, metal plates), maintenance is easy; fewer parts to fail compared with hydraulic or automatic presses, and machine can last long.'
      },
      {
        title: 'Precise & Even Pressure — Good for Quality Finishing',
        description: 'Manual pressure control helps avoid over-compressing or damaging paper; ensures uniform pressing, binding, flattening — useful for books, notebooks, glued blocks, paper bundles, art prints, etc.'
      },
      {
        title: 'Versatile for Different Paper-Related Tasks',
        description: 'Can be used for bookbinding, flattening printed sheets, gluing/laminating, pressing paper stacks, pasting covers, cartons, small cardboard, manual paper-plate pressing (in manual paper-plate machines), etc.'
      }
    ]
  },
  {
    id: 8,
    category: 'pulverizer',
    name: 'Micro Pulverizer Machine',
    image: pulverizerMachine,
    description: 'Fine grinding for spices, grains, chemicals and more.',
    keyFeatures: [
      {
        title: 'Wide Range of Material Compatibility',
        description: 'Can process grains, spices, pulses, chemicals, minerals, animal-feed inputs, powdered raw materials, etc. Some models also handle tougher or abrasive materials (with appropriate wear-resistant design).'
      },
      {
        title: 'Adjustable Fineness / Controlled Particle Size',
        description: 'With screen/mesh and classification mechanisms or blower-based separation, you can achieve various output fineness levels (e.g. standard pulverization, fine powders, even micron-level in certain designs).'
      },
      {
        title: 'High Efficiency and Throughput',
        description: 'Depending on model and motor power, capacity may vary from small (suitable for small batches) to several tens or hundreds of kg/hour for larger micro-pulverizers.'
      },
      {
        title: 'Compact / Space-Efficient',
        description: 'Many micro pulverizers are designed to take up modest floor space — suitable for small processing units, labs, small workshops or food processing at small/medium scale.'
      },
      {
        title: 'Flexible in Operation — Dry or Wet Grinding',
        description: 'Some machines handle dry materials (spices, grains, powders) effectively; others may support more varied material types depending on design (with appropriate maintenance and cleaning).'
      },
      {
        title: 'Relatively Easy to Operate and Maintain',
        description: 'Compared with large industrial mills, micro pulverizers tend to have simpler mechanics (rotor + hammers + screen), easier cleaning/access, and do not always need highly specialised labor.'
      },
      {
        title: 'Durable Build — Suitable for Continuous/Semi-Continuous Use',
        description: 'Many micro pulveriser machines are built with heavy-duty bodies (mild steel or stainless steel depending on need), wear-resistant rotors/linings, and robust bearings for long life.'
      },
      {
        title: 'Option for Dust-Control / Collection Systems',
        description: 'Some machines are designed to be integrated with dust-collection/extraction systems to maintain working cleanliness and avoid powder loss.'
      }
    ]
  }
];
