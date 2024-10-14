import useMediaQuery from "../hooks/useMediaQuery";
import moon from "../assets/moon-first-section.png";
import { GoArrowDownRight } from "react-icons/go";
import { SelectedPageValueType } from "../App";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import InteractiveBg from "../components/InteractiveBg";

type MainSectionProps = {
  setSelectedPage: (vaule: SelectedPageValueType) => void;
  selectedPage: string;
};

export default function MainSection({
  setSelectedPage,
  selectedPage,
}: MainSectionProps) {
  const isMobileScreen = useMediaQuery("(max-width: 445px)");
  const arrowUpVariants = {
    initial: { rotate: 0 },
    whileHover: { rotate: 225 },
    whileTap: { rotate: 225 },
  };

  const arrowDownVariants = {
    initial: { rotate: 0 },
    whileHover: { rotate: 45 },
    whileTap: { rotate: 45 },
  };

  return (
    <section id="home" className="relative">
      {/* STARS / BG */}
      <div className="absolute inset-0 z-0">
        <InteractiveBg />
      </div>
      <motion.div
        className="flex flex-col w-screen min-h-screen justify-between"
        onViewportEnter={() => setSelectedPage(SelectedPageValueType.Home)}
      >
        {/* HEADER */}
        <div className="max-w-[70%] basis-1/4 ">
          <div
            className={`absolute top-0 ${isMobileScreen ? "max-w-56" : "max-w-full"}`}
          >
            <h1 className="xl:text-5xl sm:text-4xl text-2xl font-nanum uppercase tracking-wide sm:py-6 py-5 px-3 sm:px-6">
              elipse tattoo studio
            </h1>
          </div>
        </div>
        {/* SHADOW BG TEXT + MOON  */}
        <div>
          <img
            src={moon}
            alt="moon"
            className="sm:w-64 md:w-80 lg:w-[30rem] h-auto w-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rotate-slow"
          />
          <div className="flex sm:mt-[15%] md:mt-[5%] mt-[25%]  font-orbitron flex-col sm:flex-row overflow-hidden md:text-8xl lg:text-9xl items-center justify-center uppercase text-6xl gap-28 sm:gap-[20%]  font-medium tracking-wider sm:text-7xl ">
            <p className="opacity-15">elipse</p>

            <p className="opacity-15">studio</p>
          </div>
        </div>
        {/* BUTTON FOR MENU */}
        <motion.div className=" m-4 sm:m-8 flex justify-end relative z-10">
          <AnchorLink
            className="border-2 rounded-lg p-2 hover:border-primary-text border-neutral-400 transition-colors duration-500"
            href={
              selectedPage === SelectedPageValueType.Home
                ? `#${SelectedPageValueType.Navigation}`
                : `#${SelectedPageValueType.Home}`
            }
            onClick={() =>
              setSelectedPage(
                selectedPage === SelectedPageValueType.Home
                  ? SelectedPageValueType.Navigation
                  : SelectedPageValueType.Home
              )
            }
          >
            <motion.div
              variants={
                selectedPage === SelectedPageValueType.Home
                  ? arrowDownVariants
                  : arrowUpVariants
              }
              initial="initial"
              whileHover="whileHover"
              whileTap="whileTap"
            >
              <GoArrowDownRight className="h-8 w-8 xl:h-12 sm:h-10 sm:w-10 xl:w-12 hover:text-primary-text transition-colors duration-500 text-neutral-300" />
            </motion.div>
          </AnchorLink>
        </motion.div>
      </motion.div>
    </section>
  );
}
