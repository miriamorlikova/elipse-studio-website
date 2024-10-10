import { GoArrowRight } from "react-icons/go";
import { SelectedPageValueType } from "../App";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import useMediaQuery from "../useMediaQuery";

type NavLinkProps = {
  page: string;
  setSelectedPage: (value: SelectedPageValueType) => void;
  heading: string;
  imgUrl: string;
};

export default function NavLink({
  setSelectedPage,
  page,
  heading,
  imgUrl,
}: NavLinkProps) {
  const IsAboveMediumScreen = useMediaQuery("(min-width: 1024px)");
  const lowerCasePage = page
    .toLowerCase()
    .replace(/ /g, "") as SelectedPageValueType;
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const left = useTransform(xSpring, [0.6, -0.6], ["60%", "80%"]);
  const top = useTransform(ySpring, [0.5, -0.5], ["40%", "60%"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (ref.current == null) {
      return 0;
    }
    const containerSize = ref.current.getBoundingClientRect();
    const width = containerSize.width;
    const height = containerSize.height;

    const mouseX = e.clientX - containerSize.left;
    const mouseY = e.clientY - containerSize.top;

    const mouseXpercent = mouseX / width - 0.4;
    const mouseYpercent = mouseY / height - 0.5;

    x.set(mouseXpercent);
    y.set(mouseYpercent);
  }

  return (
    <motion.div
      ref={ref}
      initial="initial"
      whileHover="whileHover"
      whileTap="whileTap"
      className="group tracking-wide py-9 sm:py-12 uppercase font-orbitron md:text-4xl sm:text-3xl text-2xl border-b-2 border-neutral-500 hover:border-primary-text relative transition-colors duration-500 "
      onMouseMove={handleMouseMove}
    >
      <AnchorLink
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
      >
        <div className="flex justify-between items-center ">
          {IsAboveMediumScreen ? (
            <motion.span
              variants={{
                initial: {
                  x: 0,
                  y: 0,
                },
                whileHover: {
                  x: -20,
                  y: -5,
                },
              }}
              transition={{
                type: "spring",
                delayChildren: 0.2,
                staggerChildren: 0.085,
              }}
              className="relative block z-10 group-hover:text-primary-text text-neutral-400 transition-colors duration-500"
            >
              {heading.split("").map((letter, index) => {
                return (
                  <motion.span
                    variants={{
                      initial: {
                        x: 0,
                        y: 0,
                      },
                      whileHover: {
                        x: 20,
                        y: 5,
                      },
                    }}
                    transition={{ type: "spring" }}
                    className="inline-block"
                    key={index}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                );
              })}
            </motion.span>
          ) : (
            <motion.span
              variants={{
                initial: {
                  x: 0,
                  y: -3,
                },
                whileHover: {
                  x: 20,
                  y: 0,
                },
                whileTap: {
                  x: 20,
                  y: 5,
                },
              }}
              transition={{
                type: "spring",
                stiffness: 200,
              }}
              className="relative block z-10 group-hover:text-primary-text text-neutral-400 transition-colors duration-500"
            >
              {heading}
            </motion.span>
          )}

          <motion.img
            src={imgUrl}
            alt={`${heading}`}
            className="absolute md:h-28 sm:h-24 hidden sm:block w-auto z-0 rounded-lg object-cover xl:h-40 lg:h-32"
            style={{
              top,
              left,
              translateX: "-50%",
              translateY: "-50%",
            }}
            variants={{
              initial: {
                scale: 0,
                rotate: "-12.5deg",
              },
              whileHover: {
                scale: 1,
                rotate: "12.5deg",
              },
              whileTap: {
                scale: 1,
                rotate: "12.5deg",
              },
            }}
            transition={{ type: "spring" }}
          />
          <motion.div
            variants={{
              initial: {
                x: "25%",
                opacity: 0,
              },
              whileHover: {
                x: "0%",
                opacity: 1,
              },
              whileTap: {
                x: "0%",
                opacity: 1,
              },
            }}
            transition={{ type: "spring" }}
            className="relative z-10"
          >
            <GoArrowRight className="h-10 w-10" />
          </motion.div>
        </div>
      </AnchorLink>
    </motion.div>
  );
}
