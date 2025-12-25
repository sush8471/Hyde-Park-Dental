import { useState } from "react";
import { Zap, Award, Cpu, Heart, CreditCard, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion, PanInfo } from "motion/react";

function FeatureWithAdvantages() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const advantages = [
    {
      icon: Zap,
      title: "Same-Day CEREC Crowns",
      description: "Get your custom crown designed, created, and fitted in just one appointment.",
      gradient: "from-amber-500/10 to-orange-500/10",
      iconColor: "text-amber-600"
    },
    {
      icon: Award,
      title: "40+ Years of Excellence",
      description: "Established in 1983, we've been Adelaide's trusted dental partner for over four decades.",
      gradient: "from-blue-500/10 to-indigo-500/10",
      iconColor: "text-blue-600"
    },
    {
      icon: Cpu,
      title: "State-of-the-Art Technology",
      description: "Advanced equipment and techniques ensure precise, comfortable treatments.",
      gradient: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-600"
    },
    {
      icon: Heart,
      title: "Family-Friendly Care",
      description: "From toddlers to seniors, we provide gentle dental care for all ages.",
      gradient: "from-rose-500/10 to-red-500/10",
      iconColor: "text-rose-600"
    },
    {
      icon: CreditCard,
      title: "Flexible Payment Options",
      description: "We accept all major health funds with on-the-spot HICAPS claims.",
      gradient: "from-emerald-500/10 to-teal-500/10",
      iconColor: "text-emerald-600"
    },
    {
      icon: MapPin,
      title: "Convenient Location",
      description: "Easily accessible at The Abbey on King William Road with ample parking.",
      gradient: "from-cyan-500/10 to-sky-500/10",
      iconColor: "text-cyan-600"
    }
  ];

  const handleDragEnd = (_event: any, info: PanInfo) => {
    // Prevent multiple transitions
    if (isTransitioning) return;

    const swipeThreshold = 50;
    const velocity = Math.abs(info.velocity.x);
    const offset = info.offset.x;

    // Only trigger if drag is significant enough
    if (Math.abs(offset) > swipeThreshold || velocity > 500) {
      setIsTransitioning(true);

      if (offset > 0 && currentSlide > 0) {
        // Swipe right - go to previous
        setCurrentSlide(currentSlide - 1);
      } else if (offset < 0 && currentSlide < advantages.length - 1) {
        // Swipe left - go to next
        setCurrentSlide(currentSlide + 1);
      }

      // Reset transition lock after animation completes
      setTimeout(() => setIsTransitioning(false), 400);
    }
  };

  return (
    <div className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex gap-[18px] py-12 lg:py-16 flex-col items-center text-center max-w-7xl mx-auto">
          {/* Heading and description with better spacing */}
          <div className="flex gap-6 flex-col items-center max-w-3xl">
            <h2 className="text-3xl md:text-5xl tracking-tighter font-regular text-text-primary font-display leading-tight">
              Why Choose <span className="gradient-text">Hyde Park Dental</span>
            </h2>
            <p className="text-lg lg:text-xl leading-relaxed tracking-tight text-muted-foreground">
              Experience the difference that expertise, technology, and genuine care make in your dental journey.
            </p>
          </div>

          {/* Mobile Carousel with increased top margin */}
          <div className="flex gap-10 pt-16 flex-col w-full md:hidden">
            <div className="relative">
              {/* Navigation Buttons */}
              <button
                onClick={() => {
                  if (!isTransitioning && currentSlide > 0) {
                    setIsTransitioning(true);
                    setCurrentSlide(currentSlide - 1);
                    setTimeout(() => setIsTransitioning(false), 400);
                  }
                }}
                disabled={currentSlide === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                aria-label="Previous benefit"
              >
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={() => {
                  if (!isTransitioning && currentSlide < advantages.length - 1) {
                    setIsTransitioning(true);
                    setCurrentSlide(currentSlide + 1);
                    setTimeout(() => setIsTransitioning(false), 400);
                  }
                }}
                disabled={currentSlide === advantages.length - 1}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                aria-label="Next benefit"
              >
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Carousel */}
              <div className="overflow-hidden px-12">
                <motion.div
                  className="flex"
                  animate={{ x: `-${currentSlide * 100}%` }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 35,
                    mass: 0.8
                  }}
                >
                  {advantages.map((advantage, index) => {
                    const Icon = advantage.icon;
                    return (
                      <div key={index} className="min-w-full px-4">
                        <div className="flex flex-col gap-6 items-center text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${advantage.gradient} flex items-center justify-center shadow-md`}>
                            <Icon className={`w-10 h-10 ${advantage.iconColor}`} />
                          </div>
                          <div className="flex flex-col gap-3">
                            <p className="font-bold text-text-primary text-2xl font-display">{advantage.title}</p>
                            <p className="text-muted-foreground text-base leading-relaxed">
                              {advantage.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {advantages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isTransitioning) {
                      setIsTransitioning(true);
                      setCurrentSlide(index);
                      setTimeout(() => setIsTransitioning(false), 400);
                    }
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'w-8 bg-primary' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid with increased top margin */}
          <div className="hidden md:flex gap-10 pt-16 flex-col w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 items-start lg:grid-cols-3 gap-10">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <div key={index} className="flex flex-row gap-6 w-full items-start group hover:scale-105 transition-transform duration-300">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${advantage.gradient} flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300`}>
                      <Icon className={`w-7 h-7 ${advantage.iconColor}`} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold text-text-primary text-lg leading-tight">{advantage.title}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { FeatureWithAdvantages };
