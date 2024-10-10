import { SelectedPageValueType } from "../App";
import LogoNav from "../components/LogoNav";
import image1 from "../assets/woman-tattooing.png";
import { motion } from "framer-motion";

type AboutSectionProps = {
  setSelectedPage: (value: SelectedPageValueType) => void;
};

export default function AboutSection({ setSelectedPage }: AboutSectionProps) {
  return (
    <section id="aboutus" className="relative px-10 md:px-16">
      <LogoNav setSelectedPage={setSelectedPage} />
      <motion.div
        className="py-24 sm:py-40 lg:py-48"
        onViewportEnter={() => setSelectedPage(SelectedPageValueType.AboutUs)}
      >
        <h1 className="tracking-wide py-9 sm:py-12 uppercase font-orbitron md:text-4xl sm:text-3xl text-2xl">
          About us
        </h1>
        <div className="flex flex-col lg:flex-row">
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
              feugiat, turpis at pulvinar vulputate, erat libero tristique
              tellus, nec bibendum odio risus sit amet ante. In dapibus augue
              non sapien. Vivamus porttitor turpis ac leo. Nulla est. Morbi
              scelerisque luctus velit. Etiam ligula pede, sagittis quis,
              interdum ultricies, scelerisque eu.
            </p>
            <p>
              Quisque tincidunt scelerisque libero. Integer in sapien. Phasellus
              et lorem id felis nonummy placerat.
            </p>
          </div>
          <img src={image1} className="max-w-[60%] h-auto" />
        </div>
      </motion.div>
    </section>
  );
}
