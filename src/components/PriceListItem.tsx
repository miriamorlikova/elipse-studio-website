import { motion } from "framer-motion";

type PriceListItemProps = {
  heading: string;
  size?: string;
  subHeading: string;
  price: string;
};

export default function PriceListItem({
  heading,
  size,
  subHeading,
  price,
}: PriceListItemProps) {
  return (
    <div className="flex border-b-2 border-neutral-500 items-center justify-between md:gap-4 gap-2">
      <div className="flex flex-col">
        <div className="md:flex-row flex flex-col items-start md:items-center md:gap-4 gap-2  mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24">
          <motion.span
            className="tracking-wide uppercase font-orbitron md:text-2xl lg:text-3xl sm:text-xl text-lg transition-colors"
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring" }}
          >
            {heading}
          </motion.span>
          <span className="font-orbitron text-neutral-400 xl:text-xl md:text-base text-sm">
            {size}
          </span>
        </div>
        <div>
          <p className="md:mt-4 sm:mt-2 mt-0 mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 max-w-[70%] sm:text-xs md:text-sm text-xxs lg:text-base text-neutral-500">
            {subHeading}
          </p>
        </div>
      </div>
      <motion.span
        className="xl:text-3xl md:text-2xl sm:text-lg text-neutral-400 sm:min-w-fit font-orbitron hover:text-primary-text transition-colors duration-500"
        initial={{ x: 20 }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring" }}
      >
        {price}
      </motion.span>
    </div>
  );
}
