import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import WhatIDo from "@/components/home/WhatIDo";
import FeaturedVentures from "@/components/home/FeaturedVentures";
import JourneyPreview from "@/components/home/JourneyPreview";
import BeyondWorkPreview from "@/components/home/BeyondWorkPreview";
import ThoughtsPreview from "@/components/home/ThoughtsPreview";
import CurrentlyExploring from "@/components/home/CurrentlyExploring";
import ConnectCTA from "@/components/home/ConnectCTA";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutPreview />
      <WhatIDo />
      <FeaturedVentures />
      <JourneyPreview />
      <BeyondWorkPreview />
      <ThoughtsPreview />
      <CurrentlyExploring />
      <ConnectCTA />
    </div>
  );
}
