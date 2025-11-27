// فایل ذخیره اطلاعات محصولات

// تعریف نوع داده برای محصولات
export type ProductsType = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category?: string;
};

// لیست محصولات
export const products: ProductsType[] = [
  {
    id: 1,
    name: "گوشی موبایل Samsung Galaxy S24",
    price: 520000000,
    image:
      "https://images.unsplash.com/photo-1706372124839-f35d821ccd24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FsYXh5JTIwczI0fGVufDB8MHwwfHx8MA%3D%3D",
    description: "نمایشگر 6.2 اینچی Dynamic AMOLED با دوربین حرفه‌ای",
    category: "موبایل",
  },
  {
    id: 2,
    name: "لپ‌تاپ Apple MacBook Air M3",
    price: 720000000,
    image:
      "https://www.apple.com/newsroom/images/2024/03/apple-unveils-the-new-13-and-15-inch-macbook-air-with-the-powerful-m3-chip/article/Apple-MacBook-Air-2-up-hero-240304_big.jpg.large_2x.jpg",
    description: "چیپ M3، طراحی باریک و سبک برای کارهای روزمره",
    category: "لپتاپ",
  },
  {
    id: 3,
    name: "هدفون Sony WH-1000XM5",
    price: 35000000,
    image:
      "https://www.sony.co.uk/commerceapi/medias/English-Battery-Life-WH-1000XM5-Pink-Infographic-min.png?context=bWFzdGVyfHJvb3R8NDUyMzkyfGltYWdlL3BuZ3xhR1V5TDJoaE1DODVOalkyT1RBMk5qVXlOekF5TDBWdVoyeHBjMmhmUW1GMGRHVnllVjlNYVdabFgxZElMVEV3TURCWVRUVmZVR2x1YTE5SmJtWnZaM0poY0docFl5MXRhVzR1Y0c1bnwzOTE3Y2U0Y2M4ZDk1YzE5MDY5MTAzYTg4M2I5NDhhYzI4YmFlYzk2OWRjNzkxMGUzZjkwNGRmMWEyMTU1MTEz",
    description: "کیفیت صدای فوق‌العاده با حذف نویز فعال",
    category: "لوازم جانبی",
  },
  {
    id: 4,
    name: "ساعت هوشمند Apple Watch Series 10",
    price: 250000000,
    image:
      "https://i.pinimg.com/1200x/36/d1/f7/36d1f7838eeb16e7d4c940adf5cf0838.jpg",
    description: "سلامت، ورزش و اعلان‌ها در یک ساعت شیک",
    category: "لوازم جانبی",
  },
  {
    id: 5,
    name: "گوشی موبایل Google Pixel 8",
    price: 480000000,
    image: "https://kalatik.com/blog_media/0/23/11/11/169967488171.jpg",
    description: "دوربین عالی و اندروید خام با آپدیت‌های سریع",
    category: "موبایل",
  },
  {
    id: 6,
    name: "تبلت Apple iPad Air 13",
    price: 550000000,
    image:
      "https://s.mobile.ir/static/upload/articles/5387/introducing-apple-ipad-air-11-2024-and-ipad-air-13-2024_04.jpg",
    description: "تبلتی سبک و قدرتمند برای کار و سرگرمی",
    category: "تبلت",
  },
  {
    id: 7,
    name: "ایرباد Apple AirPods Pro (2nd Gen)",
    price: 120000000,
    image:
      "https://techcrunch.com/wp-content/uploads/2022/09/CMC_3690.jpg?w=1024",
    description: "نویز کنسلینگ فعال و صدای فراگیر برای موسیقی و تماس",
    category: "لوازم جانبی",
  },
  {
    id: 8,
    name: "اسپیکر بلوتوث JBL Charge 5",
    price: 30000000,
    image:
      "https://mediasamanpouya.com/wp-content/uploads/2024/11/JBL-Charge-5-%D9%88-Xtreme-3-1.jpg",
    description: "صدا قدرتمند و قابل حمل با باتری طولانی",
    category: "لوازم جانبی",
  },
  {
    id: 9,
    name: "دوربین دیجیتال Sony Alpha a6400",
    price: 900000000,
    image:
      "https://www.didnegar.com/wp-content/uploads/2024/11/Sony-A6400-Camera.webp",
    description: "دوربینی حرفه‌ای برای عکس و فیلم با کیفیت بالا",
    category: "دوربین",
  },
  {
    id: 10,
    name: "شارژر همراه Anker PowerCore 20000mAh",
    price: 15000000,
    image: "https://www.hitel.ir/wp-content/uploads/2021/11/Anker-A1268-8.jpg",
    description: "پاوربانک قدرتمند برای شارژ همه دستگاه‌ها در سفر",
    category: "لوازم جانبی",
  },
  {
    id: 11,
    name: "هدفون Bose QuietComfort 45",
    price: 40000000,
    image: "https://gooshi.online/uploads/editor/8a8d8c.jpg",
    description: "صدای واضح و حذف نویز عالی برای موسیقی و کار",
    category: "لوازم جانبی",
  },
  {
    id: 12,
    name: "گوشی OnePlus 12",
    price: 500000000,
    image:
      "https://www.technolife.com/wp-content/uploads/2023/12/%D9%88%D8%A7%D9%86-%D9%BE%D9%84%D8%A7%D8%B3-12.jpg",
    description: "عملکرد سریع و شارژ فوق‌سریع با 5G",
    category: "موبایل",
  },
  {
    id: 13,
    name: "گوشی تاشو Samsung Galaxy Z Fold 6",
    price: 780000000,
    image:
      "https://sakhtafzarmag.com/wp-content/uploads/2024/09/Samsung-Galaxy-Z-Fold-6-review-1920x930.jpg",
    description: "صفحه تاشو بزرگ برای مالتی‌تسک و کار حرفه‌ای",
    category: "موبایل",
  },
  {
    id: 14,
    name: "تبلت Samsung Galaxy Tab S10",
    price: 650000000,
    image:
      "https://sarirdigital.com/wp-content/uploads/2025/04/Samsung-Galaxy-Tab-S10-Plus-review-front-3.webp",
    description: "تبلتی قدرتمند با صفحه بزرگ و قلم مناسب طراحی",
    category: "تبلت",
  },
];
