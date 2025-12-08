import { motion } from "motion/react";

function Hero() {
  const handleScroll = () => {
    const section = document.getElementById("product-cards");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero min-h-[50vh] bg-base-200 hero-bg">
      <div className="hero-overlay"></div>

      <div className="hero-content text-neutral-content text-center backdrop-blur-xl">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-5 text-5xl font-bold"
          >
            خوش آمدید
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-5"
          >
            فروشگاه انواع لوازم دیجیتالی، لپتاپ، گوشی موبایل، و وسایل جانبی از
            جمله کیس، کابل، مانیتور و ... با بهترین قیمت ها و کیفیت ها
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            onClick={handleScroll}
            className="btn btn-lg btn-primary"
          >
            شروع به خرید
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
