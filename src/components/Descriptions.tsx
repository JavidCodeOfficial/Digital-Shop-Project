import { Link } from "react-router-dom";
import { motion } from "motion/react";

// کامپوننت خلاصه درباره ما در صفحه اصلی

function Descriptions() {
  return (
    <div className="hero bg-base-200 py-8 overflow-x-hidden">
      <div className="hero-content max-w-4xl flex-col-reverse lg:flex-row-reverse gap-10">
        {/* Image Section */}
        <motion.img
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            repeat: 0,
            ease: "easeIn",
            duration: 3,
            delay: 1.1,
          }}
          title="des-img"
          src="https://images.unsplash.com/photo-1763315152539-06fc234b526c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
          className="max-w-sm h-[400px] rounded-lg shadow-2xl"
        />

        {/* Descriptions Section */}
        <motion.div
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            repeat: 0,
            ease: "easeIn",
            duration: 3,
            delay: 1.1,
          }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-bold">درباره فروشگاه ما</h1>
          <p className="py-6 leading-loose">
            فروشگاه ما با هدف ارائه‌ی بهترین محصولات دیجیتال و لوازم جانبی
            باکیفیت، فعالیت خود را آغاز کرده است. ما تلاش می‌کنیم تا تجربه‌ای
            متفاوت و لذت‌بخش از خرید آنلاین را برای شما فراهم کنیم؛ تجربه‌ای که
            در آن سرعت، اطمینان، قیمت مناسب و پشتیبانی واقعی در اولویت قرار
            دارند. در دیجیتال شاپ شما می‌توانید جدیدترین و متنوع‌ترین محصولات
            دیجیتال را پیدا کنید؛ از جمله: گوشی‌های هوشمند و تبلت لوازم جانبی
            دیجیتال مانند قاب، شارژر، پاوربانک و کابل تجهیزات صوتی شامل هدفون،
            اسپیکر و ایرپاد گجت‌های هوشمند و جذاب...
          </p>
          <Link to="/about" className="btn btn-accent">
            ادامه مطلب...
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Descriptions;
