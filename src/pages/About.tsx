import { Link } from "react-router-dom";
import { motion } from "motion/react";

// صفحه درباره ما

function About() {
  return (
    // بخش اصلی صفحه
    <section className="max-w-4xl mx-auto p-6 sm:p-10 lg:rounded-2xl shadow-md lg:my-10 bg-base-200 lg:bg-base-100">
      <motion.header
        initial={{
          opacity: 0,
          y: 80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          repeat: 0,
          ease: "easeIn",
          duration: 3,
          delay: 0.2,
        }}
        className="mb-6"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold">درباره‌ی ما</h1>
        <p className="mt-2">
          فروشگاهی برای عاشقان تکنولوژی — کیفیت، اطمینان و پشتیبانی در اولویت ما
          هستند.
        </p>
      </motion.header>

      <article className="space-y-6 leading-relaxed">
        <motion.p
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            repeat: 0,
            ease: "easeIn",
            duration: 3,
            delay: 0.4,
          }}
        >
          فروشگاه <span className="font-semibold">دیجیتال‌شاپ</span> با هدف
          ارائه‌ی
          <span className="font-semibold">
            {" "}
            بهترین محصولات دیجیتال و لوازم جانبی باکیفیت
          </span>{" "}
          فعالیت خود را آغاز کرده است. ما تلاش می‌کنیم تا تجربه‌ای
          <span className="font-medium"> متفاوت، حرفه‌ای و لذت‌بخش</span> از
          خرید آنلاین را برای شما رقم بزنیم؛ تجربه‌ای که در آن{" "}
          <span className="font-medium">
            سرعت، اطمینان، قیمت مناسب، اصالت کالا و پشتیبانی واقعی
          </span>
          در اولویت قرار دارند.
        </motion.p>

        <motion.p
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            repeat: 0,
            ease: "easeIn",
            duration: 3,
            delay: 0.6,
          }}
        >
          در دیجیتال‌شاپ، ما باور داریم که تکنولوژی بخشی جدایی‌ناپذیر از زندگی
          روزمره است و انتخاب درست و مطمئن محصولات دیجیتال می‌تواند تاثیر بزرگی
          در کیفیت زندگی ایجاد کند. به همین دلیل مجموعه‌ی ما با فراهم‌کردن{" "}
          <span className="underline">
            جدیدترین، متنوع‌ترین و معتبرترین برندها
          </span>
          تلاش می‌کند شما را در مسیر انتخابی دقیق و بدون دغدغه همراهی کند.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            repeat: 0,
            ease: "easeIn",
            duration: 3,
            delay: 0.8,
          }}
          className="rounded-lg"
        >
          <h2 className="text-xl font-semibold mb-3">محصولات ما</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>گوشی‌های هوشمند و تبلت</li>
            <li>
              لوازم جانبی دیجیتال مانند قاب محافظ، گلس، شارژر، پاوربانک و کابل
            </li>
            <li>تجهیزات صوتی شامل هدفون، اسپیکر و ایرپاد</li>
            <li>گجت‌های هوشمند و کالاهای تکنولوژیک خلاقانه</li>
            <li>لپ‌تاپ و تجهیزات جانبی مرتبط</li>
          </ul>
        </motion.div>

        <motion.p
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            repeat: 0,
            ease: "easeIn",
            duration: 3,
            delay: 1.0,
          }}
        >
          ما علاوه بر فروش کالا، تمرکز ویژه‌ای بر{" "}
          <span className="font-medium">ارائه‌ی محتوا و مشاوره تخصصی </span>
          داریم تا بتوانید بهترین تصمیم را بر اساس نیاز و بودجه‌تان بگیرید. تیم
          پشتیبانی ما در تمام مراحل خرید در کنار شماست تا به سوالات، مشکلات و
          درخواست‌های شما در سریع‌ترین زمان ممکن پاسخ دهد.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            repeat: 0,
            ease: "easeIn",
            duration: 3,
            delay: 1.2,
          }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">ضمانت اصالت کالا</h3>
            <p className="text-sm mt-1">
              تمامی محصولات از تامین‌کنندگان معتبر و با گارانتی اصالت عرضه
              می‌شوند.
            </p>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">ارسال سریع</h3>
            <p className="text-sm mt-1">
              ارسال مطمئن و بسته‌بندی حرفه‌ای برای حفظ سلامت کالای شما.
            </p>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">پشتیبانی واقعی</h3>
            <p className="text-sm mt-1">
              پاسخ‌گویی دوستانه، راهنمایی پیش و پس از خرید و خدمات پس از فروش.
            </p>
          </div>
        </motion.div>

        <motion.p
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            repeat: 0,
            ease: "easeIn",
            duration: 3,
            delay: 1.4,
          }}
          className="mt-4"
        >
          ما به مشتریان خود افتخار می‌کنیم و هدف اصلی‌مان ساختن یک
          <span className="font-semibold">
            {" "}
            جامعه مشتریان راضی و وفادار
          </span>{" "}
          است. از اینکه دیجیتال‌شاپ را برای خرید انتخاب کرده‌اید سپاسگزاریم و
          امیدواریم تجربه‌ای فراموش‌نشدنی برای شما بسازیم.
        </motion.p>
      </article>

      <motion.footer
        initial={{
          opacity: 0,
          y: 80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          repeat: 0,
          ease: "easeIn",
          duration: 3,
          delay: 1.6,
        }}
        className="mt-6 flex items-center justify-between"
      >
        <Link
          to="/products"
          className="inline-block btn btn-primary px-4 py-2 rounded-lg shadow hover:opacity-95"
        >
          دیدن محصولات
        </Link>

        <small className="text-sm text-gray-500">
          تماس با ما: support@digital-shop.example
        </small>
      </motion.footer>
    </section>
  );
}

export default About;
