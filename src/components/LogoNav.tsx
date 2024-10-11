import { SelectedPageValueType } from "../App";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { AiOutlineMoon } from "react-icons/ai";

type LogoNavProps = {
  setSelectedPage: (vaule: SelectedPageValueType) => void;
};

export default function LogoNav({ setSelectedPage }: LogoNavProps) {
  const [isMoonVisible, setIsMoonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("aboutus");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top <= 0) {
          setIsMoonVisible(true);
        } else {
          setIsMoonVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div className="relative z-10">
      {isMoonVisible && (
        <AnchorLink
          href={`#${"navigation"}`}
          onClick={() => setSelectedPage(SelectedPageValueType.Navigation)}
        >
          <motion.span
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 260 }}
            whileFocus={{ rotate: 260 }}
            whileTap={{ rotate: 260 }}
            className="top-6 right-6 fixed"
          >
            <AiOutlineMoon
              className="text-neutral-400 transition-colors hover:text-primary-text duration-300 sm:w-16 sm:h-16 w-12 h-12 md:w-18 md:h-18 hover:shadow-sm rounded-full shadow-yellow-200
          xl:h-20 xl:w-20"
            />
          </motion.span>
        </AnchorLink>
      )}
    </motion.div>
  );
}
