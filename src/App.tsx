import { useState } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import MouseCursor from "./components/MouseCursor";
import LogoNav from "./components/LogoNav";
import MainSection from "./layout/MainSection";
import NavSection from "./layout/NavSection";
import AboutSection from "./layout/AboutSection";
import WorkSection from "./layout/WorkSection";
import PricesSection from "./layout/PricesSection";
import ContactSection from "./layout/ContactSection";

export enum SelectedPageValueType {
  Home = "home",
  Navigation = "navigation",
  AboutUs = "aboutus",
  OurWork = "ourwork",
  Prices = "prices",
  ContactUs = "contactus",
}

const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPageValueType>(
    SelectedPageValueType.Home
  );

  return (
    <div className="bg-black min-h-screen min-w-full relative">
      <ReactLenis
        root
        options={{
          smoothWheel: true, // Enable smooth scrolling with the wheel
          duration: 1.5,
          easing: (t) => 1 - Math.pow(1 - t, 4), // pomale zrychlovani a zpomalovani rozjezdu scrollovani
        }}
      >
        <MouseCursor />
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
      </ReactLenis>
    </div>
  );
};

export default App;
