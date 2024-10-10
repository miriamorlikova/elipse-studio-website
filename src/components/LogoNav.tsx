import { SelectedPageValueType } from "../App";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { AiOutlineMoon } from "react-icons/ai";

type LogoNavProps = {
  setSelectedPage: (vaule: SelectedPageValueType) => void;
};

export default function LogoNav({ setSelectedPage }: LogoNavProps) {
  return (
    <motion.div className="relative z-10">
      <AnchorLink
        href={`#${"navigation"}`}
        onClick={() => setSelectedPage(SelectedPageValueType.Navigation)}
      >
        <motion.span
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 260 }}
          whileFocus={{ rotate: 260 }}
          className="absolute top-6 right-6"
        >
          <AiOutlineMoon
            className="text-neutral-400 transition-colors hover:text-primary-text duration-300 sm:w-16 sm:h-16 w-12 h-12 md:w-18 md:h-18 hover:shadow-sm rounded-full shadow-yellow-200
          xl:h-20 xl:w-20"
          />
        </motion.span>
      </AnchorLink>
    </motion.div>
  );
}
