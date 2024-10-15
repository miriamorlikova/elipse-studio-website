import { motion } from "framer-motion";
import { SelectedPageValueType } from "../App";
import H1Text from "../components/H1Text";

type ContactSectionProps = {
  setSelectedPage: (value: SelectedPageValueType) => void;
};

export default function ContactSection({
  setSelectedPage,
}: ContactSectionProps) {
  return (
    <section
      id="contactus"
      className="relative min-w-screen px-10 sm:px-20 md:px-24 xl:px-40"
    >
      <motion.div
        className="py-24 sm:py-32 lg:py-36"
        onViewportEnter={() => setSelectedPage(SelectedPageValueType.ContactUs)}
      >
        {/* FORM - name, email address, phone number (optional), preferable date, and textarea for message, using https://www.emailjs.com/ + material UI icon for preferable date?? maybe something like that? */}
        <H1Text>Contact Us</H1Text>

        <form className="flex flex-col gap-4 bg-neutral-600 bg-opacity-10 p-4 rounded-lg my-12">
          <div className="flex-grow border-b-2 border-neutral-500 py-4 transition-colors duration-500 ">
            <motion.input
              type="text"
              name="name"
              className="bg-transparent py-4 placeholder:hover:text-primary-text placeholder:active:text-primary-text placeholder:focus:text-primary-text placeholder:text-neutral-400 text-lg w-full focus:outline-none"
              placeholder="Your name *"
              initial={{ x: 0 }}
              whileHover={{ x: 20 }}
              whileTap={{ x: 0 }}
              transition={{ type: "spring" }}
            />
          </div>
          <div className="flex-grow border-b-2 border-neutral-500 py-4">
            <motion.input
              type="email"
              name="email"
              className="bg-transparent py-4 placeholder:hover:text-primary-text placeholder:active:text-primary-text placeholder:focus:text-primary-text placeholder:text-neutral-400 text-lg w-full focus:outline-none"
              placeholder="Your email *"
              initial={{ x: 0 }}
              whileHover={{ x: 20 }}
              whileTap={{ x: 0 }}
              transition={{ type: "spring" }}
            />
          </div>
          <div className="flex-grow border-b-2 border-neutral-500 py-4">
            <motion.input
              type="text"
              name="phone"
              className="bg-transparent py-4 placeholder:hover:text-primary-text placeholder:active:text-primary-text placeholder:focus:text-primary-text placeholder:text-neutral-400 text-lg w-full focus:outline-none"
              placeholder="Your phone number (optional)"
              initial={{ x: 0 }}
              whileHover={{ x: 20 }}
              whileTap={{ x: 0 }}
              transition={{ type: "spring" }}
            />
          </div>
          <div className="flex-grow border-b-2 border-neutral-500 py-4">
            <motion.input
              type="text"
              name="date"
              className="bg-transparent py-4 placeholder:hover:text-primary-text placeholder:active:text-primary-text placeholder:focus:text-primary-text placeholder:text-neutral-400 text-lg w-full focus:outline-none"
              placeholder="Preferred date of appointment *"
              initial={{ x: 0 }}
              whileHover={{ x: 20 }}
              whileTap={{ x: 0 }}
              transition={{ type: "spring" }}
            />
          </div>
          <div className="flex-grow border-b-2 border-neutral-500 py-4">
            <motion.textarea
              name="message"
              placeholder="Your message (optional)"
              className="bg-transparent py-4 placeholder:hover:text-primary-text placeholder:active:text-primary-text placeholder:focus:text-primary-text placeholder:text-neutral-400 text-lg w-full focus:outline-none min-h-[300px]"
              initial={{ x: 0 }}
              whileHover={{ x: 20 }}
              whileTap={{ x: 0 }}
              transition={{ type: "spring" }}
            />
          </div>
        </form>
      </motion.div>
    </section>
  );
}
