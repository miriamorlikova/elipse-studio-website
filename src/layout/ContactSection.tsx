import { useState } from "react";

import axios from "axios";
import { motion, useAnimation } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { BiSend } from "react-icons/bi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

import H1Text from "../components/H1Text";
import Input from "../components/Input";
import Loader from "../components/Loader";

import { SelectedPageValueType } from "../App";

type ContactSectionProps = {
  setSelectedPage: (value: SelectedPageValueType) => void;
};

export default function ContactSection({
  setSelectedPage,
}: ContactSectionProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [dateError, setDateError] = useState("");
  const [nameError, setNameError] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const buttonAnimation = useAnimation();
  const errorMessageStyle = {
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
  };
  const successMessageStyle = {
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
  };

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);

    if (e.target.value.length > 50) {
      setNameError("Your name is too long.");
    } else {
      setNameError("");
    }
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    const emailValue = e.target.value;
    setEmail(e.target.value);

    if (!emailValue.includes("@") || !emailValue.includes(".")) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  }

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPhone(e.target.value);

    const phonePattern = /^(?:\+420)?[0-9]{9}$/;

    if (!phonePattern.test(e.target.value)) {
      setPhoneError(
        "Please enter a valid phone number (9 digits or +420 with 9 digits)."
      );
    } else {
      setPhoneError("");
    }
  }

  function handleDateChange(selectedDate: Date | null) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate && selectedDate < today) {
      setDateError("Please select a date that is not in the past.");
    } else {
      setDateError("");
      setDate(selectedDate);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (nameError || emailError || phoneError || dateError) {
      toast.error(
        "Please fix the errors before submitting.",
        errorMessageStyle
      );
      return;
    }

    setIsLoading(true);
    const serviceId = "service_iiz6thm";
    const templateId = "template_ardlf6n";
    const publicKey = "Il5xJ35HYTxPc5Uce";

    const formattedDate = date ? format(date, "dd/MM/yyyy") : "";

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        from_phone: phone,
        date: formattedDate,
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
      buttonAnimation.start({
        x: -10000,
        opacity: 1,
        transition: { type: "spring", bounce: 0, duration: 0.8 },
      });
      setTimeout(() => {
        buttonAnimation.start({
          x: 0,
          transition: { type: "spring", bounce: 0, duration: 0.8 },
        });
      }, 800);

      if (res.data === "OK") {
        toast.success(
          "Email sent. We'll get back to you soon!",
          successMessageStyle
        );
      }

      if (res.data !== "OK") {
      }

      setName("");
      setEmail("");
      setPhone("");
      setDate(null);
      setMessage("");
    } catch (error) {
      toast.error("Failed to send. Please try again.", errorMessageStyle);

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
            onChange={handleNameChange}
          />
          {nameError && (
            <p className="text-red-500 text-sm mt-2">{nameError}</p>
          )}
          <Input
            type="text"
            value={email}
            placeholder="Your email *"
            required
            onChange={handleEmailChange}
          />
          {emailError && (
            <p className="text-red-500 text-sm mt-2">{emailError}</p>
          )}
          <Input
            type="text"
            value={phone}
            placeholder="Your phone number (optional)"
            pattern="/^(+420)?[0-9]{9}$/"
            onChange={handlePhoneChange}
          />
          {phoneError && (
            <p className="text-red-500 text-sm mt-2">{phoneError}</p>
          )}
          <div className="flex-grow border-b-2 border-neutral-500 sm:py-4 py-2">
            <DatePicker
              selected={date}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="Preferred date of appointment"
              customInput={
                <motion.input
                  type="text"
                  className="input sm:min-w-[500px]"
                  placeholder="Preferred date of appointment"
                  initial={{ x: 0 }}
                  whileHover={{ x: 20 }}
                  whileTap={{ x: 20 }}
                  transition={{ type: "spring" }}
                />
              }
              calendarClassName="bg-black text-primary-text border border-opacity-50 border-primary-text shadow-lg"
              dayClassName={() => "text-neutral-300 hover:text-neutral-800"}
            />
          </div>
          {dateError && (
            <p className="text-red-500 text-sm mt-2">{dateError}</p>
          )}
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
