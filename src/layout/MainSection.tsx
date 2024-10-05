import useMediaQuery from "../hooks/useMediaQuery";
import moon from "../assets/moon-first-section.png";
import { GoArrowDownRight } from "react-icons/go";
import { SelectedPageValueType } from "../App";
import { motion } from "framer-motion";

type MainSectionProps = {
  setSelectedPage: (vaule: SelectedPageValueType) => void;
};

export default function MainSection({ setSelectedPage }: MainSectionProps) {
  const isMediumScreen = useMediaQuery("(min-width: 1023px)");

  return (
    <section id="home" className="relative">
      <motion.div
        className="flex flex-col w-screen min-h-screen justify-between"
        onViewportEnter={() => setSelectedPage(SelectedPageValueType.Home)}
      >
        {/* HEADER */}
        <div className="max-w-[70%] basis-1/4">
          <h1 className="xl:text-5xl sm:text-4xl text-2xl font-nanum uppercase tracking-wide sm:py-6 py-5 px-3 sm:px-6">
            elipse tattoo studio
          </h1>
        </div>
        {/* SHADOW BG TEXT + MOON  */}
        <div>
          <img
            src={moon}
            alt="moon"
            className="sm:w-64 md:w-80 lg:w-[30rem] h-auto w-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rotate-slow"
          />
          <div className="flex font-orbitron flex-col sm:flex-row overflow-hidden md:text-8xl lg:text-9xl items-center justify-center uppercase text-6xl gap-28 sm:gap-[20%]  font-medium tracking-wider sm:text-7xl ">
            <p className="opacity-15">elipse</p>

            <p className="opacity-15">studio</p>
          </div>
        </div>
        {/* BUTTON FOR MENU */}
        <div className="basis-1/4 m-4 sm:m-8 flex justify-end">
          <button className="border rounded-lg p-2 border-primary-text">
            <GoArrowDownRight className="h-8 w-8 xl:h-12 sm:h-10 sm:w-10 xl:w-12 border-primary-text" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
