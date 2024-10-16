import { motion } from "framer-motion";

type InputProps = {
  type: string;
  name: string;
  placeholder: string;
  required?: boolean;
};

export default function Input({
  type,
  name,
  placeholder,
  required,
}: InputProps) {
  return (
    <div className="flex-grow border-b-2 border-neutral-500 sm:py-4 py-2">
      <motion.input
        type={type}
        name={name}
        className="bg-transparent py-4 placeholder:hover:text-primary-text placeholder:active:text-primary-text placeholder:focus:text-primary-text placeholder:text-neutral-400 xl:placeholder:text-2xl xl:py-6 sm:placeholder:text-base placeholder:text-xs text-base xl:text-2xl sm:text-md md:text-lg w-full focus:outline-none"
        placeholder={placeholder}
        initial={{ x: 0 }}
        whileHover={{ x: 20 }}
        whileTap={{ x: 20 }}
        transition={{ type: "spring" }}
        required={required}
      />
    </div>
  );
}
