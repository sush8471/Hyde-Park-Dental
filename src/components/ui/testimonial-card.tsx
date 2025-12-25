"use client";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { BOOKING_URL } from "@/lib/constants";

// --- Type Definitions for props ---
export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  name: string;
  title: string;
  quote?: string;
  avatarSrc?: string;
  rating: number;
}

export interface ClientsSectionProps {
  tagLabel: string;
  title: React.ReactNode;
  description: string;
  stats: Stat[];
  testimonials: Testimonial[];
  primaryActionLabel: string;
  secondaryActionLabel: string;
  onSecondaryAction?: () => void;
  className?: string;
}

// --- Internal Sub-Components ---

// StatCard using shadcn variables
const StatCard = ({ value, label }: Stat) => (
  <Card className="bg-muted/50 border-border text-center rounded-xl">
    <CardContent className="p-4">
      <p className="text-3xl font-bold text-foreground">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </CardContent>
  </Card>
);

// Helper function to get initials from name
const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

// Testimonial card for carousel
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const initials = getInitials(testimonial.name);

  return (
    <div className={cn(
      "p-6 rounded-2xl shadow-lg flex flex-col h-auto w-full min-h-[320px]",
      "bg-card border border-border"
    )}>
      {/* Top section: Avatar and Author */}
      <div className="flex items-center gap-4">
        <Avatar className="w-14 h-14 rounded-xl">
          <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} />
          <AvatarFallback className="rounded-xl bg-primary/10 text-primary font-semibold text-lg">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div className="flex-grow">
          <p className="font-semibold text-lg text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
        </div>
      </div>

      {/* Middle section: Rating */}
      <div className="flex items-center gap-2 my-4">
        <span className="font-bold text-base text-foreground">{testimonial.rating.toFixed(1)}</span>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < Math.floor(testimonial.rating)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-muted-foreground/30"
              )}
            />
          ))}
        </div>
      </div>

      {/* Bottom section: Quote */}
      {testimonial.quote && (
        <p className="text-base text-muted-foreground leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
      )}
    </div>
  );
};

// --- Main Exported Component ---

