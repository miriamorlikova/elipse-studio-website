import { motion } from "framer-motion";
import { SelectedPageValueType } from "../App";
import image1 from "../assets/tattoo-img-1.png";
import image2 from "../assets/tattoo-img-2.png";
import image3 from "../assets/tattoo-img-3.png";
import image4 from "../assets/tattoo-img-4.png";
import image5 from "../assets/tattoo-img-5.png";
import image6 from "../assets/tattoo-img-6.png";
import image7 from "../assets/tattoo-img-7.png";
import image8 from "../assets/tattoo-img-8.png";
import image9 from "../assets/tattoo-img-9.png";
import image10 from "../assets/tattoo-img-10.png";
import image11 from "../assets/tattoo-img-11.png";
import image12 from "../assets/tattoo-img-12.png";
import H1Text from "../components/H1Text";

type WorkSectionProps = {
  setSelectedPage: (value: SelectedPageValueType) => void;
};

const imgArray = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
];

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
    },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export default function WorkSection({ setSelectedPage }: WorkSectionProps) {
  return (
    <section id="ourwork" className="relative px-10 sm:px-20 md:px-24 xl:px-40">
      <motion.div
        className="py-24 sm:py-32 lg:py-36"
        onViewportEnter={() => setSelectedPage(SelectedPageValueType.OurWork)}
      >
        {/* HEADER + SOME INTRODUCING TEXT */}
        <H1Text>Our Work</H1Text>
        <div className="flex flex-col sm:gap-12 gap-8 leading-[1.6rem] xl:leading-8 xl:text-xl xl:mt-6 lg:text-lg sm:text-base text-sm">
          <motion.p
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: "spring", delay: 0.3 }}
          >
            At Elipse Tattoo Studio, every tattoo we create is a testament to
            the passion, skill, and dedication of our artists. Below, you'll
            find a collection of photographs showcasing some of our proudest
            work. Each piece represents a unique story and a personalized
            approach to design, tailored to the desires of our clients. We take
            immense pride in what we do, and it’s an honor to see our art become
            a permanent part of someone's life. From intricate black-and-grey
            designs to vibrant color pieces, this gallery offers a glimpse into
            the diversity and craftsmanship that define our studio. We hope you
            enjoy browsing through these snapshots of our creativity, and we
            look forward to creating your next piece of art.
          </motion.p>

          {/* IMAGES OF WORK */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-8"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.1 }}
          >
            {imgArray.map((image, index) => (
              <motion.div key={index} variants={childVariant}>
                <img
                  src={image}
                  alt={image}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
