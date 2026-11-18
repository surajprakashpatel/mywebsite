import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import BentoGrid from "@/components/BentoGrid";
import Timeline from "@/components/Timeline";
import BeyondTerminal from "@/components/BeyondTerminal";
import Connect from "@/components/Connect";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Manifesto />
        <BentoGrid />
        <Timeline />
        <BeyondTerminal />
        <Connect />
      </main>
    </div>
  );
}