export const ClientsSection = ({
  tagLabel,
  title,
  description,
  stats,
  testimonials,
  primaryActionLabel,
  secondaryActionLabel,
  onSecondaryAction,
  className,
}: ClientsSectionProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  return (
    <section className={cn("w-full bg-background text-foreground py-20 md:py-28", className)}>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start px-4">
        
        {/* Left Column: Sticky Content */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-20">
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-border bg-muted/50 px-3 py-1 text-sm">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-muted-foreground">{tagLabel}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-display text-text-primary">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground">{description}</p>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
          <div className="flex items-center gap-4 mt-6">
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full"
              onClick={onSecondaryAction}
            >
              {secondaryActionLabel}
            </Button>
            <Button size="lg" className="rounded-full" asChild>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                {primaryActionLabel}
              </a>
            </Button>
          </div>
        </div>

        {/* Right Column: Carousel */}
        <div className="relative w-full">
          {/* Desktop Arrow Navigation */}
          <div className="hidden md:flex gap-2 justify-end mb-6">
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="rounded-full disabled:opacity-50"
            >
              <ChevronLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="rounded-full disabled:opacity-50"
            >
              <ChevronRight className="size-5" />
            </Button>
          </div>

          {/* Carousel */}
          <Carousel
            setApi={setCarouselApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-full">
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-primary w-8" : "bg-primary/20"
                }`}
                onClick={() => carouselApi?.scrollTo(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


// Additional reviews data
const additionalReviews: Testimonial[] = [
  {
    name: "Rosemary Miller",
    title: "Patient",
    quote: "Everyone here is always so helpful. Nick is courteous and understanding and a very competent dentist. Nothing is too much trouble for him.",
    rating: 5.0,
  },
  {
    name: "James & Rosy Bennett",
    title: "Long-term Patients",
    quote: "We have been attending this clinic for many years. Nicholas Lucas is our dentist and both he, the assistants and the office staff are all very professional, friendly and caring.",
    rating: 5.0,
  },
  {
    name: "Ian Richardson",
    title: "Patient for 14+ Years",
    quote: "I have been looked after by Nick & Dan for over 14 years now and have always been treated with expertise and professionalism. All of the staff; from the reception, dental hygienists and dentists are very friendly and competent. I would highly recommend this dental practice.",
    rating: 5.0,
  },
  {
    name: "Tony Leech",
    title: "Long-time Patient",
    quote: "I have been going to Hyde Park Dental for many years, Nick and the fantastic team there always look after you. I would recommend them to anyone!",
    rating: 5.0,
  },
  {
    name: "Wes Moyle",
    title: "Patient",
    quote: "From arriving at Reception to being looked after with skill and empathy by Nick and his patient assistants, the experience is the best I have had at any dental practice. Skillful, empathetic and excellent communicators. I have had lots of unpleasant experiences at dentists but never here. Beautiful, thoughtful, skilled people at every station. I thoroughly recommend this clinic.",
    rating: 5.0,
  },
  {
    name: "Chris H",
    title: "New Patient",
    quote: "Excellent service, warm welcome as new patient, friendly staff, gentle yet effective dental examination with clear demonstration (photos) and explanation of my dental condition, and great engagement for future visits. I highly recommend Nick and his team.",
    rating: 5.0,
  },
  {
    name: "Georgina Matulic",
    title: "Patient",
    quote: "My experience at the Hyde Park Dental was fantastic, staff were friendly and supportive most of all the place was very clean and had a lovely calm feeling about it. Dentist Dan was so fantastic thorough and gentle and professional and provided me excellent service and advice. Highly recommend.",
    rating: 5.0,
  },
  {
    name: "Palma Neagle",
    title: "Patient for 15 Years",
    quote: "My family and I have been attending Hyde Park Dental for almost fifteen years. We have received exceptional care without fail. Nick, Tracey, and now Brit, have maintained my dental care with consistent excellence. The admin team is always friendly and professional. The unique building has a beautiful, peaceful aspect that puts us at ease. We are very fortunate to have access to such an outstanding clinic.",
    rating: 5.0,
  },
  {
    name: "Janette McKinnon",
    title: "Patient",
    quote: "Thank you to the wonderful staff at Hyde Park Dental. They were able to squeeze me between two appointments for an urgent treatment. The staff were friendly, accommodating, and the dentist work was quick and top notch. Thank you very much. I highly recommend them.",
    rating: 5.0,
  },
  {
    name: "Cindy Neely",
    title: "Patient",
    quote: "Hyde Park Dental is in a very beautiful converted Church on King William Rd. The Clinic has all the mod cons including screens on the ceiling and a soothing view of rocks and running water. The environment itself helps to put you at ease. All the staff are very engaging and friendly. My hygienist, Brit, does a very thorough job and Nick who does my checkup is very professional with a personal touch. I would highly recommend Hyde Park Clinic!",
    rating: 5.0,
  },
  {
    name: "William Wood",
    title: "New to Adelaide",
    quote: "Excellent dentistry and such a super friendly team! We're new to Adelaide and was recommended these guys from our old dentist in Sydney. Nick and the team have exceeded our expectations and having just gone through an implant, can say it was seamless, pain free and I was always kept up to date with progress. Highly recommend!",
    rating: 5.0,
  },
  {
    name: "Sean Crook",
    title: "Patient",
    quote: "Hyde Park Dental is by far the most welcoming, friendly and caring Practice that I have been to. I would highly recommend Hyde Park Dental to anyone that is in need of an excellent team of professionals.",
    rating: 5.0,
  },
  {
    name: "Jan",
    title: "Patient",
    quote: "Wonderful dentist Dr Dan. Went for a crown. Things have changed was only there 2 hours and left with crown in place due to the skill of the dentist and a wonderful machine. Pain free and able to eat as usual that day. Really lovely staff as well. Highly recommend.",
    rating: 5.0,
  },
  {
    name: "Greg Mackie",
    title: "Patient for 40 Years",
    quote: "Having been a patient for at least 40 years HPDC have become the trusted people for all things oral care and dental maintenance. From father Danny to son Dan, they have never let me down.",
    rating: 5.0,
  },
  {
    name: "Philip Messent",
    title: "Family Patient",
    quote: "The team at Hyde Park Dental provide a great service. Having attended for many years, as well as the rest of my family, I have valued the high level of care and expertise provided. Procedures and treatment plans are clearly explained, and I feel safe and trust they make our well being a priority. Their thoughtful, warm and friendly approach also makes going easier. Highly recommend!",
    rating: 5.0,
  },
  {
    name: "Bill Fawcett",
    title: "Patient",
    quote: "Very impressed with professionalism in the surgery as well as technical facilities that allow sophisticated on-site procedures. Enjoyed very proactive response when requesting consultation at short notice and Dan performed his magic patiently and as thoroughly as always. Cannot fault the practice.",
    rating: 5.0,
  },
  {
    name: "Aaron London",
    title: "Patient for 4 Years",
    quote: "I've been going to Hyde Park Dental for 4 years now, and every visit has been a fantastic experience! The team is incredibly friendly and welcoming, creating a warm, family-like atmosphere that immediately puts you at ease. From the moment you walk in, you can tell they genuinely care about their patients. The entire visit is always smooth and positive, and I'm so happy to have found a dental office where I feel comfortable. Highly recommend!",
    rating: 5.0,
  },
  {
    name: "Garry Mott",
    title: "Patient for 35 Years",
    quote: "Great service as always, Cherry did a great job of my four monthly clean and Danny did his routine check and reported all is good! These guys have been my dentist for 35 years and I can endorse them...no problems to report confirms they stay on top of my oral health and catch items that need attention before they develop into a problem that requires emergency responses. Great staff and wonderful service...HIGHLY RECOMMENDED!!",
    rating: 5.0,
  },
];

// Real Hyde Park Dental Reviews Component
export const HydeParkTestimonials = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  
  const stats: Stat[] = [
    { value: "40+", label: "Years of Service" },
    { value: "1000+", label: "Happy Patients" },
    { value: "5.0", label: "Google Rating" },
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Rosalyn Cross",
      title: "Long-time Patient",
      quote: "Have been going to this practice for over 30 years and introduced my children to their first dentist here - they still attend as adults. Nick always explains what he sees and recommends for treatment. Great group of people from the reception and hygienists to dentist. Will always speak highly of this practice.",
      rating: 5.0,
    },
    {
      name: "Lydia Kellner",
      title: "Patient",
      quote: "I can't recommend Nick and the team at Hyde Park Dental highly enough. Nick is incredibly compassionate, caring, and always takes the time to listen to any concerns. He creates such a calm, anxiety-free environment. I used to be extremely anxious about dental visits, but over the past 8 years with Nick, that's completely changed. I now actually look forward to my check-ups!",
      rating: 5.0,
    },
    {
      name: "Christina Derbyshire",
      title: "Patient since 1984",
      quote: "I have been attending this practice since about 1984 and patient care has always been the priority. Dentistry skill, great listening, clear and realistic answers in line with best practice. I've always been reassured, understood and received the best care that was needed.",
      rating: 5.0,
    },
    {
      name: "Sarah Ayres",
      title: "Patient",
      quote: "Nick is very kind and competent. After previous dental trauma, I feel safe with Nick. All the staff are very helpful. It feels like family to me now. The premises are light and surrounded by nature. I highly recommend Hyde Park Dental.",
      rating: 5.0,
    },
    {
      name: "Isabella Di Febo",
      title: "Patient",
      quote: "I saw Dr Nick after experiencing pain from a filling I had received at another dentist. Dr Nick was super helpful, understanding, and catered to all my questions and concerns. His expertise in the field eased a lot of my anxiety while fixing my filling too - highly recommend!",
      rating: 5.0,
    },
    {
      name: "Yvonne Brimson",
      title: "Family Patient",
      quote: "Hyde Park Dental has been our family dentist for many years. They are very professional yet friendly and knowledgeable. They refer if needed however do a great job of teeth cleaning and preserving oral health. Will be looking after our teeth for many more years!",
      rating: 5.0,
    },
    {
      name: "Ingrid Sanders",
      title: "Patient",
      quote: "So professional! Dr Nick listens to concerns I may have and gives explanations and advice that are easy to follow. I recommend Hyde Park Dental because I feel heard and cared for!",
      rating: 5.0,
    },
    {
      name: "Bugsie C.",
      title: "Patient for 30+ Years",
      quote: "I've been going to Hyde Park Dental for over 30 years. They are kind, efficient and know their patients well. Definitely worth making your family's practice.",
      rating: 5.0,
    },
    {
      name: "Robert Meaney",
      title: "Patient for 20 Years",
      quote: "I have been coming to Hyde Park Dental for the past 20 years. The staff are very professional and always cheerful and make me feel welcome and important. The clinic has a calm and restful ambience and Dr Nick Lucas always takes an interest in my personal life as well as giving the best dental treatment. Highly recommended and I will not go anywhere else.",
      rating: 5.0,
    },
  ];

  return (
    <>
      <ClientsSection
        tagLabel="Trusted by Adelaide"
        title={
          <>
            Patient <span className="gradient-text">Stories</span>
          </>
        }
        description="Four decades of exceptional dental care, trusted by generations of families in Hyde Park."
        stats={stats}
        testimonials={testimonials}
        primaryActionLabel="Book Appointment"
        secondaryActionLabel="Read More Reviews"
        onSecondaryAction={() => setShowAllReviews(true)}
      />

      {/* Additional Reviews Dialog */}
      <Dialog open={showAllReviews} onOpenChange={setShowAllReviews}>
        <DialogContent className="sm:max-w-[700px] max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold font-display text-text-primary">
              More Patient Reviews
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground">
              Real stories from our valued patients at Hyde Park Dental
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 pt-4">
            {additionalReviews.map((review, idx) => (
              <div key={idx} className="pb-6 border-b border-border last:border-0 last:pb-0">
                <div className="flex items-start gap-3 mb-3">
                  <Avatar className="w-12 h-12 rounded-xl">
                    <AvatarFallback className="rounded-xl bg-primary/10 text-primary font-semibold">
                      {getInitials(review.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-base text-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.title}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-foreground">{review.rating.toFixed(1)}</span>
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "{review.quote}"
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-border">
            <Button 
              className="w-full"
              onClick={() => setShowAllReviews(false)}
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
