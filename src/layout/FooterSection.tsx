import useMediaQuery from "../useMediaQuery";
import { AiOutlineMoon } from "react-icons/ai";

export default function FooterSection() {
  const isAboveMediumScreen = useMediaQuery("(min-width: 800px)");

  return (
    <footer className="border-neutral-600 border-t border-opacity-30 px-8 py-8 md:py-16 md:px-16">
      <div
        className={`justify-between gap-6 ${isAboveMediumScreen ? "flex" : "flex flex-col gap-10"}`}
      >
        {/* LEFT PART */}
        <div className="basis-1/2 flex flex-col justify-between ">
          <div className="flex items-center gap-2 mb-0 md:mb-4">
            <span>
              <AiOutlineMoon className="md:h-6 sm:w-6 h-5 w-5" />
            </span>
            <p className="font-nanum text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Elipse Tattoo Studio
            </p>
          </div>
          <p className="mt-3 sm:-mt-0 md:mt-3 text-xxs md:max-w-[70%]">
            This website and its content are the property of Elipse Tattoo
            Studio. All work displayed (tattoo images), has been generated using
            AI. Please note that the address, phone number, and email provided
            are entirely fictional and for illustrative purposes only. For any
            inquiries or to book an appointment, feel free to contact us
            directly. We respect your privacy and are committed to safeguarding
            your data.
          </p>
          <p className="mt-3 md:text-sm capitalize text-xs">
            <span className="pt-0.5">©</span> Elipse Studio all rights
            reserved.
          </p>
        </div>
        {/* MIDDLE PART */}
        <div className="basis-1/4 text-xs md:text-sm">
          <h4 className="mb-5 sm:text-base text-sm font-orbitron font-bold">
            Opening hours
          </h4>
          <p className="mb-3">Mon - Fri: 7:00 AM - 7:00 PM</p>
          <p className="mb-3">Sat: 9:00 AM - 2:00 PM</p>
          <p className="max-w-[70%]">
            (it is also possible to schedule an appointment outside of regular
            opening hours)
          </p>
        </div>
        {/* RIGHT PART */}
        <div className="basis-1/4 text-xs md:text-sm">
          <h4 className="mb-5 sm:text-base text-sm font-orbitron font-bold">
            Contacts
          </h4>
          <p className="mb-3">Phone: + 420 777 888 999</p>
          <p className="mb-3">Email: elipse.studio@gmail.com</p>
          <p>Address: Random St. 160/1a, 708 00, Prague</p>
        </div>
      </div>
    </footer>
  );
}
