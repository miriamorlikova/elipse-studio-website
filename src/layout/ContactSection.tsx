import { motion, useAnimation } from "framer-motion";
import { SelectedPageValueType } from "../App";
import H1Text from "../components/H1Text";
import Input from "../components/Input";
import { BiSend } from "react-icons/bi";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../components/Loader";

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
  const [isLoading, setIsLoading] = useState(false);
  const buttonAnimation = useAnimation();
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
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
      // flying right and dissapear
      await buttonAnimation.start({
        x: 300,
        opacity: 0,
        transition: { type: "spring", duration: 0.8 },
      });

      // fly back from the left side
      buttonAnimation.start({
        x: -10000,
        opacity: 1,
        transition: { type: "spring", bounce: 0, duration: 0.8 },
      });
      // back to the original position
      setTimeout(() => {
        buttonAnimation.start({
          x: 0,
          transition: { type: "spring", bounce: 0, duration: 0.8 },
        });
      }, 800);

      if (res.data === "OK") {
        toast.success("Email sent. We'll get back to you soon!", {
          style: {
            border: "1px solid #FDF8F3",
            padding: "16px",
            color: "#FDF8F3",
            background: "#101010",
            boxShadow: "2px 2px 5px #dad7d556",
          },
          iconTheme: {
            primary: "#2f9500",
            secondary: "#FFFAEE",
          },
          duration: 5000,
        });
      }

      if (res.data !== "OK") {
      }

      setName("");
      setEmail("");
      setPhone("");
      setDate("");
      setMessage("");
    } catch (error) {
      toast.error("Failed to send. Please try again.", {
        style: {
          border: "2px solid #FDF8F3",
          padding: "16px",
          color: "#FDF8F3",
          background: "#101010",
          boxShadow: "2px 2px 5px #dad7d556",
        },
        iconTheme: {
          primary: "#950700",
          secondary: "#FFFAEE",
        },
        duration: 5000,
      });

      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section
      id="contactus"
      className="relative min-w-screen px-10 sm:px-20 md:px-24 xl:px-40"
    >
      {isLoading && <Loader />}
      <motion.div
        className="py-24 sm:py-32 lg:py-36"
        onViewportEnter={() => setSelectedPage(SelectedPageValueType.ContactUs)}
      >
        <Toaster position="top-center" />
        <H1Text>Contact Us</H1Text>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-neutral-600 bg-opacity-10 px-4 rounded-lg my-6 md:my-12"
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
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className="flex justify-end ">
            <motion.button
              type="submit"
              className="sm:p-6 px-2 py-4 md:p-8 hover:text-primary-text text-neutral-400 transition-colors duration-500"
              initial={{ x: 0, opacity: 1, scale: 1 }}
              animate={buttonAnimation}
              whileHover={{ scale: 1.2 }}
            >
              <BiSend className="sm:h-8 sm:w-8 h-6 w-6 md:h-10 md:w-10 " />
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
