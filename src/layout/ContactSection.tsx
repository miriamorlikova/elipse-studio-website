import { motion } from "framer-motion";
import { SelectedPageValueType } from "../App";
import H1Text from "../components/H1Text";
import Input from "../components/Input";
import { BiSend } from "react-icons/bi";

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

        <form className="flex flex-col bg-neutral-600 bg-opacity-10 px-4 pb-4 rounded-lg my-6 md:my-12">
          <Input type="text" name="name" placeholder="Your name *" required />
          <Input
            type="email"
            name="email"
            placeholder="Your email *"
            required
          />
          <Input
            type="text"
            name="phone"
            placeholder="Your phone number (optional)"
          />
          <Input
            type="text"
            name="date"
            placeholder="Preferred date of appointment"
          />
          <div className="flex-grow border-b-2 border-neutral-500 py-4">
            <motion.textarea
              name="message"
              placeholder="Your message (optional)"
              className="bg-transparent py-4 placeholder:hover:text-primary-text placeholder:active:text-primary-text placeholder:focus:text-primary-text placeholder:text-neutral-400 xl:placeholder:text-2xl xl:py-6 sm:placeholder:text-base placeholder:text-xs text-base xl:text-2xl sm:text-md md:text-lg w-full focus:outline-none min-h-[300px]"
              initial={{ x: 0 }}
              whileHover={{ x: 20 }}
              whileTap={{ x: 20 }}
              transition={{ type: "spring" }}
            />
          </div>

          {/* vymyslet, jak by mohla tahle sipecka odletet when submitting the form? Then come back after toaster "form submitted" */}
          <motion.button
            type="submit"
            className=""
            initial={{ x: 0, opacity: 1 }}
            whileTap={{ x: 100 }}
            transition={{ type: "spring" }}
          >
            <BiSend />
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
