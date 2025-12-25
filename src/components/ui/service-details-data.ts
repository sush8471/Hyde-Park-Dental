export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  sections: {
    title: string;
    content: string | string[];
  }[];
}

export const serviceDetails: ServiceDetail[] = [
  {
    id: "cerec",
    title: "CEREC Porcelain Restoration",
    subtitle: "Same-Day Digital Dentistry",
    description:
      "State-of-the-art CAD/CAM system for producing all-ceramic inlays, onlays, partial crowns, veneers and full crowns in a single visit.",
    sections: [
      {
        title: "What is CEREC?",
        content:
          "CEREC is a high-tech CAD/CAM system allowing us to manufacture high-quality ceramic porcelain restorations on-site and in a single visit. Hyde Park Dental has been a provider of CEREC for over 20 years and was one of the first practices in Adelaide to incorporate this revolutionary technology.",
      },
      {
        title: "Why Choose CEREC?",
        content: [
          "Single visit convenience - no temporary crowns",
          "Removal and replacement of old amalgam (metal mercury) fillings",
          "Restoration of fractured teeth and old fillings",
          "Superior aesthetics with natural-looking results",
          "Precise 3D digital imaging for perfect fit",
          "Long-lasting, biocompatible porcelain material",
        ],
      },
      {
        title: "The Procedure",
        content:
          "After anesthetic is administered, your dentist prepares the tooth and takes a 3D digital image using our CEREC scanner. You can relax, watch TV, or observe as your dentist designs your custom restoration on the computer. A high-quality porcelain block matching your tooth color is placed in the milling unit, where robotic drill arms precisely cut your restoration. After approximately 10 minutes of milling, the restoration is ready to be fitted, checked for shade and contact, then cemented and polished.",
      },
      {
        title: "Post-Treatment Care",
        content:
          "Once cemented and polished, you can eat and drink immediately. Treatment is complete in one visit with no follow-up appointments required for the restoration.",
      },
    ],
  },
  {
    id: "children",
    title: "Children's Dentistry",
    subtitle: "Building Healthy Smiles from the Start",
    description:
      "Family dentistry starts with your children. Establishing good oral hygiene habits from an early age sets up a lifetime of beneficial dental habits.",
    sections: [
      {
        title: "First Visits",
        content:
          "First visits can start from a young age as children develop their first teeth. These visits at our rooms are fun, gentle and fast—involving a ride in the chair, some photographs and maybe a cartoon or two. This allows your child to become accustomed to our dental team and form a trusting relationship for future visits.",
      },
      {
        title: "Regular Care",
        content:
          "At regular visits, we examine teeth and gums for good oral health and observe growth patterns to ensure proper development. Early detection of dental disease, decay, or abnormalities allows for quick, easy treatment with minimal discomfort. We also work closely with Adelaide's leading paediatric dental specialists when needed.",
      },
      {
        title: "Services Offered",
        content: [
          "Gentle examinations and cleanings",
          "Fissure sealants for cavity prevention",
          "Custom sports mouth guards",
          "Children's fillings",
          "Gum therapy treatment",
          "Oral health education",
        ],
      },
      {
        title: "Fissure Sealants",
        content:
          "Deep fissures in molars and premolars are five times more likely to develop decay. Fissure sealants are tooth-colored plastic coatings that fill deep grooves and protect teeth from plaque and acids. This painless, non-invasive treatment is highly effective in reducing tooth decay in children and adolescents.",
      },
    ],
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    subtitle: "Transform Your Smile with Confidence",
    description:
      "Your smile affects how you feel about yourself and how others perceive you. Our cosmetic procedures give you the beautiful, healthy smile you desire.",
    sections: [
      {
        title: "Porcelain Veneers",
        content:
          "Thin, hand-crafted porcelain facings that cover the front of your teeth, transforming stained, chipped, misaligned or oddly-shaped teeth. Veneers create natural, flawless results and remain stain-resistant for many years. Only minimal enamel removal is required for seamless placement.",
      },
      {
        title: "Crowns",
        content:
          "Crowning covers the entire outer surface of a tooth, returning it to desired shape and color with a strong, permanent solution. Ideal for grossly decayed teeth, fractures, teeth weakened by root canal, worn teeth, and discoloration. Our CEREC technology allows same-day crown placement.",
      },
      {
        title: "Dental Bridges",
        content:
          "When a tooth must be extracted, a bridge can restore the gap. Consisting of crowns supporting an artificial tooth, bridges help prevent surrounding teeth from drifting, improve chewing and speech, and maintain your natural face shape.",
      },
      {
        title: "Teeth Whitening",
        content:
          "Custom take-home Pola Night whitening kits make achieving bright,white teeth simple and affordable. With little to no sensitivity, this professional system delivers the bright smile you've always wanted.",
      },
      {
        title: "Cosmetic Bonding",
        content:
          "Affordable, reliable way to improve chipped, stained or spaced teeth. Tooth-colored resin is applied directly to your tooth with minimal preparation, then expertly shaped for instant aesthetic improvement.",
      },
      {
        title: "Orthodontics",
        content:
          "We offer SmileFast and Invisalign systems to correct crowding, spacing, crooked teeth and protruding teeth. See our Orthodontics section for details.",
      },
    ],
  },
  {
    id: "hygiene",
    title: "Dental Hygiene",
    subtitle: "Prevention is the Foundation of Oral Health",
    description:
      "Preventative care maintains your oral health and identifies potential problems before they develop into serious issues.",
    sections: [
      {
        title: "More Than Just a Clean",
        content:
          "Your visit with our skilled Dental Hygienists is comprehensive preventative care. A healthy mouth is vital to your appearance, well-being, and overall health. Oral disease can contribute to diabetes, heart disease, immune disorders, weak bones, and pregnancy complications.",
      },
      {
        title: "First Visit Assessment",
        content:
          "We make a full assessment of your oral health and hygiene habits. Gums are inspected for disease, measurements are taken and recorded for future comparison. Intra-oral cameras and X-rays document current conditions and educate you about your oral health. The dentist performs visual examination and oral cancer screening, then formulates treatment recommendations based on findings.",
      },
      {
        title: "Treatment Includes",
        content: [
          "Comprehensive oral health assessment",
          "Gum and bone disease screening",
          "Soft and hard plaque (tartar) removal",
          "Professional teeth polishing",
          "Fluoride treatment",
          "Personalized home care education",
          "Latest home care product recommendations",
        ],
      },
      {
        title: "Continuing Care Program",
        content:
          "Periodic hygiene appointments scheduled in advance ensure your mouth stays in optimal condition. Regular visits reinforce good practices and keep you motivated for a healthy, pain-free dental life.",
      },
      {
        title: "Additional Services",
        content:
          "Dental Hygienists also provide fissure sealants, impressions for night guards and mouth guards, whitening consultation, local anesthetic administration, and radiographs.",
      },
    ],
  },
  {
    id: "implants",
    title: "Dental Implants",
    subtitle: "Permanent Replacement for Missing Teeth",
    description:
      "Artificial tooth roots inserted into the jawbone that closely mimic the look and function of real teeth—the preferred aesthetic alternative to dentures and bridges.",
    sections: [
      {
        title: "Why Choose Dental Implants?",
        content:
          "Whether missing one tooth, several teeth, or all your teeth, implants provide permanent replacement without involving surrounding teeth. They restore function, appearance, and confidence.",
      },
      {
        title: "Single Tooth Replacement",
        content:
          "A single crown on an implant is generally the best way to restore chewing function and natural appearance when one tooth is missing.",
      },
      {
        title: "Multiple Tooth Replacement",
        content:
          "Several missing teeth can be replaced with a bridge or crowns supported by multiple implants, restoring both function and aesthetics.",
      },
      {
        title: "Full Arch Replacement",
        content:
          "When all teeth are missing, implants offer the most effective and comfortable solution. Options include a fixed bridge supported by 5+ implants (removable only by dentist) or an implant-retained denture connected via attachments to 2+ implants (removable by you, but firmly attached when in place).",
      },
      {
        title: "Treatment Planning",
        content:
          "Nick and Dan work with dental specialists to tailor your treatment plan based on bone type and amount, functional conditions, and personal preference. With implants, you can speak, chew and smile with complete confidence.",
      },
    ],
  },
  {
    id: "root-canal",
    title: "Root Canal Therapy",
    subtitle: "Save Your Tooth from Extraction",
    description:
      "Endodontic treatment that saves infected teeth and relieves pain caused by inflammation and infection of the tooth pulp.",
    sections: [
      {
        title: "When is it Needed?",
        content:
          "Root canal therapy is required when the pulp (soft tissue inside the tooth) becomes infected due to deep decay, trauma, or tooth fracture/chip.",
      },
      {
        title: "Symptoms",
        content: [
          "Hot temperature sensitivity",
          "Throbbing sensation",
          "Gum abscess and bad taste",
          "Persistent toothache",
          "Swelling around the affected tooth",
        ],
      },
      {
        title: "Treatment Process",
        content:
          "After diagnosis via tests and X-rays, treatment involves removing inflamed or infected pulp tissue, carefully cleaning and disinfecting the interior, then sealing with gutta-percha (rubber-like material). Treatment typically occurs over 2-3 short, PAIN-FREE sessions using the latest rotary endodontic equipment. Local anesthetic ensures patient comfort.",
      },
      {
        title: "Post-Treatment Care",
        content:
          "Following completion, we recommend full crowning or porcelain reinforcement to protect the tooth's longevity and prevent future fractures.",
      },
    ],
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    subtitle: "Straighter Teeth with Clear, Modern Solutions",
    description:
      "Fast, aesthetic and affordable teeth straightening using SmileFast and Invisalign systems.",
    sections: [
      {
        title: "SmileFast",
        content:
          "Revolutionary cosmetic orthodontic treatment for adults designed to significantly improve your smile in 6-9 months. Modern SmileFast uses clear brackets and white wires that blend seamlessly with your teeth—no chunky metal braces. Using 3D digital modeling, brackets are precisely placed for rapid yet safe tooth movement.",
      },
      {
        title: "SmileFast Treats",
        content: [
          "Crowding",
          "Spacing issues",
          "Crooked teeth",
          "Protruding teeth",
          "Various common orthodontic concerns",
        ],
      },
      {
        title: "Invisalign",
        content:
          "Virtually invisible solution that allows you to smile during and after treatment. Using a series of clear, removable aligners, Invisalign straightens teeth with 3D computer imaging technology mapping your complete treatment from start to finish.",
      },
      {
        title: "How Invisalign Works",
        content:
          "Custom aligners unique to your treatment are produced based on your 3D treatment plan. Each aligner is worn for about two weeks, gradually moving teeth before being replaced by the next in the series until the final position is achieved.",
      },
      {
        title: "Benefits",
        content: [
          "Nearly invisible treatment",
          "Removable for eating and cleaning",
          "Comfortable with no metal brackets",
          "Predictable digital treatment planning",
          "Suitable for a wide range of cases",
        ],
      },
    ],
  },
  {
    id: "general",
    title: "General Dentistry",
    subtitle: "Comprehensive Care for Your Oral Health",
    description:
      "Taking care of oral health basics to help avoid complex dental issues. Tailored services to prevent future complications.",
    sections: [
      {
        title: "Composite Resin Fillings",
        content:
          "Tooth-colored reinforced resin fillings provide excellent aesthetics in a single visit. They allow minimal tooth removal and, once bonded, reinforce weak parts of the tooth. Most successful for front teeth and smaller back fillings.",
      },
      {
        title: "CEREC Porcelain Fillings",
        content:
          "Ceramic inlays and onlays are the preferred material for larger fillings on back teeth. Made in a single visit, CEREC porcelain has high durability and closely simulates natural tooth structure in feel, strength and color. Your best option for replacing old amalgam fillings.",
      },
      {
        title: "Tooth Extractions",
        content:
          "Sometimes necessary due to significant decay, damage, gum disease, fracture, poor positioning, or to improve orthodontic outcomes. Thorough examination and X-rays assess the tooth before pain-free removal with local anesthetic.",
      },
      {
        title: "Wisdom Teeth",
        content:
          "Third molars often develop into impacted positions causing painful infections or damage to surrounding teeth. We work with Adelaide's leading oral surgeons for complex extractions or cases requiring sedation.",
      },
      {
        title: "Dentures",
        content:
          "Traditional, affordable method for replacing missing teeth. Options include removable partial dentures (when few teeth missing) or full arch dentures (when no teeth remain). Custom-made for proper fit and function.",
      },
      {
        title: "Night Guards",
        content:
          "Custom acrylic guards designed for individuals suffering from teeth grinding and clenching. Worn at night to ease pressure on jaw muscles and prevent tooth chipping and fracturing.",
      },
      {
        title: "Sports Mouth Guards",
        content:
          "Essential protection during sports activities. Custom-made from dental impressions to provide the best fit, coverage and thickness. Far superior to over-the-counter options. Should be reviewed every 12 months, especially for children.",
      },
    ],
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    subtitle: "A Whiter, Brighter You",
    description:
      "Easy, no-fuss, affordable option to give your teeth a new lease on life with our leading SDI Pola Whitening System.",
    sections: [
      {
        title: "What's Involved",
        content:
          "Pola Day/Night uses custom-made trays and SDI Pola bleaching gels. We take dental impressions at your initial consultation, which are sent to our dental laboratory for custom tray fabrication. The following week, your trays are ready for pickup with full instructions on the whitening process.",
      },
      {
        title: "Treatment Process",
        content: [
          "Initial consultation and impressions",
          "Custom tray fabrication (1 week)",
          "Pickup appointment with instructions",
          "Two-week home bleaching treatment",
          "Post-treatment review appointment",
        ],
      },
      {
        title: "At-Home Sessions",
        content:
          "Your daily bleaching sessions vary between 15-60 minutes depending on the Pola system chosen. Brighten your smile from just 15 minutes a day with minimal sensitivity.",
      },
      {
        title: "Results",
        content:
          "Pola Whitening delivers professional-grade results in the comfort of your own home. The system is designed to be effective yet gentle on teeth and gums, with noticeable results within the first week of treatment.",
      },
    ],
  },
];
