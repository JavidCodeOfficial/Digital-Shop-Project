import { motion } from "motion/react";

//  طراحی هیرو وبسسایت در صفحه اصلی
function Hero() {
  // اسکرول به قسمت محصولات
  const handleScroll = () => {
    const section = document.getElementById("product-cards");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="hero min-h-[50vh] bg-base-200"
      style={{ backgroundImage: "url('/images/hero.webp')" }}
    >
      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content text-neutral-content text-center backdrop-blur-2xl">
        <div className="max-w-2xl">
          <motion.h1
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
              ease: "easeIn",
              duration: 3,
              delay: 0.3,
            }}
            className="mb-5 text-5xl font-bold"
          >
            خوش آمدید
          </motion.h1>
          <motion.p
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
              ease: "easeIn",
              duration: 3,
              delay: 0.6,
            }}
            className="mb-5"
          >
            فروشگاه انواع لوازم دیجیتالی، لپتاپ، گوشی موبایل، و وسایل جانبی از
            جمله کیس، کابل، مانیتور و ... با بهترین قیمت ها و کیفیت ها
          </motion.p>
          <motion.button
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
              ease: "easeIn",
              duration: 3,
              delay: 0.9,
            }}
            type="button"
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
