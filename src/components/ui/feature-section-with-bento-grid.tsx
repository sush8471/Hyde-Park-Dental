import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Zap, Shield, Heart, Award } from "lucide-react";

export function FeaturesSectionWithBentoGrid() {
  const features = [
    {
      title: "Same-Day CEREC Crowns",
      description:
        "Get your custom crown designed, created, and fitted in just one appointment with our advanced CEREC technology.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 md:col-span-4 lg:col-span-4 border-b md:border-r border-gray-200",
    },
    {
      title: "Advanced Technology",
      description:
        "State-of-the-art equipment and techniques ensure precise, comfortable, and efficient treatments.",
      skeleton: <SkeletonTwo />,
      className: "col-span-1 md:col-span-2 lg:col-span-2 border-b border-gray-200",
    },
    {
      title: "40+ Years of Excellence",
      description:
        "Established in 1983, we've been Adelaide's trusted dental partner for over four decades.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-r border-gray-200",
    },
    {
      title: "Family-Friendly Care",
      description:
        "From toddlers to seniors, we provide gentle, comprehensive dental care for the whole family.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-none",
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-20 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-bold text-text-primary font-display">
          Why Choose <span className="gradient-text">Hyde Park Dental</span>
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-text-secondary text-center font-normal">
          Experience the difference that expertise, technology, and genuine care make in your dental journey.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 mt-12 border rounded-md border-gray-200 bg-white">
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
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden bg-white`, className)}>
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

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-gradient-to-br from-primary/10 to-accent/10 shadow-lg group h-full rounded-lg">
        <div className="flex flex-1 w-full h-full flex-col space-y-2 items-center justify-center">
          <Zap className="w-20 h-20 text-primary mb-4" />
          <div className="text-center">
            <p className="text-4xl font-bold text-primary font-display">1 Day</p>
            <p className="text-sm text-text-secondary mt-2">Crown Completion</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-40 bg-gradient-to-t from-white via-white to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-40 bg-gradient-to-b from-white via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="relative flex gap-10 h-full group/image">
      <div className="w-full mx-auto bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2 relative items-center justify-center py-12">
          <Award className="h-24 w-24 text-accent mb-4" />
          <div className="text-center">
            <p className="text-5xl font-bold text-primary font-display">40+</p>
            <p className="text-lg text-text-secondary mt-2 font-semibold">Years of Excellence</p>
            <p className="text-sm text-text-secondary mt-1">Since 1983</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  const icons = [Shield, Heart, Zap, Award];

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
      <div className="grid grid-cols-2 gap-4">
        {icons.map((Icon, idx) => (
          <motion.div
            key={"tech-" + idx}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl p-4 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center"
          >
            <Icon className="w-12 h-12 text-primary" />
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60 flex flex-col items-center justify-center relative bg-transparent mt-10">
      <div className="text-center">
        <Heart className="w-20 h-20 text-accent mx-auto mb-4" />
        <p className="text-2xl font-bold text-primary font-display">All Ages Welcome</p>
        <p className="text-sm text-text-secondary mt-2">Pediatric to Geriatric Care</p>
      </div>
    </div>
  );
};
