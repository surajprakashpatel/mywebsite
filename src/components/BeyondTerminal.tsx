"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Dumbbell, Camera, Bike } from "lucide-react";
import Image from "next/image";

const items = [
  {
    id: 1,
    title: "Gym & Bodybuilding",
    subtitle: "The Iron Mirror",
    description:
      "Physical discipline mirrors intellectual focus. The daily commitment to consistency in training, recovery, and nutrition builds the high-pressure stamina necessary to architect systems that cannot fail.",
    image: "/images/gym_discipline.png",
    icon: <Dumbbell size={16} />,
  },
  {
    id: 2,
    title: "Landscape Photography",
    subtitle: "Observation & Frame",
    description:
      "Documenting the quiet, raw textures of rural Chhattisgarh. Operating a camera forces a slower cadence, demanding patience and trains the eye to find symmetry and pattern in chaotic environments.",
    image: "/images/chhattisgarh_nature.png",
    icon: <Camera size={16} />,
  },
  {
    id: 3,
    title: "Motorcycling",
    subtitle: "Velocity & Clearance",
    description:
      "Exploring highways and city outskirts on two wheels. Motorcycling clears the mental workspace, replacing compiler errors with the immediate feedback of the road and solitary focus.",
    image: "/images/motorcycle_exploration.png",
    icon: <Bike size={16} />,
  },
];

export default function BeyondTerminal() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const slideLeft = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const slideRight = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="perspective" className="relative py-24 md:py-32 px-6 bg-obsidian-950 overflow-hidden">
      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[11px] tracking-widest uppercase text-neutral-500 font-sans font-medium">
                04 // Beyond the Terminal
              </span>
              <div className="h-[1px] w-24 bg-white/[0.06]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-white tracking-tight">
              Discipline & <span className="italic">perspective.</span>
            </h2>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={slideLeft}
              className="p-3 border border-white/[0.06] hover:border-white/[0.15] text-neutral-400 hover:text-white transition-all duration-300 bg-white/[0.01]"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={slideRight}
              className="p-3 border border-white/[0.06] hover:border-white/[0.15] text-neutral-400 hover:text-white transition-all duration-300 bg-white/[0.01]"
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left side info card */}
            <div className="lg:col-span-5 space-y-6">
              <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                    className="space-y-4"
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/[0.06] bg-white/[0.01] text-gold-accent text-[11px] tracking-wider uppercase font-sans">
                      {items[currentIndex].icon}
                      <span>{items[currentIndex].subtitle}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-white leading-tight">
                      {items[currentIndex].title}
                    </h3>
                    <p className="text-sm md:text-base text-neutral-400 font-sans font-light leading-relaxed">
                      {items[currentIndex].description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Indicators */}
                <div className="flex items-center gap-2 pt-4">
                  {items.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-[1px] transition-all duration-500 ${
                        index === currentIndex ? "w-12 bg-white" : "w-6 bg-white/20"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Right side large image */}
              <div className="lg:col-span-7">
                <div className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-neutral-900 border border-white/[0.06] overflow-hidden">
                  {/* Tech overlay grid lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-10" />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 0.9, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                      className="absolute inset-0"
                    >
                    <Image
                      src={items[currentIndex].image}
                      alt={items[currentIndex].title}
                      fill
                      sizes="(max-w-1024px) 100vw, 700px"
                      className="object-cover grayscale brightness-90 transition-all duration-700 hover:scale-101"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Framing details */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20 z-20" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/20 z-20" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/20 z-20" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/20 z-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
