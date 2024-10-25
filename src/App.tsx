import { useState } from "react";

import { ReactLenis } from "@studio-freight/react-lenis";

import MouseCursor from "./components/MouseCursor";
import LogoNav from "./components/LogoNav";
import MainSection from "./layout/MainSection";
import NavSection from "./layout/NavSection";
import AboutSection from "./layout/AboutSection";
import WorkSection from "./layout/WorkSection";
import PricesSection from "./layout/PricesSection";
import ContactSection from "./layout/ContactSection";
import FooterSection from "./layout/FooterSection";
import { useMediaQuery } from "./hooks/useMediaQuery";

export enum SelectedPageValueType {
  Home = "home",
  Navigation = "navigation",
  AboutUs = "aboutus",
  OurWork = "ourwork",
  Prices = "prices",
  ContactUs = "contactus",
}

export default function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPageValueType>(
    SelectedPageValueType.Home
  );
  const onPcScreens = useMediaQuery("(min-width: 800px)");

  return (
    <div className="bg-black min-h-screen min-w-full relative">
      <ReactLenis
        root
        options={{
          smoothWheel: true,
          duration: 1.5,
          easing: (t) => 1 - Math.pow(1 - t, 4), // pomale zrychlovani a zpomalovani rozjezdu scrollovani
        }}
      >
        {onPcScreens && <MouseCursor />}
        <LogoNav setSelectedPage={setSelectedPage} />
        <MainSection
          setSelectedPage={setSelectedPage}
          selectedPage={selectedPage}
        />
        <NavSection setSelectedPage={setSelectedPage} />
        <AboutSection setSelectedPage={setSelectedPage} />
        <WorkSection setSelectedPage={setSelectedPage} />
        <PricesSection setSelectedPage={setSelectedPage} />
        <ContactSection setSelectedPage={setSelectedPage} />
        <FooterSection />
      </ReactLenis>
    </div>
  );
}
