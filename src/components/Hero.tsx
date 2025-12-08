import { motion } from "motion/react";

function Hero() {
  const handleScroll = () => {
    const section = document.getElementById("product-cards");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative hero min-h-[60vh] bg-base-200 overflow-hidden">
      {/* Hero Image */}
      <img
        src="/hero.webp"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="hero-content relative z-10 text-neutral-content text-center backdrop-blur-xl">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-5 text-5xl font-bold"
          >
            خوش آمدید
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-5"
          >
            فروشگاه انواع لوازم دیجیتالی، لپتاپ، گوشی موبایل، و وسایل جانبی از
            جمله کیس، کابل، مانیتور و ... با بهترین قیمت ها و کیفیت ها{" "}
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            onClick={handleScroll}
            className="btn btn-primary btn-lg"
          >
            شروع به خرید
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
