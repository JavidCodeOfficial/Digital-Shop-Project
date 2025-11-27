import { motion } from "motion/react";

type Props = {
  src: string;
  alt: string;
  title: string;
};

// طراحی کارت دسته بندی ها در صفحه اصلی

function Card(props: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 25,
        repeat: 0,
        ease: "easeIn",
        duration: 3,
        delay: 0.2,
      }}
      className="card card-border border-2 flex flex-col rounded-3xl items-center justify-center space-y-4 px-5 py-6"
    >
      {/* Image */}
      <img
        className="image-full w-44 h-44 md:h-52 rounded-xl shadow-md"
        src={props.src}
        alt={props.alt}
      />

      {/* Title */}
      <div>
        <p className="text-center text-lg font-semibold line-clamp-1">
          {props.title}
        </p>
      </div>
    </motion.div>
  );
}

export default Card;
