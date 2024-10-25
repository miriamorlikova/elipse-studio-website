import { motion } from "framer-motion";
import H1Text from "../components/H1Text";
import image1 from "../assets/woman-tattooing.png";
import { SelectedPageValueType } from "../App";

type AboutSectionProps = {
  setSelectedPage: (value: SelectedPageValueType) => void;
};

export default function AboutSection({ setSelectedPage }: AboutSectionProps) {
  return (
    <section id="aboutus" className="relative px-10 sm:px-20 md:px-24 xl:px-40">
      <motion.div
        className="py-24 sm:py-32 lg:py-36"
        onViewportEnter={() => setSelectedPage(SelectedPageValueType.AboutUs)}
      >
        {/* HEADER */}
        <H1Text>About us</H1Text>

        {/* TEXT + IMG */}
        <motion.div
          className="flex flex-col gap-8 leading-[1.6rem] xl:leading-8 xl:text-xl xl:mt-6 lg:text-lg sm:text-base text-sm"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <p>
            At Elipse Tattoo Studio, we believe that tattoos are more than just
            ink on skin—they're a reflection of individuality, personal stories,
            and deep emotions. Founded five years ago by a team of passionate
            artists, our journey began with nothing but a dream and the desire
            to create art that speaks to the soul. Starting out wasn’t easy. We
            faced our fair share of challenges—finding the right space, gaining
            trust in a competitive industry, and honing our craft day in and day
            out. But when you love what you do, you give it everything you’ve
            got. And that’s exactly what we did.
          </p>
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <p>
              Today, we are proud to be a tight-knit team of five dedicated
              professionals—two gentlemen and three talented ladies—each with
              years of experience and a true passion for the art of tattooing.
              With decades of combined experience, we’ve cultivated an
              environment where creativity, professionalism, and customer care
              come together seamlessly. Our team brings not only expertise but
              also joy and enthusiasm to every design, making sure each piece is
              created with love, care, and attention to detail.
            </p>

            <img
              src={image1}
              className="rounded-lg border border-neutral-400 border-opacity-15 w-full max-w-md h-auto lg:w-[100%]"
            />
          </div>
          <p>
            At Elipse, every client is unique, and we approach each tattoo with
            that in mind. From the moment you walk through our doors, we’re here
            to listen, to understand your vision, and to transform your ideas
            into something meaningful. Our consultations are always free because
            we believe the journey to your perfect tattoo starts with a
            conversation. Whether it’s your first tattoo or you’re adding to
            your collection, we are here to make the experience as comfortable
            and personalized as possible.
          </p>
          <p>
            We’ve built strong relationships with our clients over the years by
            ensuring every design is tailored to their individual needs and
            desires. Your satisfaction is our priority, and we take pride in
            crafting tattoos that stand the test of time. Elipse Tattoo Studio
            is not just a place for tattoos—it’s a space where art, passion, and
            human connection intersect. We love what we do, and we can’t wait to
            bring your vision to life.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
