import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { serviceDetails } from "./service-details-data";
import { BOOKING_URL } from "@/lib/constants";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface ServicesGalleryProps {
  title?: string;
  description?: string;
  items?: ServiceItem[];
}

const defaultServices: ServiceItem[] = [
  {
    id: "cerec",
    title: "CEREC Porcelain Restoration",
    description:
      "Get your custom crown designed, created, and fitted in just one appointment with our state-of-the-art CEREC technology.",
    href: "/services/cerec",
    image: "/services/cerec-crowns.png",
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description:
      "Transform your smile with veneers, bonding, and aesthetic treatments that boost your confidence.",
    href: "/services/cosmetic-dentistry",
    image: "/services/cosmetic-smile.png",
  },
  {
    id: "children",
    title: "Children's Dentistry",
    description:
      "Gentle, fun dental care that helps kids develop healthy habits and positive attitudes toward oral health.",
    href: "/services/childrens-dentistry",
    image: "/services/children-dentistry.jpg",
  },
  {
    id: "hygiene",
    title: "Dental Hygiene",
    description:
      "Professional cleaning and preventative care to keep your smile healthy, bright, and beautiful.",
    href: "/services/dental-hygiene",
    image: "/services/dental-hygiene.jpg",
  },
  {
    id: "implants",
    title: "Dental Implants",
    description:
      "Permanent, natural-looking tooth replacements using the latest implant technology for lasting results.",
    href: "/services/dental-implants",
    image: "/services/dental-implant.jpg",
  },
  {
    id: "root-canal",
    title: "Root Canal Therapy",
    description:
      "Gentle, pain-free root canal therapy to save your natural teeth and relieve discomfort.",
    href: "/services/root-canal",
    image: "/services/root-canal.jpg",
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    description:
      "Straighten your smile discreetly with Invisalign or fast-track results with Smile Fast treatments.",
    href: "/services/orthodontics",
    image: "/services/invisalign.jpg",
  },
  {
    id: "general",
    title: "General Dental",
    description:
      "Complete check-ups, fillings, and routine care for the whole family's oral health needs.",
    href: "/services/general-dental",
    image: "/services/general-dental.jpg",
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    description:
      "Professional whitening treatments for a brighter, more radiant smile that boosts your confidence.",
    href: "/services/teeth-whitening",
    image: "/services/teeth-whitening.jpg",
  },
];

const ServicesGallery = ({
  description = "From routine check-ups to complete smile makeovers, we offer expert dental care with the latest technology and techniques.",
  items = defaultServices,
}: ServicesGalleryProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const service = serviceDetails.find((s) => s.id === selectedService);

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto">
        <div className="mb-8 flex flex-col items-center text-center md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4 items-center max-w-3xl">
            <h2 className="text-3xl font-bold font-display md:text-4xl lg:text-5xl text-text-primary">
              Complete <span className="gradient-text">Smile Solutions</span>
            </h2>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            dragFree: true,
            align: "start",
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <div
                  onClick={() => handleServiceClick(item.id)}
                  className="group rounded-xl cursor-pointer"
                >
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-full bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                      <div className="mb-2 pt-4 text-xl font-semibold font-display md:mb-3 md:pt-4 lg:pt-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                        {item.title}
                      </div>

                      <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        {item.description}
                      </div>

                      <div className="flex items-center text-xs font-medium text-white/70 group-hover:text-white transition-colors">
                        Learn More{" "}
                        <ArrowRight className="ml-1 size-3 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-primary w-8" : "bg-primary/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Service Details Dialog */}
      <Dialog
        open={selectedService !== null}
        onOpenChange={(open) => !open && setSelectedService(null)}
      >
        <DialogContent className="sm:max-w-[700px] max-h-[85vh] overflow-y-auto">
          {service && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold font-display text-text-primary">
                  {service.title}
                </DialogTitle>
                <DialogDescription className="text-base text-primary font-semibold">
                  {service.subtitle}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 pt-4">
                {/* Main Description */}
                <p className="text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Sections */}
                {service.sections.map((section, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 className="text-base font-bold text-text-primary">
                      {section.title}
                    </h3>
                    {Array.isArray(section.content) ? (
                      <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                        {section.content.map((item, itemIdx) => (
                          <li key={itemIdx} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-6 border-t border-border flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setSelectedService(null)}
                >
                  Close
                </Button>
                <Button className="flex-1" asChild>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Appointment
                  </a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export { ServicesGallery };
