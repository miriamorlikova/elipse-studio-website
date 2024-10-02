import InteractiveBg from "./components/InteractiveBg";
import MouseCursor from "./components/MouseCursor";
import moon from "./assets/moon-bg.jpg";
import LogoNav from "./components/LogoNav";
import MainSection from "./layout/MainSection";
type Props = {};

const App = (props: Props) => {
  return (
    <div className="bg-black min-h-screen min-w-full relative">
      <MouseCursor />

      <div className="absolute inset-0">
        <InteractiveBg />
      </div>
      <LogoNav />
      <MainSection />
    </div>
  );
};

export default App;
