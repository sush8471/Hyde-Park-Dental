"use client";

import React, { useState, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { GripVertical } from "lucide-react";

interface CompareProps {
  firstImage?: string;
  secondImage?: string;
  className?: string;
  firstImageClassName?: string;
  secondImageClassname?: string;
  initialSliderPercentage?: number;
  slideMode?: "hover" | "drag";
  showHandlebar?: boolean;
}

export const Compare = ({
  firstImage,
  secondImage,
  className,
  firstImageClassName,
  secondImageClassname,
  initialSliderPercentage = 50,
  slideMode = "drag",
  showHandlebar = true,
}: CompareProps) => {
  const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleStart = useCallback(
    (clientX: number) => {
      if (slideMode === "drag") {
        setIsDragging(true);
      }
    },
    [slideMode]
  );

  const handleEnd = useCallback(() => {
    if (slideMode === "drag") {
      setIsDragging(false);
    }
  }, [slideMode]);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!sliderRef.current) return;
      if (slideMode === "hover" || (slideMode === "drag" && isDragging)) {
        const rect = sliderRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percent = (x / rect.width) * 100;
        requestAnimationFrame(() => {
          setSliderXPercent(Math.max(0, Math.min(100, percent)));
        });
      }
    },
    [slideMode, isDragging]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => handleStart(e.clientX),
    [handleStart]
  );
  const handleMouseUp = useCallback(() => handleEnd(), [handleEnd]);
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => handleMove(e.clientX),
    [handleMove]
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      // Only start dragging if touching the handle area
      const touch = e.touches[0];
      if (!sliderRef.current) return;
      
      const rect = sliderRef.current.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const percent = (x / rect.width) * 100;
      
      // Check if touch is near the slider (within 15% of slider position)
      const isNearSlider = Math.abs(percent - sliderXPercent) < 15;
      
      if (isNearSlider) {
        e.preventDefault(); // Prevent scroll only when actually dragging slider
        handleStart(touch.clientX);
      }
    },
    [handleStart, sliderXPercent]
  );

  const handleTouchEnd = useCallback(() => handleEnd(), [handleEnd]);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (isDragging) {
        e.preventDefault(); // Only prevent scroll when actively dragging
        handleMove(e.touches[0].clientX);
      }
    },
    [handleMove, isDragging]
  );

  const handleMouseLeave = () => {
    if (slideMode === "hover") {
      setSliderXPercent(initialSliderPercentage);
    }
    if (slideMode === "drag") {
      setIsDragging(false);
    }
  };

  return (
    <div
      ref={sliderRef}
      className={cn("w-[400px] h-[400px] overflow-hidden relative", className)}
      style={{
        cursor: slideMode === "drag" ? (isDragging ? "grabbing" : "grab") : "col-resize",
        touchAction: "pan-y", // Allow vertical scrolling, prevent horizontal pan
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      {/* Slider line */}
      <AnimatePresence initial={false}>
        <motion.div
          className="h-full w-1 absolute top-0 m-auto z-30 bg-gradient-to-b from-transparent from-[5%] to-[95%] via-primary to-transparent"
          style={{
            left: `${sliderXPercent}%`,
            top: "0",
            zIndex: 40,
          }}
          transition={{ duration: 0 }}
        >
          {/* Glow effect */}
          <div className="w-24 h-full mask-radial-gradient absolute top-1/2 -translate-y-1/2 -left-12 bg-gradient-to-r from-primary/30 via-transparent to-transparent z-20 opacity-50" />
          
          {showHandlebar && (
            <div className="h-12 w-12 rounded-full top-1/2 -translate-y-1/2 bg-white z-30 -left-6 absolute flex items-center justify-center shadow-lg border-2 border-primary/20">
              <GripVertical className="h-6 w-6 text-primary" />
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* After image (clipped) */}
      <div className="overflow-hidden w-full h-full relative z-20 pointer-events-none">
        <AnimatePresence initial={false}>
          {firstImage ? (
            <motion.div
              className={cn(
                "absolute inset-0 z-20 rounded-2xl flex-shrink-0 w-full h-full select-none overflow-hidden",
                firstImageClassName
              )}
              style={{
                clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)`,
              }}
              transition={{ duration: 0 }}
            >
              <img
                alt="After"
                src={firstImage}
                className={cn(
                  "absolute inset-0 z-20 rounded-2xl flex-shrink-0 w-full h-full select-none object-cover",
                  firstImageClassName
                )}
                draggable={false}
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      {/* Before image (background) */}
      <AnimatePresence initial={false}>
        {secondImage ? (
          <motion.img
            className={cn(
              "absolute top-0 left-0 z-[19] rounded-2xl w-full h-full select-none object-cover",
              secondImageClassname
            )}
            alt="Before"
            src={secondImage}
            draggable={false}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
};
