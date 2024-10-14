import { motion } from "framer-motion";

type H1TextProps = {
  children: React.ReactNode;
};

export default function H1Text({ children }: H1TextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -70 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ type: "spring" }}
    >
      <h1 className="tracking-wide py-9 sm:py-12 uppercase font-orbitron md:text-4xl sm:text-3xl text-2xl xl:text-5xl">
        {children}
      </h1>
    </motion.div>
  );
}
