import { motion } from "framer-motion";

type InputProps = {
  type: string;
  placeholder: string;
  required?: boolean;
  pattern?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export default function Input({
  type,
  placeholder,
  required,
  pattern,
  onChange,
  value,
}: InputProps) {
  return (
    <div className="flex-grow border-b-2 border-neutral-500 sm:py-4 py-2">
      <motion.input
        type={type}
        className="input"
        placeholder={placeholder}
        initial={{ x: 0 }}
        whileHover={{ x: 20 }}
        whileTap={{ x: 20 }}
        transition={{ type: "spring" }}
        required={required}
        pattern={pattern}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
