import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ServiceFeatureProps {
  badge: string;
  title: string;
  description: string;
  benefits: string[];
  imagePlaceholder?: React.ReactNode;
}

function ServiceFeature({ badge, title, description, benefits, imagePlaceholder }: ServiceFeatureProps) {
  return (
    <div className="w-full py-12 lg:py-16">
      <div className="container mx-auto">
        <div className="grid border rounded-lg container p-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">{badge}</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h3 className="text-3xl lg:text-4xl tracking-tighter max-w-xl text-left font-bold font-display text-text-primary">
                  {title}
                </h3>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  {description}
                </p>
              </div>
            </div>
            <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-2 items-start lg:grid-cols-1 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary flex-shrink-0" />
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-text-primary">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square flex items-center justify-center">
            {imagePlaceholder || (
              <p className="text-muted-foreground text-sm">Service Image</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesShowcase() {
  const services = [
    {
      badge: "Advanced Technology",
      title: "CEREC Porcelain Restoration",
      description: "Get your custom crown designed, created, and fitted in just one appointment with our state-of-the-art CEREC technology.",
      benefits: [
        "Same-day crowns - no temporary crowns needed",
        "Digital impressions - no messy molds",
        "Natural-looking porcelain results",
        "Save time with single-visit treatment"
      ]
    },
    {
      badge: "Cosmetic Excellence",
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our comprehensive cosmetic dentistry services designed to boost your confidence.",
      benefits: [
        "Porcelain veneers for perfect smiles",
        "Professional teeth whitening",
        "Composite bonding for minor repairs",
        "Complete smile makeovers"
      ]
    },
    {
      badge: "Family Care",
      title: "Children's Dentistry",
      description: "Gentle, fun dental care that helps kids develop healthy habits and positive attitudes toward oral health.",
      benefits: [
        "Kid-friendly environment and staff",
        "Preventative care and education",
        "Fluoride treatments and sealants",
        "Early orthodontic assessment"
      ]
    },
    {
      badge: "Preventative Care",
      title: "Dental Hygiene",
      description: "Professional cleaning and preventative care to keep your smile healthy, bright, and beautiful.",
      benefits: [
        "Professional scale and clean",
        "Plaque and tartar removal",
        "Gum disease prevention",
        "Oral health education"
      ]
    },
    {
      badge: "Restorative Dentistry",
      title: "Dental Implants",
      description: "Permanent, natural-looking tooth replacements using the latest implant technology for lasting results.",
      benefits: [
        "Permanent tooth replacement solution",
        "Natural look, feel, and function",
        "Prevents bone loss",
        "Long-lasting with proper care"
      ]
    },
    {
      badge: "Pain Relief",
      title: "Root Canal Therapy",
      description: "Gentle, pain-free root canal therapy to save your natural teeth and relieve discomfort.",
      benefits: [
        "Save your natural tooth",
        "Pain-free modern techniques",
        "Single-visit treatment available",
        "Long-term tooth preservation"
      ]
    },
    {
      badge: "Smile Alignment",
      title: "Orthodontics",
      description: "Straighten your smile discreetly with Invisalign or fast-track results with Smile Fast treatments.",
      benefits: [
        "Invisalign clear aligners",
        "Traditional braces options",
        "Smile Fast for quick results",
        "Customized treatment plans"
      ]
    },
    {
      badge: "Comprehensive Care",
      title: "General Dental",
      description: "Complete check-ups, fillings, and routine care for the whole family's oral health needs.",
      benefits: [
        "Thorough dental examinations",
        "Digital X-rays",
        "Tooth-colored fillings",
        "Emergency dental care"
      ]
    },
    {
      badge: "Aesthetic Enhancement",
      title: "Teeth Whitening",
      description: "Professional whitening treatments for a brighter, more radiant smile that boosts your confidence.",
      benefits: [
        "Professional-grade whitening",
        "Safe and effective results",
        "In-office and take-home options",
        "Long-lasting bright smile"
      ]
    }
  ];

  return (
    <div className="w-full bg-background">
      <div className="container mx-auto py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-4">
            Comprehensive <span className="gradient-text">Dental Services</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            From routine check-ups to complete smile makeovers, we offer the full spectrum of dental care with the latest technology and techniques.
          </p>
        </div>
        
        <div className="flex flex-col gap-0">
          {services.map((service, index) => (
            <ServiceFeature
              key={index}
              badge={service.badge}
              title={service.title}
              description={service.description}
              benefits={service.benefits}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export { ServicesShowcase, ServiceFeature };
