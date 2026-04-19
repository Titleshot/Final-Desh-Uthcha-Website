import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { SilenceSection } from "./sections/SilenceSection";
import { ProblemSection } from "./sections/ProblemSection";
import { SystemSection } from "./sections/SystemSection";
import { SolutionSection } from "./sections/SolutionSection";
import { SectorsSection } from "./sections/SectorsSection";
import { NationSection } from "./sections/NationSection";
import { TrustSection } from "./sections/TrustSection";
import { ClosureSection } from "./sections/ClosureSection";

export default function App() {
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavVisible(window.scrollY > 56);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar visible={navVisible} />
      <main>
        <SilenceSection />
        <ProblemSection />
        <SystemSection />
        <SolutionSection />
        <SectorsSection />
        <NationSection />
        <TrustSection />
        <ClosureSection />
      </main>
    </>
  );
}
