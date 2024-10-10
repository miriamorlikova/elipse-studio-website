import { SelectedPageValueType } from "../App";
import NavLink from "../components/NavLink";
import { motion } from "framer-motion";
import aboutUsImg from "../assets/about-us.png";
import contactuUsImg from "../assets/contact-us.png";
import ourWorkImg from "../assets/our-work.png";
import pricesImg from "../assets/prices.png";

type NavSectionProps = {
  setSelectedPage: (vaule: SelectedPageValueType) => void;
};

export default function NavSection({ setSelectedPage }: NavSectionProps) {
  return (
    <section id="navigation" className="py-24 sm:py-40 lg:py-64">
      <motion.div
        onViewportEnter={() =>
          setSelectedPage(SelectedPageValueType.Navigation)
        }
      >
        <nav className="flex flex-col mx-10 md:mx-20 lg:mx-28 xl:mx-40 sm:mx-14">
          <NavLink
            page="aboutus"
            setSelectedPage={setSelectedPage}
            heading="about us"
            imgUrl={aboutUsImg}
          />
          <NavLink
            page="ourwork"
            setSelectedPage={setSelectedPage}
            heading="our work"
            imgUrl={ourWorkImg}
          />
          <NavLink
            page="prices"
            setSelectedPage={setSelectedPage}
            heading="prices"
            imgUrl={pricesImg}
          />
          <NavLink
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
