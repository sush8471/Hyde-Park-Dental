import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Sparkles, Smile, Stethoscope, Baby, Users, Heart, Shield, Calendar } from "lucide-react";

export function ServicesBentoGrid() {
  const features = [
    {
      title: "Cosmetic Dentistry",
      description:
        "Transform your smile with veneers, bonding, and aesthetic treatments that boost your confidence.",
      skeleton: <SkeletonCosmetic />,
      className:
        "col-span-1 md:col-span-4 lg:col-span-4 border-b md:border-r border-gray-200",
    },
    {
      title: "CEREC Same-Day",
      description:
        "Get your custom crown in just one visit with our advanced CEREC technology.",
      skeleton: <SkeletonCerec />,
      className: "col-span-1 md:col-span-2 lg:col-span-2 border-b border-gray-200",
    },
    {
      title: "Dental Implants",
      description:
        "Permanent, natural-looking tooth replacements using the latest implant technology.",
      skeleton: <SkeletonImplants />,
      className:
        "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-r border-gray-200",
    },
    {
      title: "Family Dentistry",
      description:
        "Comprehensive dental care for patients of all ages, from children to seniors.",
      skeleton: <SkeletonFamily />,
      className: "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-none",
    },
  ];
  
  return (
    <div className="relative z-20 py-10 lg:py-20 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-bold text-text-primary font-display">
          Comprehensive <span className="gradient-text">Dental Services</span>
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-text-secondary text-center font-normal">
          From routine check-ups to complete smile makeovers, we offer the full spectrum of dental care.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 mt-12 border rounded-md border-gray-200 bg-white shadow-lg">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden bg-white hover:bg-gray-50 transition-colors duration-300`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-text-primary font-display text-xl md:text-2xl md:leading-snug font-bold">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-text-secondary font-normal",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonCosmetic = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-gradient-to-br from-accent/10 to-primary/10 shadow-lg group h-full rounded-lg">
        <div className="flex flex-1 w-full h-full flex-col space-y-4 items-center justify-center">
          <Sparkles className="w-16 h-16 text-accent mb-2" />
          <div className="text-center space-y-2">
            <p className="text-sm font-semibold text-text-primary">✨ Veneers</p>
            <p className="text-sm font-semibold text-text-primary">✨ Whitening</p>
            <p className="text-sm font-semibold text-text-primary">✨ Bonding</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-40 bg-gradient-to-t from-white via-white to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-40 bg-gradient-to-b from-white via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonImplants = () => {
  return (
    <div className="relative flex gap-10 h-full group/image">
      <div className="w-full mx-auto bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2 relative items-center justify-center py-12">
          <Stethoscope className="h-20 w-20 text-primary mb-4" />
          <div className="text-center space-y-2">
            <p className="text-lg font-bold text-primary font-display">Advanced Technology</p>
            <p className="text-sm text-text-secondary">Permanent tooth replacement</p>
            <p className="text-sm text-text-secondary">Natural look & feel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SkeletonCerec = () => {
  const icons = [Calendar, Shield, Heart];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  
  return (
    <div className="relative flex flex-col items-center justify-center p-8 gap-6 h-full overflow-hidden">
      <div className="flex flex-col items-center gap-4">
        <div className="text-center mb-2">
          <p className="text-4xl font-bold text-primary font-display">1 Visit</p>
          <p className="text-sm text-text-secondary mt-1">Complete in Hours</p>
        </div>
        <div className="flex gap-3">
          {icons.map((Icon, idx) => (
            <motion.div
              key={"cerec-" + idx}
              variants={imageVariants}
              whileHover="whileHover"
              whileTap="whileTap"
              className="rounded-lg p-3 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center"
            >
              <Icon className="w-8 h-8 text-primary" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFamily = () => {
  return (
    <div className="h-60 md:h-60 flex flex-col items-center justify-center relative bg-transparent mt-10">
      <div className="text-center space-y-4">
        <Users className="w-20 h-20 text-primary mx-auto" />
        <div>
          <p className="text-2xl font-bold text-primary font-display mb-2">All Ages Welcome</p>
          <div className="flex gap-2 justify-center flex-wrap">
            <Baby className="w-5 h-5 text-text-secondary" />
            <Smile className="w-5 h-5 text-text-secondary" />
            <Heart className="w-5 h-5 text-text-secondary" />
          </div>
          <p className="text-sm text-text-secondary mt-2">Pediatric to Geriatric Care</p>
        </div>
      </div>
    </div>
  );
};
