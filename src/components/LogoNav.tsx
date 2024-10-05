import { SelectedPageValueType } from "../App";
import { motion } from "framer-motion";
import { AiOutlineMoon } from "react-icons/ai";

type LogoNavProps = {
  setSelectedPage: (vaule: SelectedPageValueType) => void;
};

export default function LogoNav({ setSelectedPage }: LogoNavProps) {
  return (
    <button className="absolute top-6 right-6">
      <motion.div
        onViewportEnter={() =>
          setSelectedPage(SelectedPageValueType.Navigation)
        }
      >
        <AiOutlineMoon
          className="text-primary-text sm:w-16 sm:h-16 w-12 h-12 md:w-18 md:h-18 
        xl:h-20 xl:w-20"
        />
      </motion.div>
    </button>
  );
}
