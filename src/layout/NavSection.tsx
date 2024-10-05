import { SelectedPageValueType } from "../App";
import NavLink from "../components/NavLink";
import { motion } from "framer-motion";
import { GoArrowRight } from "react-icons/go";

type NavSectionProps = {
  selectedPage: SelectedPageValueType;
  setSelectedPage: (vaule: SelectedPageValueType) => void;
};

export default function NavSection({
  setSelectedPage,
  selectedPage,
}: NavSectionProps) {
  return (
    <section id="navigation" className="py-24">
      <motion.div
        onViewportEnter={() =>
          setSelectedPage(SelectedPageValueType.Navigation)
        }
      >
        <nav className="flex flex-col mx-10 md:mx-20 sm:mx-14">
          <NavLink
            selectedPage={selectedPage}
            page="aboutus"
            setSelectedPage={setSelectedPage}
            heading="about us"
            imgUrl="./assets/about-us.png"
          />
          <NavLink
            selectedPage={selectedPage}
            page="ourwork"
            setSelectedPage={setSelectedPage}
            heading="our work"
            imgUrl="./assets/our-work.png"
          />
          <NavLink
            selectedPage={selectedPage}
            page="prices"
            setSelectedPage={setSelectedPage}
            heading="prices"
            imgUrl="./assets/prices.png"
          />
          <NavLink
            selectedPage={selectedPage}
            page="aboutus"
            setSelectedPage={setSelectedPage}
            heading="contact us"
            imgUrl="./assets/contact-us.png"
          />
        </nav>
      </motion.div>
    </section>
  );
}
