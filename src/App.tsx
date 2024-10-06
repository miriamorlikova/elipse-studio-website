import InteractiveBg from "./components/InteractiveBg";
// import MouseCursor from "./components/MouseCursor";
import LogoNav from "./components/LogoNav";
import MainSection from "./layout/MainSection";
import NavSection from "./layout/NavSection";
import { useState } from "react";

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
      {/* <MouseCursor /> */}

      <LogoNav setSelectedPage={setSelectedPage} />
      <MainSection
        setSelectedPage={setSelectedPage}
        selectedPage={selectedPage}
      />
      <NavSection
        setSelectedPage={setSelectedPage}
        selectedPage={selectedPage}
      />
    </div>
  );
};

export default App;
