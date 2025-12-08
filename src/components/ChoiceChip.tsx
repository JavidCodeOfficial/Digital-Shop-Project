import { useState } from "react";
import { motion } from "motion/react";

// طراحی چیپ های انتخابی دسته بندی ها

export default function ChoiceChip({
  onSelect,
}: {
  onSelect: (value: string) => void;
}) {
  // دریافت Props
  const categories = ["همه", "موبایل", "تبلت", "لپتاپ", "لوازم جانبی"];

  // انخاب دسته بندی
  const [selected, setSelected] = useState("همه");

  const handleSelect = (cat: string) => {
    setSelected(cat);
    onSelect(cat); // ارسال دسته بندی انتخابی به Props
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 25,
        repeat: 0,
        duration: 3,
        delay: 0.2,
      }}
      className="flex flex-wrap gap-2"
    >
      {categories.map((item) => (
        <button
          type="button"
          key={item}
          onClick={() => handleSelect(item)}
          className={`px-7 py-3 rounded-full text-sm border transition
            ${
              selected === item
                ? "bg-primary text-primary-content border-accent"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }
          `}
        >
          {item}
        </button>
      ))}
    </motion.div>
  );
}
