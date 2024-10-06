import { SelectedPageValueType } from "../App";
import NavLink from "../components/NavLink";
import { motion } from "framer-motion";
import aboutUsImg from "../assets/about-us.png";
import contactuUsImg from "../assets/contact-us.png";
import ourWorkImg from "../assets/our-work.png";
import pricesImg from "../assets/prices.png";

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
            imgUrl={aboutUsImg}
          />
          <NavLink
            selectedPage={selectedPage}
            page="ourwork"
            setSelectedPage={setSelectedPage}
            heading="our work"
            imgUrl={ourWorkImg}
          />
          <NavLink
            selectedPage={selectedPage}
            page="prices"
            setSelectedPage={setSelectedPage}
            heading="prices"
            imgUrl={pricesImg}
          />
          <NavLink
            selectedPage={selectedPage}
            page="aboutus"
            setSelectedPage={setSelectedPage}
            heading="contact us"
            imgUrl={contactuUsImg}
          />
        </nav>
      </motion.div>
    </section>
  );
}
