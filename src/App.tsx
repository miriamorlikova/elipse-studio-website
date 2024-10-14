import { useState } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import MouseCursor from "./components/MouseCursor";
import LogoNav from "./components/LogoNav";
import MainSection from "./layout/MainSection";
import NavSection from "./layout/NavSection";
import AboutSection from "./layout/AboutSection";
import WorkSection from "./layout/WorkSection";
import PricesSection from "./layout/PricesSection";

export enum SelectedPageValueType {
  Home = "home",
  Navigation = "navigation",
  AboutUs = "aboutus",
  OurWork = "ourwork",
  Prices = "prices",
  ContactUs = "contactus",
}

const App = () => {
  const lenis = useLenis(({ scroll }) => {});
  const [selectedPage, setSelectedPage] = useState<SelectedPageValueType>(
    SelectedPageValueType.Home
  );

  return (
    <div className="bg-black min-h-screen min-w-full relative">
      <ReactLenis root>
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
      </ReactLenis>
    </div>
  );
};

export default App;
