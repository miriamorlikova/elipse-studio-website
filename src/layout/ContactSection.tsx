import { motion, useAnimation } from "framer-motion";
import { SelectedPageValueType } from "../App";
import H1Text from "../components/H1Text";
import Input from "../components/Input";
import { BiSend } from "react-icons/bi";
import { useState } from "react";
import axios from "axios";

type ContactSectionProps = {
  setSelectedPage: (value: SelectedPageValueType) => void;
};

export default function ContactSection({
  setSelectedPage,
}: ContactSectionProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const buttonAnimation = useAnimation();
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const serviceId = "service_iiz6thm";
    const templateId = "template_ardlf6n";
    const publicKey = "Il5xJ35HYTxPc5Uce";

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        from_phone: phone,
        date: date,
        to_name: "Elipse Tattoo Studio",
        message: message,
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );

      await buttonAnimation.start({
        x: 300,
        opacity: 0,
        transition: { type: "spring", duration: 0.8 },
      });

      setTimeout(() => {
        buttonAnimation.start({
          x: 0,
          opacity: 1,
          transition: { type: "spring", duration: 0.8 },
        });
      }, 1000);

      console.log(res.data);
      setName("");
      setEmail("");
      setPhone("");
      setDate("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section
      id="contactus"
      className="relative min-w-screen px-10 sm:px-20 md:px-24 xl:px-40"
    >
      <motion.div
        className="py-24 sm:py-32 lg:py-36"
        onViewportEnter={() => setSelectedPage(SelectedPageValueType.ContactUs)}
      >
        <H1Text>Contact Us</H1Text>

        {/* TOASTERY - for submitting the form, maybe some error messages when user fills the form not as expected*/}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-neutral-600 bg-opacity-10 px-4 pb-4 rounded-lg my-6 md:my-12"
        >
          <Input
            type="text"
            value={name}
            placeholder="Your name *"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            value={email}
            placeholder="Your email *"
            pattern="/^[A-Z0-9._%+-]+@[A-Z0-9._-]+\.[A-Z]{2,}$/i"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            value={phone}
            placeholder="Your phone number (optional)"
            pattern="/^(+420)?[0-9]{9}$/"
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            type="text"
            value={date}
            placeholder="Preferred date of appointment"
            onChange={(e) => setDate(e.target.value)}
          />
          <div className="flex-grow border-b-2 border-neutral-500 py-4">
            <motion.textarea
              value={message}
              rows={4}
              cols={50}
              className="input min-h-[300px]"
              placeholder="Your message (optional)"
              initial={{ x: 0 }}
              whileHover={{ x: 20 }}
              whileTap={{ x: 20 }}
              transition={{ type: "spring" }}
              required
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/* vylepsit animaci, mozna aby sipka priletela z druhe strany? */}
          <div className="flex justify-end ">
            <motion.button
              type="submit"
              className="p-6"
              initial={{ x: 0, opacity: 1 }}
              animate={buttonAnimation}
            >
              <BiSend className="h-8 w-8" />
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}

// WITHOUT AXIOS version / what is better?:
// function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//   e.preventDefault();

//   const serviceId = "service_iiz6thm";
//   const templateId = "template_ardlf6n";
//   const publicKey = "Il5xJ35HYTxPc5Uce";

//   const templateParams = {
//     from_name: name,
//     from_email: email,
//     from_phone: phone,
//     date: date,
//     to_name: "Elipse Tattoo Studio",
//     message: message,
//   };

//   const sendEmail = async () => {
//     try {
//       const res = await emailjs.send(
//         serviceId,
//         templateId,
//         templateParams,
//         publicKey
//       );

//       console.log("email sent successfully", res);
//       setName("");
//       setEmail("");
//       setPhone("");
//       setDate("");
//       setMessage("");
//     } catch (err) {
//       console.error("Error while sending email", err);
//     }
//   };

//   sendEmail();
// }
