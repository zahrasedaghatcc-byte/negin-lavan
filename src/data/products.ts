export const products = [
  {
    id: 1,
    title: "سایه‌بان سولارا",
    description:
      "چتر و سایه‌بان تنها یک پوشش نیست نمادی از آرامش و آسایش در فضای باز شماست طراحی مینیمال، کیفیت ممتاز و جلوه‌ای چشمگیر که هر محیطی را به فضایی لوکس، خنک و دلنشین تبدیل می‌کند.",
    price: 8500000,
    discount: 12,
    features: {
      public: [
        "مناسب برای تراس و فضای باز",
        "ضد پوسیدگی و رطوبت",
        "مقاومت بالا در برابر باد و طوفان",
        "طراحی مینیمال مطابق استانداردهای اروپایی",
      ],
      technical: ["چوب راش", "بدون سوخت", "پلی یورتان", "120 x 40 cm", "12 kg"],
    },
    images: {
      normal: [
        "/images/products/shades/shade-solara-one.png",
        "/images/products/shades/shade-solara-two.png",
        "/images/products/shades/shade-solara-three.png",
        "/images/products/shades/shade-solara-four.png",
      ],
      bordered: [
        "/images/products/shades/bordered/shade-solara-one.png",
        "/images/products/shades/bordered/shade-solara-two.png",
        "/images/products/shades/bordered/shade-solara-three.png",
        "/images/products/shades/bordered/shade-solara-four.png",
      ],
    },
    category: "سایه‌بان",
    brand: "سولارا",
    colors: [
      { label: "کرم", hex: "#F5F0E8" },
      { label: "زغالی", hex: "#3D3D3D" },
      { label: "سبز کبود", hex: "#7A9E87" },
      { label: "شنی", hex: "#C8B99A" },
    ],
  },
  {
    id: 2,
    title: "گلدان ولوره",
    description:
      "گلدان تنها محفظه‌ای برای نگهداری گل و گیاه نیست عنصری از زیبایی و طراوت است که به فضا روح می‌بخشد. طراحی مدرن کیفیت ماندگار و جلوه‌ای چشم‌نواز هر محیطی را به فضایی لوکس، دلنشین و سرشار از حس زندگی تبدیل می‌کند.",
    price: 3200000,
    features: {
      public: [
        "مناسب برای لابی و فضای نیمه‌باز",
        "ضد باکتری و کپک",
        "مقاومت بالا در برابر ضربه و سقوط",
        "طراحی لوکس سنگ طبیعی",
      ],
      technical: ["سنگ مرمر", "بدون سوخت", "ریور استون", "45 x 45 cm", "18 kg"],
    },
    images: {
      normal: [
        "/images/products/pots/pot-vellore-one.png",
        "/images/products/pots/pot-vellore-two.png",
        "/images/products/pots/pot-vellore-three.png",
        "/images/products/pots/pot-vellore-four.png",
      ],
      bordered: [
        "/images/products/pots/bordered/pot-vellore-one.png",
        "/images/products/pots/bordered/pot-vellore-two.png",
        "/images/products/pots/bordered/pot-vellore-three.png",
        "/images/products/pots/bordered/pot-vellore-four.png",
      ],
    },
    category: "گلدان",
    brand: "ولوره",
    colors: [
      { label: "سفید", hex: "#F8F8F8" },
      { label: "آنتراسیت", hex: "#363636" },
      { label: "سبز تیره", hex: "#2D4A3E" },
      { label: "تراکوتا", hex: "#C1654A" },
    ],
  },
  {
    id: 3,
    title: "آتشدان آرئون",
    description:
      "آتشدان تنها یک وسیله گرمایشی نیست؛ قلب تپنده دورهمی‌های شماست طراحی مینیمال، کیفیت ممتاز و جلوه‌ای چشمگیر که هر فضای باز را به محیطی لوکس و دعوت‌کننده تبدیل می‌کند.",
    price: 18400000,
    discount: 23,
    features: {
      public: [
        "مناسب برای فضای باز و محوطه",
        "ضد زنگ‌زدگی و خوردگی",
        "مقاومت بالا در برابر حرارت مستقیم",
        "طراحی ایمن با ورق کورتن ۳mm",
      ],
      technical: [
        "فولاد کورتن",
        "چوب و زغال",
        "رنگ نسوز مات",
        "60 x 60 cm",
        "34 kg",
        "3mm",
      ],
    },
    images: {
      normal: [
        "/images/products/hearths/hearth-areon-one.png",
        "/images/products/hearths/hearth-areon-two.png",
        "/images/products/hearths/hearth-areon-three.png",
        "/images/products/hearths/hearth-areon-four.png",
      ],
      bordered: [
        "/images/products/hearths/bordered/hearth-areon-one.png",
        "/images/products/hearths/bordered/hearth-areon-two.png",
        "/images/products/hearths/bordered/hearth-areon-three.png",
        "/images/products/hearths/bordered/hearth-areon-four.png",
      ],
    },
    category: "آتشدان",
    brand: "آرئون",
    colors: [
      { label: "زنگاری کورتن", hex: "#8B4513" },
      { label: "مشکی مات", hex: "#1E1E1E" },
      { label: "گرافیت", hex: "#4A4A4A" },
    ],
  },
  {
    id: 4,
    title: "صندلی استخر نووارا",
    description:
      "صندلی و تخت استخری تنها یک وسیله برای استراحت نیست گوشه‌ای از آرامش و لذت در فضای زندگی شماست. طراحی مدرن راحتی بی‌نظیر و کیفیت ماندگار هر کنار استخری را به فضایی لوکس، دلنشین و فراموش‌نشدنی تبدیل می‌کند.",
    price: 6900000,
    features: {
      public: [
        "مناسب برای کنار استخر و پاسیو",
        "ضد رطوبت و آب‌شستگی",
        "مقاومت بالا در برابر آب کلردار",
        "طراحی ایمن با چوب ترموود",
      ],
      technical: ["چوب ترموود", "بدون سوخت", "محافظ UV", "190 x 65 cm", "9 kg"],
    },
    images: {
      normal: [
        "/images/products/chairs/chair-novara-one.png",
        "/images/products/chairs/chair-novara-two.png",
        "/images/products/chairs/chair-novara-three.png",
        "/images/products/chairs/chair-novara-four.png",
      ],
      bordered: [
        "/images/products/chairs/bordered/chair-novara-one.png",
        "/images/products/chairs/bordered/chair-novara-two.png",
        "/images/products/chairs/bordered/chair-novara-three.png",
        "/images/products/chairs/bordered/chair-novara-four.png",
      ],
    },
    category: "صندلی",
    brand: "نووارا",
    colors: [
      { label: "طبیعی", hex: "#C19A6B" },
      { label: "چوب تیره", hex: "#5C3D1E" },
      { label: "سفید", hex: "#F8F8F8" },
      { label: "خاکستری", hex: "#9E9E9E" },
    ],
  },
  {
    id: 5,
    title: "چراغ ونتورا",
    description:
      "چراغ تنها یک منبع نور نیست؛ عنصری از زیبایی و آرامش است که به فضا جان می‌بخشد طراحی مدرن، نورپردازی چشم‌نواز و کیفیت ممتاز هر محیطی را به فضایی گرم، لوکس و فراموش‌نشدنی تبدیل می‌کند.",
    price: 4800000,
    features: {
      public: [
        "مناسب برای ورودی ساختمان و محوطه",
        "ضد خوردگی و اکسیداسیون",
        "مقاومت بالا در برابر باران و رطوبت IP65",
        "طراحی ایمن مطابق استاندارد IEC 60598",
      ],
      technical: [
        "آلومینیوم",
        "برق شهری ۲۲۰V",
        "پودری الکترواستاتیک",
        "H: 180 cm",
        "4.5 kg",
        "12W",
      ],
    },
    images: {
      normal: [
        "/images/products/lights/light-ventura-one.png",
        "/images/products/lights/light-ventura-two.png",
        "/images/products/lights/light-ventura-three.png",
        "/images/products/lights/light-ventura-four.png",
      ],
      bordered: [
        "/images/products/lights/bordered/light-ventura-one.png",
        "/images/products/lights/bordered/light-ventura-two.png",
        "/images/products/lights/bordered/light-ventura-three.png",
        "/images/products/lights/bordered/light-ventura-four.png",
      ],
    },
    category: "چراغ",
    brand: "ونتورا",
    colors: [
      { label: "مشکی مات", hex: "#1E1E1E" },
      { label: "برنز", hex: "#8C6239" },
      { label: "سفید", hex: "#F8F8F8" },
      { label: "گرافیت", hex: "#4A4A4A" },
    ],
  },
  {
    id: 6,
    title: "گلدان سولارا",
    description:
      "گلدان تنها محفظه‌ای برای نگهداری گل و گیاه نیست عنصری از زیبایی و طراوت است که به فضا روح می‌بخشد. طراحی مدرن کیفیت ماندگار و جلوه‌ای چشم‌نواز هر محیطی را به فضایی لوکس، دلنشین و سرشار از حس زندگی تبدیل می‌کند.",
    price: 2100000,
    discount: 25,
    features: {
      public: [
        "مناسب برای بالکن و تراس",
        "ضد باکتری و رطوبت داخلی",
        "مقاومت بالا در برابر ضربه و سرما",
        "طراحی مدرن سبک با فایبرگلاس",
      ],
      technical: [
        "فایبرگلاس",
        "بدون سوخت",
        "رنگ اکریلیک",
        "35 x 35 cm",
        "6 kg",
      ],
    },
    images: {
      normal: [
        "/images/products/pots/pot-solara-one.png",
        "/images/products/pots/pot-solara-two.png",
        "/images/products/pots/pot-solara-three.png",
        "/images/products/pots/pot-solara-four.png",
      ],
      bordered: [
        "/images/products/pots/bordered/pot-solara-one.png",
        "/images/products/pots/bordered/pot-solara-two.png",
        "/images/products/pots/bordered/pot-solara-three.png",
        "/images/products/pots/bordered/pot-solara-four.png",
      ],
    },
    category: "گلدان",
    brand: "سولارا",
    colors: [
      { label: "سفید", hex: "#F8F8F8" },
      { label: "مشکی", hex: "#1E1E1E" },
      { label: "تراکوتا", hex: "#C1654A" },
      { label: "زیتونی", hex: "#6B7C4D" },
    ],
  },
  {
    id: 7,
    title: "آتشدان ولوره",
    description:
      "آتشدان تنها یک وسیله گرمایشی نیست؛ قلب تپنده دورهمی‌های شماست طراحی مینیمال، کیفیت ممتاز و جلوه‌ای چشمگیر که هر فضای باز را به محیطی لوکس و دعوت‌کننده تبدیل می‌کند.",
    price: 14600000,
    features: {
      public: [
        "مناسب برای بام‌تراس و روف‌گاردن",
        "ضد زنگ و اکسیداسیون",
        "مقاومت بالا در برابر حرارت و شعله",
        "طراحی ایمن مطابق استاندارد آتش‌نشانی",
      ],
      technical: [
        "فولاد کورتن",
        "چوب و زغال",
        "رنگ نسوز مات",
        "50 x 50 cm",
        "28 kg",
        "2mm",
      ],
    },
    images: {
      normal: [
        "/images/products/hearths/hearth-vellore-one.png",
        "/images/products/hearths/hearth-vellore-two.png",
        "/images/products/hearths/hearth-vellore-three.png",
        "/images/products/hearths/hearth-vellore-four.png",
      ],
      bordered: [
        "/images/products/hearths/bordered/hearth-vellore-one.png",
        "/images/products/hearths/bordered/hearth-vellore-two.png",
        "/images/products/hearths/bordered/hearth-vellore-three.png",
        "/images/products/hearths/bordered/hearth-vellore-four.png",
      ],
    },
    category: "آتشدان",
    brand: "ولوره",
    colors: [
      { label: "زنگاری کورتن", hex: "#8B4513" },
      { label: "مشکی مات", hex: "#1E1E1E" },
      { label: "گرافیت", hex: "#4A4A4A" },
    ],
  },
  {
    id: 8,
    title: "صندلی استخر آرئون",
    description:
      "صندلی و تخت استخری تنها یک وسیله برای استراحت نیست گوشه‌ای از آرامش و لذت در فضای زندگی شماست. طراحی مدرن راحتی بی‌نظیر و کیفیت ماندگار هر کنار استخری را به فضایی لوکس، دلنشین و فراموش‌نشدنی تبدیل می‌کند.",
    price: 9200000,
    discount: 20,
    features: {
      public: [
        "مناسب برای استخر و محوطه ساحلی",
        "ضد رطوبت و نمک دریا",
        "مقاومت بالا در برابر آب و تابش UV",
        "طراحی سبک با آلومینیوم آنودایز",
      ],
      technical: [
        "آلومینیوم آنودایز",
        "بدون سوخت",
        "پارچه تکستیلن",
        "200 x 70 cm",
        "11 kg",
      ],
    },
    images: {
      normal: [
        "/images/products/chairs/chair-areon-one.png",
        "/images/products/chairs/chair-areon-two.png",
        "/images/products/chairs/chair-areon-three.png",
        "/images/products/chairs/chair-areon-four.png",
      ],
      bordered: [
        "/images/products/chairs/bordered/chair-areon-one.png",
        "/images/products/chairs/bordered/chair-areon-two.png",
        "/images/products/chairs/bordered/chair-areon-three.png",
        "/images/products/chairs/bordered/chair-areon-four.png",
      ],
    },
    category: "صندلی",
    brand: "آرئون",
    colors: [
      { label: "سفید", hex: "#F8F8F8" },
      { label: "آنتراسیت", hex: "#363636" },
      { label: "خاکستری", hex: "#9E9E9E" },
      { label: "بژ", hex: "#D6C9B3" },
    ],
  },
  {
    id: 9,
    title: "چراغ نووارا",
    description:
      "چراغ تنها یک منبع نور نیست؛ عنصری از زیبایی و آرامش است که به فضا جان می‌بخشد طراحی مدرن، نورپردازی چشم‌نواز و کیفیت ممتاز هر محیطی را به فضایی گرم، لوکس و فراموش‌نشدنی تبدیل می‌کند.",
    price: 3600000,
    discount: 8,
    features: {
      public: [
        "مناسب برای خیابان و پارکینگ",
        "ضد خوردگی و زنگ‌زدگی",
        "مقاومت بالا در برابر ضربه و لرزش",
        "طراحی کلاسیک مطابق استاندارد IP44",
      ],
      technical: [
        "آهن گالوانیزه",
        "برق شهری ۲۲۰V",
        "رنگ اپوکسی",
        "H: 140 cm",
        "3.2 kg",
        "9W",
      ],
    },
    images: {
      normal: [
        "/images/products/lights/light-novara-one.png",
        "/images/products/lights/light-novara-two.png",
        "/images/products/lights/light-novara-three.png",
        "/images/products/lights/light-novara-four.png",
      ],
      bordered: [
        "/images/products/lights/bordered/light-novara-one.png",
        "/images/products/lights/bordered/light-novara-two.png",
        "/images/products/lights/bordered/light-novara-three.png",
        "/images/products/lights/bordered/light-novara-four.png",
      ],
    },
    category: "چراغ",
    brand: "نووارا",
    colors: [
      { label: "مشکی", hex: "#1E1E1E" },
      { label: "سبز", hex: "#3A5F3A" },
      { label: "سفید", hex: "#F8F8F8" },
      { label: "خاکستری", hex: "#9E9E9E" },
    ],
  },
  {
    id: 10,
    title: "سایه‌بان ونتورا",
    description:
      "چتر و سایه‌بان تنها یک پوشش نیست نمادی از آرامش و آسایش در فضای باز شماست طراحی مینیمال، کیفیت ممتاز و جلوه‌ای چشمگیر که هر محیطی را به فضایی لوکس، خنک و دلنشین تبدیل می‌کند.",
    price: 11200000,
    features: {
      public: [
        "مناسب برای بالکن و پاسیو",
        "ضد پوسیدگی و اکسیداسیون",
        "مقاومت بالا در برابر باران و آفتاب",
        "طراحی مدرن با سازه ضد خوردگی",
      ],
      technical: [
        "آلومینیوم پروفیل",
        "بدون سوخت",
        "پارچه ضد آب ۳۰۰D",
        "300 x 300 cm",
        "22 kg",
      ],
    },
    images: {
      normal: [
        "/images/products/shades/shade-ventura-one.png",
        "/images/products/shades/shade-ventura-two.png",
        "/images/products/shades/shade-ventura-three.png",
        "/images/products/shades/shade-ventura-four.png",
      ],
      bordered: [
        "/images/products/shades/bordered/shade-ventura-one.png",
        "/images/products/shades/bordered/shade-ventura-two.png",
        "/images/products/shades/bordered/shade-ventura-three.png",
        "/images/products/shades/bordered/shade-ventura-four.png",
      ],
    },
    category: "سایه‌بان",
    brand: "ونتورا",
    colors: [
      { label: "کرم", hex: "#F5F0E8" },
      { label: "زغالی", hex: "#3D3D3D" },
      { label: "آبی دودی", hex: "#6B8CAE" },
      { label: "شنی", hex: "#C8B99A" },
    ],
  },
  {
    id: 11,
    title: "آتشدان سولارا",
    description:
      "آتشدان تنها یک وسیله گرمایشی نیست؛ قلب تپنده دورهمی‌های شماست طراحی مینیمال، کیفیت ممتاز و جلوه‌ای چشمگیر که هر فضای باز را به محیطی لوکس و دعوت‌کننده تبدیل می‌کند.",
    price: 21500000,
    discount: 17,
    features: {
      public: [
        "مناسب برای محوطه‌های لوکس و ویلا",
        "ضد زنگ و خوردگی شیمیایی",
        "مقاومت بالا در برابر دماهای بالای ۸۰۰°C",
        "طراحی مینیمال با استیل ۳۰۴ پزشکی",
      ],
      technical: [
        "استیل ۳۰۴",
        "چوب و زغال",
        "رنگ نسوز مات",
        "70 x 70 cm",
        "41 kg",
        "3mm",
      ],
    },
    images: {
      normal: [
        "/images/products/hearths/hearth-solara-one.png",
        "/images/products/hearths/hearth-solara-two.png",
        "/images/products/hearths/hearth-solara-three.png",
        "/images/products/hearths/hearth-solara-four.png",
      ],
      bordered: [
        "/images/products/hearths/bordered/hearth-solara-one.png",
        "/images/products/hearths/bordered/hearth-solara-two.png",
        "/images/products/hearths/bordered/hearth-solara-three.png",
        "/images/products/hearths/bordered/hearth-solara-four.png",
      ],
    },
    category: "آتشدان",
    brand: "سولارا",
    colors: [
      { label: "استیل", hex: "#B0B0B0" },
      { label: "مشکی مات", hex: "#1E1E1E" },
      { label: "گرافیت", hex: "#4A4A4A" },
    ],
  },
  {
    id: 12,
    title: "صندلی استخر ولوره",
    description:
      "صندلی و تخت استخری تنها یک وسیله برای استراحت نیست گوشه‌ای از آرامش و لذت در فضای زندگی شماست. طراحی مدرن راحتی بی‌نظیر و کیفیت ماندگار هر کنار استخری را به فضایی لوکس، دلنشین و فراموش‌نشدنی تبدیل می‌کند.",
    price: 7500000,
    discount: 15,
    features: {
      public: [
        "مناسب برای استخر و باغچه خانگی",
        "ضد رطوبت و پوسیدگی",
        "مقاومت بالا در برابر آب و رطوبت بالا",
        "طراحی کلاسیک با چوب ترموود روغن‌کاری",
      ],
      technical: [
        "چوب ترموود",
        "بدون سوخت",
        "روغن چوب طبیعی",
        "185 x 60 cm",
        "8 kg",
      ],
    },
    images: {
      normal: [
        "/images/products/chairs/chair-vellore-one.png",
        "/images/products/chairs/chair-vellore-two.png",
        "/images/products/chairs/chair-vellore-three.png",
        "/images/products/chairs/chair-vellore-four.png",
      ],
      bordered: [
        "/images/products/chairs/bordered/chair-vellore-one.png",
        "/images/products/chairs/bordered/chair-vellore-two.png",
        "/images/products/chairs/bordered/chair-vellore-three.png",
        "/images/products/chairs/bordered/chair-vellore-four.png",
      ],
    },
    category: "صندلی",
    brand: "ولوره",
    colors: [
      { label: "طبیعی", hex: "#C19A6B" },
      { label: "چوب تیره", hex: "#5C3D1E" },
      { label: "سفید", hex: "#F8F8F8" },
    ],
  },
  {
    id: 13,
    title: "چراغ آرئون",
    description:
      "چراغ تنها یک منبع نور نیست؛ عنصری از زیبایی و آرامش است که به فضا جان می‌بخشد طراحی مدرن، نورپردازی چشم‌نواز و کیفیت ممتاز هر محیطی را به فضایی گرم، لوکس و فراموش‌نشدنی تبدیل می‌کند.",
    price: 6200000,
    discount: 15,
    features: {
      public: [
        "مناسب برای باغ و محوطه تاریخی",
        "ضد خوردگی و اکسیداسیون برنج",
        "مقاومت بالا در برابر رطوبت و باران شدید",
        "طراحی کلاسیک با برنج ریخته‌گری",
      ],
      technical: [
        "برنج ریخته‌گری",
        "برق شهری ۲۲۰V",
        "پوشش نیکل",
        "H: 220 cm",
        "7.8 kg",
        "18W",
      ],
    },
    images: {
      normal: [
        "/images/products/lights/light-areon-one.png",
        "/images/products/lights/light-areon-two.png",
        "/images/products/lights/light-areon-three.png",
        "/images/products/lights/light-areon-four.png",
      ],
      bordered: [
        "/images/products/lights/bordered/light-areon-one.png",
        "/images/products/lights/bordered/light-areon-two.png",
        "/images/products/lights/bordered/light-areon-three.png",
        "/images/products/lights/bordered/light-areon-four.png",
      ],
    },
    category: "چراغ",
    brand: "آرئون",
    colors: [
      { label: "برنج", hex: "#C9963A" },
      { label: "نیکل", hex: "#AFAFAF" },
      { label: "مشکی", hex: "#1E1E1E" },
      { label: "برنز", hex: "#8C6239" },
    ],
  },
  {
    id: 14,
    title: "گلدان ونتورا",
    description:
      "گلدان تنها محفظه‌ای برای نگهداری گل و گیاه نیست عنصری از زیبایی و طراوت است که به فضا روح می‌بخشد. طراحی مدرن کیفیت ماندگار و جلوه‌ای چشم‌نواز هر محیطی را به فضایی لوکس، دلنشین و سرشار از حس زندگی تبدیل می‌کند.",
    price: 4600000,
    discount: 12,
    features: {
      public: [
        "مناسب برای محوطه و باغ مدرن",
        "ضد باکتری و جلبک",
        "مقاومت بالا در برابر یخ‌زدگی",
        "طراحی اینداستریال با بتن سبک",
      ],
      technical: ["بتن سبک", "بدون سوخت", "رنگ ضد آب", "50 x 50 cm", "14 kg"],
    },
    images: {
      normal: [
        "/images/products/pots/pot-ventura-one.png",
        "/images/products/pots/pot-ventura-two.png",
        "/images/products/pots/pot-ventura-three.png",
        "/images/products/pots/pot-ventura-four.png",
      ],
      bordered: [
        "/images/products/pots/bordered/pot-ventura-one.png",
        "/images/products/pots/bordered/pot-ventura-two.png",
        "/images/products/pots/bordered/pot-ventura-three.png",
        "/images/products/pots/bordered/pot-ventura-four.png",
      ],
    },
    category: "گلدان",
    brand: "ونتورا",
    colors: [
      { label: "خاکستری", hex: "#9E9E9E" },
      { label: "آنتراسیت", hex: "#363636" },
      { label: "کرم", hex: "#F5F0E8" },
      { label: "سبز تیره", hex: "#2D4A3E" },
    ],
  },
  {
    id: 15,
    title: "سایه‌بان نووارا",
    description:
      "چتر و سایه‌بان تنها یک پوشش نیست نمادی از آرامش و آسایش در فضای باز شماست طراحی مینیمال، کیفیت ممتاز و جلوه‌ای چشمگیر که هر محیطی را به فضایی لوکس، خنک و دلنشین تبدیل می‌کند.",
    price: 7400000,
    discount: 10,
    features: {
      public: [
        "مناسب برای باغ و حیاط سنتی",
        "ضد پوسیدگی و آفات چوبی",
        "مقاومت بالا در برابر رطوبت محیطی",
        "طراحی اکو-فرندلی با مواد طبیعی",
      ],
      technical: [
        "چوب بامبو",
        "بدون سوخت",
        "لاک پلی اورتان",
        "250 x 250 cm",
        "16 kg",
      ],
    },
    images: {
      normal: [
        "/images/products/shades/shade-novara-one.png",
        "/images/products/shades/shade-novara-two.png",
        "/images/products/shades/shade-novara-three.png",
        "/images/products/shades/shade-novara-four.png",
      ],
      bordered: [
        "/images/products/shades/bordered/shade-novara-one.png",
        "/images/products/shades/bordered/shade-novara-two.png",
        "/images/products/shades/bordered/shade-novara-three.png",
        "/images/products/shades/bordered/shade-novara-four.png",
      ],
    },
    category: "سایه‌بان",
    brand: "نووارا",
    colors: [
      { label: "طبیعی بامبو", hex: "#D4B483" },
      { label: "کرم", hex: "#F5F0E8" },
      { label: "زغالی", hex: "#3D3D3D" },
      { label: "شنی", hex: "#C8B99A" },
    ],
  },
  {
    id: 16,
    title: "صندلی استخر سولارا",
    description:
      "صندلی و تخت استخری تنها یک وسیله برای استراحت نیست گوشه‌ای از آرامش و لذت در فضای زندگی شماست. طراحی مدرن راحتی بی‌نظیر و کیفیت ماندگار هر کنار استخری را به فضایی لوکس، دلنشین و فراموش‌نشدنی تبدیل می‌کند.",
    price: 5400000,
    features: {
      public: [
        "مناسب برای استخر و سانه‌روم",
        "ضد رطوبت و تابش UV",
        "مقاومت بالا در برابر آب و سایش",
        "طراحی مدرن با پلاستیک اقتصادی مقاوم",
      ],
      technical: [
        "پلی پروپیلن",
        "بدون سوخت",
        "پوشش UV Stabilized",
        "180 x 58 cm",
        "5.5 kg",
      ],
    },
    images: {
      normal: [
        "/images/products/chairs/chair-solara-one.png",
        "/images/products/chairs/chair-solara-two.png",
        "/images/products/chairs/chair-solara-three.png",
        "/images/products/chairs/chair-solara-four.png",
      ],
      bordered: [
        "/images/products/chairs/bordered/chair-solara-one.png",
        "/images/products/chairs/bordered/chair-solara-two.png",
        "/images/products/chairs/bordered/chair-solara-three.png",
        "/images/products/chairs/bordered/chair-solara-four.png",
      ],
    },
    category: "صندلی",
    brand: "سولارا",
    colors: [
      { label: "سفید", hex: "#F8F8F8" },
      { label: "آنتراسیت", hex: "#363636" },
      { label: "بژ", hex: "#D6C9B3" },
      { label: "خاکستری", hex: "#9E9E9E" },
    ],
  },
  {
    id: 17,
    title: "چراغ ولوره",
    description:
      "چراغ تنها یک منبع نور نیست؛ عنصری از زیبایی و آرامش است که به فضا جان می‌بخشد طراحی مدرن، نورپردازی چشم‌نواز و کیفیت ممتاز هر محیطی را به فضایی گرم، لوکس و فراموش‌نشدنی تبدیل می‌کند.",
    price: 5100000,
    features: {
      public: [
        "مناسب برای پاسیو و تراس مدرن",
        "ضد خوردگی و پوسته‌شدن",
        "مقاومت بالا در برابر رطوبت و سرمای زیاد",
        "طراحی مینیمال مطابق استاندارد IP54",
      ],
      technical: [
        "استیل ضد زنگ",
        "برق شهری ۲۲۰V",
        "پوشش کروم",
        "H: 160 cm",
        "5.1 kg",
        "15W",
      ],
    },
    images: {
      normal: [
        "/images/products/lights/light-vellore-one.png",
        "/images/products/lights/light-vellore-two.png",
        "/images/products/lights/light-vellore-three.png",
        "/images/products/lights/light-vellore-four.png",
      ],
      bordered: [
        "/images/products/lights/bordered/light-vellore-one.png",
        "/images/products/lights/bordered/light-vellore-two.png",
        "/images/products/lights/bordered/light-vellore-three.png",
        "/images/products/lights/bordered/light-vellore-four.png",
      ],
    },
    category: "چراغ",
    brand: "ولوره",
    colors: [
      { label: "کروم", hex: "#D4D4D4" },
      { label: "مشکی مات", hex: "#1E1E1E" },
      { label: "گرافیت", hex: "#4A4A4A" },
      { label: "برنز", hex: "#8C6239" },
    ],
  },
  {
    id: 18,
    title: "سایه‌بان آرئون",
    description:
      "چتر و سایه‌بان تنها یک پوشش نیست نمادی از آرامش و آسایش در فضای باز شماست طراحی مینیمال، کیفیت ممتاز و جلوه‌ای چشمگیر که هر محیطی را به فضایی لوکس، خنک و دلنشین تبدیل می‌کند.",
    price: 13500000,
    discount: 16,
    features: {
      public: [
        "مناسب برای فضای تجاری و رستوران",
        "ضد پوسیدگی و زنگ‌زدگی",
        "مقاومت بالا در برابر بارهای سنگین برف",
        "طراحی صنعتی مطابق استاندارد EN 13561",
      ],
      technical: [
        "فولاد گالوانیزه",
        "بدون سوخت",
        "پارچه آکریلیک ۴۵۰D",
        "400 x 400 cm",
        "38 kg",
      ],
    },
    images: {
      normal: [
        "/images/products/shades/shade-areon-one.png",
        "/images/products/shades/shade-areon-two.png",
        "/images/products/shades/shade-areon-three.png",
        "/images/products/shades/shade-areon-four.png",
      ],
      bordered: [
        "/images/products/shades/bordered/shade-areon-one.png",
        "/images/products/shades/bordered/shade-areon-two.png",
        "/images/products/shades/bordered/shade-areon-three.png",
        "/images/products/shades/bordered/shade-areon-four.png",
      ],
    },
    category: "سایه‌بان",
    brand: "آرئون",
    colors: [
      { label: "مشکی مات", hex: "#2C2C2C" },
      { label: "خاکستری", hex: "#8A8A8A" },
      { label: "کرم", hex: "#F5F0E8" },
      { label: "سبز کبود", hex: "#7A9E87" },
    ],
  },
  {
    id: 19,
    title: "گلدان نووارا",
    description:
      "گلدان تنها محفظه‌ای برای نگهداری گل و گیاه نیست عنصری از زیبایی و طراوت است که به فضا روح می‌بخشد. طراحی مدرن کیفیت ماندگار و جلوه‌ای چشم‌نواز هر محیطی را به فضایی لوکس، دلنشین و سرشار از حس زندگی تبدیل می‌کند.",
    price: 2900000,
    features: {
      public: [
        "مناسب برای فضای داخلی و نیمه‌باز",
        "ضد باکتری و رطوبت",
        "مقاومت بالا در برابر خش و سایش",
        "طراحی سنتی با سرامیک پرسلان",
      ],
      technical: [
        "سرامیک پرسلان",
        "بدون سوخت",
        "لعاب شیشه‌ای",
        "40 x 40 cm",
        "11 kg",
      ],
    },
    images: {
      normal: [
        "/images/products/pots/pot-novara-one.png",
        "/images/products/pots/pot-novara-two.png",
        "/images/products/pots/pot-novara-three.png",
        "/images/products/pots/pot-novara-four.png",
      ],
      bordered: [
        "/images/products/pots/bordered/pot-novara-one.png",
        "/images/products/pots/bordered/pot-novara-two.png",
        "/images/products/pots/bordered/pot-novara-three.png",
        "/images/products/pots/bordered/pot-novara-four.png",
      ],
    },
    category: "گلدان",
    brand: "نووارا",
    colors: [
      { label: "سفید", hex: "#F8F8F8" },
      { label: "آبی لاجوردی", hex: "#3A5F8A" },
      { label: "سبز تیره", hex: "#2D4A3E" },
      { label: "تراکوتا", hex: "#C1654A" },
    ],
  },
  {
    id: 20,
    title: "آتشدان ونتورا",
    description:
      "آتشدان تنها یک وسیله گرمایشی نیست؛ قلب تپنده دورهمی‌های شماست طراحی مینیمال، کیفیت ممتاز و جلوه‌ای چشمگیر که هر فضای باز را به محیطی لوکس و دعوت‌کننده تبدیل می‌کند.",
    price: 16200000,
    features: {
      public: [
        "مناسب برای باغ و حیاط بزرگ",
        "ضد زنگ و آب‌وهوا",
        "مقاومت بالا در برابر گرمای مداوم",
        "طراحی طبیعی با پتینه خود‌ساز کورتن",
      ],
      technical: [
        "فولاد کورتن",
        "چوب و زغال",
        "رنگ نسوز مات",
        "55 x 55 cm",
        "31 kg",
        "2mm",
      ],
    },
    images: {
      normal: [
        "/images/products/hearths/hearth-ventura-one.png",
        "/images/products/hearths/hearth-ventura-two.png",
        "/images/products/hearths/hearth-ventura-three.png",
        "/images/products/hearths/hearth-ventura-four.png",
      ],
      bordered: [
        "/images/products/hearths/bordered/hearth-ventura-one.png",
        "/images/products/hearths/bordered/hearth-ventura-two.png",
        "/images/products/hearths/bordered/hearth-ventura-three.png",
        "/images/products/hearths/bordered/hearth-ventura-four.png",
      ],
    },
    category: "آتشدان",
    brand: "ونتورا",
    colors: [
      { label: "زنگاری کورتن", hex: "#8B4513" },
      { label: "مشکی مات", hex: "#1E1E1E" },
      { label: "قهوه‌ای تیره", hex: "#3E1F0A" },
    ],
  },
  {
    id: 21,
    title: "چراغ سولارا",
    description:
      "چراغ تنها یک منبع نور نیست؛ عنصری از زیبایی و آرامش است که به فضا جان می‌بخشد طراحی مدرن، نورپردازی چشم‌نواز و کیفیت ممتاز هر محیطی را به فضایی گرم، لوکس و فراموش‌نشدنی تبدیل می‌کند.",
    price: 2900000,
    discount: 15,
    features: {
      public: [
        "مناسب برای باغچه و مسیر پیاده",
        "ضد خوردگی و بارش",
        "مقاومت بالا در برابر تابش UV و تغییر دما",
        "طراحی اکو مطابق استانداردهای انرژی خورشیدی",
      ],
      technical: [
        "آلومینیوم دایکاست",
        "خورشیدی / شارژی",
        "پوشش آنودایز",
        "H: 90 cm",
        "2.3 kg",
        "6W",
      ],
    },
    images: {
      normal: [
        "/images/products/lights/light-solara-one.png",
        "/images/products/lights/light-solara-two.png",
        "/images/products/lights/light-solara-three.png",
        "/images/products/lights/light-solara-four.png",
      ],
      bordered: [
        "/images/products/lights/bordered/light-solara-one.png",
        "/images/products/lights/bordered/light-solara-two.png",
        "/images/products/lights/bordered/light-solara-three.png",
        "/images/products/lights/bordered/light-solara-four.png",
      ],
    },
    category: "چراغ",
    brand: "سولارا",
    colors: [
      { label: "مشکی مات", hex: "#1E1E1E" },
      { label: "خاکستری", hex: "#9E9E9E" },
      { label: "سفید", hex: "#F8F8F8" },
    ],
  },
  {
    id: 22,
    title: "سایه‌بان ولوره",
    description:
      "چتر و سایه‌بان تنها یک پوشش نیست نمادی از آرامش و آسایش در فضای باز شماست طراحی مینیمال، کیفیت ممتاز و جلوه‌ای چشمگیر که هر محیطی را به فضایی لوکس، خنک و دلنشین تبدیل می‌کند.",
    price: 9800000,
    features: {
      public: [
        "مناسب برای حیاط و باغچه خانگی",
        "ضد پوسیدگی و تابش UV",
        "مقاومت بالا در برابر تغییرات دما",
        "طراحی کلاسیک با چوب طبیعی",
      ],
      technical: [
        "چوب ترموود",
        "بدون سوخت",
        "رنگ ضد UV",
        "280 x 280 cm",
        "19 kg",
      ],
    },
    images: {
      normal: [
        "/images/products/shades/shade-vellore-one.png",
        "/images/products/shades/shade-vellore-two.png",
        "/images/products/shades/shade-vellore-three.png",
        "/images/products/shades/shade-vellore-four.png",
      ],
      bordered: [
        "/images/products/shades/bordered/shade-vellore-one.png",
        "/images/products/shades/bordered/shade-vellore-two.png",
        "/images/products/shades/bordered/shade-vellore-three.png",
        "/images/products/shades/bordered/shade-vellore-four.png",
      ],
    },
    category: "سایه‌بان",
    brand: "ولوره",
    colors: [
      { label: "طبیعی چوب", hex: "#C19A6B" },
      { label: "وبنگ", hex: "#8B5E3C" },
      { label: "کرم", hex: "#F5F0E8" },
      { label: "زغالی", hex: "#3D3D3D" },
    ],
  },
  {
    id: 23,
    title: "گلدان آرئون",
    description:
      "گلدان تنها محفظه‌ای برای نگهداری گل و گیاه نیست عنصری از زیبایی و طراوت است که به فضا روح می‌بخشد. طراحی مدرن کیفیت ماندگار و جلوه‌ای چشم‌نواز هر محیطی را به فضایی لوکس، دلنشین و سرشار از حس زندگی تبدیل می‌کند.",
    price: 5800000,
    features: {
      public: [
        "مناسب برای محوطه‌سازی و لندسکیپ",
        "ضد باکتری و خزه",
        "مقاومت بالا در برابر یخبندان و گرمای شدید",
        "طراحی پریمیوم با سنگ گرانیت",
      ],
      technical: [
        "سنگ گرانیت",
        "بدون سوخت",
        "پولیش طبیعی",
        "60 x 60 cm",
        "32 kg",
      ],
    },
    images: {
      normal: [
        "/images/products/pots/pot-areon-one.png",
        "/images/products/pots/pot-areon-two.png",
        "/images/products/pots/pot-areon-three.png",
        "/images/products/pots/pot-areon-four.png",
      ],
      bordered: [
        "/images/products/pots/bordered/pot-areon-one.png",
        "/images/products/pots/bordered/pot-areon-two.png",
        "/images/products/pots/bordered/pot-areon-three.png",
        "/images/products/pots/bordered/pot-areon-four.png",
      ],
    },
    category: "گلدان",
    brand: "آرئون",
    colors: [
      { label: "خاکستری سنگ", hex: "#7A7A7A" },
      { label: "مشکی گرانیت", hex: "#2A2A2A" },
      { label: "بژ", hex: "#D6C9B3" },
      { label: "سبز تیره", hex: "#2D4A3E" },
    ],
  },
  {
    id: 24,
    title: "آتشدان نووارا",
    description:
      "آتشدان تنها یک وسیله گرمایشی نیست؛ قلب تپنده دورهمی‌های شماست طراحی مینیمال، کیفیت ممتاز و جلوه‌ای چشمگیر که هر فضای باز را به محیطی لوکس و دعوت‌کننده تبدیل می‌کند.",
    price: 12800000,
    discount: 20,
    features: {
      public: [
        "مناسب برای تراس آپارتمان و فضای کوچک",
        "ضد زنگ و رسوب",
        "مقاومت بالا در برابر حرارت ۶۰۰°C",
        "طراحی کمپکت مطابق استاندارد EN 13240",
      ],
      technical: [
        "ورق استیل",
        "چوب و زغال",
        "رنگ کوره‌ای",
        "45 x 45 cm",
        "22 kg",
        "3mm",
      ],
    },
    images: {
      normal: [
        "/images/products/hearths/hearth-novara-one.png",
        "/images/products/hearths/hearth-novara-two.png",
        "/images/products/hearths/hearth-novara-three.png",
        "/images/products/hearths/hearth-novara-four.png",
      ],
      bordered: [
        "/images/products/hearths/bordered/hearth-novara-one.png",
        "/images/products/hearths/bordered/hearth-novara-two.png",
        "/images/products/hearths/bordered/hearth-novara-three.png",
        "/images/products/hearths/bordered/hearth-novara-four.png",
      ],
    },
    category: "آتشدان",
    brand: "نووارا",
    colors: [
      { label: "مشکی کوره‌ای", hex: "#1A1A1A" },
      { label: "گرافیت", hex: "#4A4A4A" },
      { label: "استیل", hex: "#B0B0B0" },
    ],
  },
  {
    id: 25,
    title: "صندلی استخر ونتورا",
    description:
      "صندلی و تخت استخری تنها یک وسیله برای استراحت نیست گوشه‌ای از آرامش و لذت در فضای زندگی شماست. طراحی مدرن راحتی بی‌نظیر و کیفیت ماندگار هر کنار استخری را به فضایی لوکس، دلنشین و فراموش‌نشدنی تبدیل می‌کند.",
    price: 11800000,
    discount: 13,
    features: {
      public: [
        "مناسب برای استخر و جکوزی",
        "ضد رطوبت و کلر",
        "مقاومت بالا در برابر آب‌شور و رطوبت شدید",
        "طراحی لوکس با تیک اندونزی درجه یک",
      ],
      technical: [
        "تیک اندونزی",
        "بدون سوخت",
        "روغن تیک طبیعی",
        "210 x 75 cm",
        "15 kg",
      ],
    },
    images: {
      normal: [
        "/images/products/chairs/chair-ventura-one.png",
        "/images/products/chairs/chair-ventura-two.png",
        "/images/products/chairs/chair-ventura-three.png",
        "/images/products/chairs/chair-ventura-four.png",
      ],
      bordered: [
        "/images/products/chairs/bordered/chair-ventura-one.png",
        "/images/products/chairs/bordered/chair-ventura-two.png",
        "/images/products/chairs/bordered/chair-ventura-three.png",
        "/images/products/chairs/bordered/chair-ventura-four.png",
      ],
    },
    category: "صندلی",
    brand: "ونتورا",
    colors: [
      { label: "تیک طبیعی", hex: "#B8864E" },
      { label: "تیک تیره", hex: "#5C3D1E" },
      { label: "سفید", hex: "#F8F8F8" },
      { label: "خاکستری", hex: "#9E9E9E" },
    ],
  },
  {
    id: 26,
    title: "سایه‌بان والورا",
    description:
      "چتر و سایه‌بان تنها یک پوشش نیست نمادی از آرامش و آسایش در فضای باز شماست طراحی مینیمال، کیفیت ممتاز و جلوه‌ای چشمگیر که هر محیطی را به فضایی لوکس، خنک و دلنشین تبدیل می‌کند.",
    price: 15900000,
    discount: 15,
    features: {
      public: [
        "مناسب برای استخر و محوطه لوکس",
        "ضد پوسیدگی در محیط مرطوب",
        "مقاومت بالا در برابر وزن برف و باد شدید",
        "طراحی پریمیوم با فولاد ضد زنگ ۳۱۶",
      ],
      technical: [
        "استیل ضد زنگ ۳۱۶",
        "بدون سوخت",
        "پارچه HDPE ۳۴۰gsm",
        "500 x 500 cm",
        "55 kg",
      ],
    },
    images: {
      normal: [
        "/images/products/shades/shade-valora-one.png",
        "/images/products/shades/shade-valora-two.png",
        "/images/products/shades/shade-valora-three.png",
        "/images/products/shades/shade-valora-four.png",
      ],
      bordered: [
        "/images/products/shades/bordered/shade-valora-one.png",
        "/images/products/shades/bordered/shade-valora-two.png",
        "/images/products/shades/bordered/shade-valora-three.png",
        "/images/products/shades/bordered/shade-valora-four.png",
      ],
    },
    category: "سایه‌بان",
    brand: "والورا",
    colors: [
      { label: "سفید", hex: "#F8F8F8" },
      { label: "آنتراسیت", hex: "#363636" },
      { label: "شنی", hex: "#C8B99A" },
      { label: "سبز کبود", hex: "#7A9E87" },
    ],
  },
  {
    id: 27,
    title: "آتشدان والورا",
    description:
      "آتشدان تنها یک وسیله گرمایشی نیست؛ قلب تپنده دورهمی‌های شماست طراحی مینیمال، کیفیت ممتاز و جلوه‌ای چشمگیر که هر فضای باز را به محیطی لوکس و دعوت‌کننده تبدیل می‌کند.",
    price: 27300000,
    discount: 10,
    features: {
      public: [
        "مناسب برای محوطه ویلا و باغ بزرگ",
        "ضد زنگ در محیط مرطوب و ساحلی",
        "مقاومت بالا در برابر حرارت شدید و شوک حرارتی",
        "طراحی پریمیوم با ورق ۵mm و پتینه دست‌ساز",
      ],
      technical: [
        "فولاد کورتن",
        "چوب و زغال",
        "پتینه طبیعی",
        "80 x 80 cm",
        "58 kg",
        "5mm",
      ],
    },
    images: {
      normal: [
        "/images/products/hearths/hearth-valora-one.png",
        "/images/products/hearths/hearth-valora-two.png",
        "/images/products/hearths/hearth-valora-three.png",
        "/images/products/hearths/hearth-valora-four.png",
      ],
      bordered: [
        "/images/products/hearths/bordered/hearth-valora-one.png",
        "/images/products/hearths/bordered/hearth-valora-two.png",
        "/images/products/hearths/bordered/hearth-valora-three.png",
        "/images/products/hearths/bordered/hearth-valora-four.png",
      ],
    },
    category: "آتشدان",
    brand: "والورا",
    colors: [
      { label: "پتینه طبیعی", hex: "#7D5A3C" },
      { label: "مشکی مات", hex: "#1E1E1E" },
      { label: "گرافیت", hex: "#4A4A4A" },
    ],
  },
  {
    id: 28,
    title: "گلدان والورا",
    description:
      "گلدان تنها محفظه‌ای برای نگهداری گل و گیاه نیست عنصری از زیبایی و طراوت است که به فضا روح می‌بخشد. طراحی مدرن کیفیت ماندگار و جلوه‌ای چشم‌نواز هر محیطی را به فضایی لوکس، دلنشین و سرشار از حس زندگی تبدیل می‌کند.",
    price: 3700000,
    discount: 16,
    features: {
      public: [
        "مناسب برای فضای باز و تراس پنت‌هاوس",
        "ضد باکتری و اکسیداسیون",
        "مقاومت بالا در برابر ضربه و ارتعاش",
        "طراحی لوکس با ترکیب سنگ و رزین",
      ],
      technical: [
        "ترکیب سنگ و رزین",
        "بدون سوخت",
        "رنگ اپوکسی",
        "55 x 55 cm",
        "24 kg",
      ],
    },
    images: {
      normal: [
        "/images/products/pots/pot-valora-one.png",
        "/images/products/pots/pot-valora-two.png",
        "/images/products/pots/pot-valora-three.png",
        "/images/products/pots/pot-valora-four.png",
      ],
      bordered: [
        "/images/products/pots/bordered/pot-valora-one.png",
        "/images/products/pots/bordered/pot-valora-two.png",
        "/images/products/pots/bordered/pot-valora-three.png",
        "/images/products/pots/bordered/pot-valora-four.png",
      ],
    },
    category: "گلدان",
    brand: "والورا",
    colors: [
      { label: "کرم", hex: "#F5F0E8" },
      { label: "آنتراسیت", hex: "#363636" },
      { label: "تراکوتا", hex: "#C1654A" },
      { label: "مسی", hex: "#B87333" },
    ],
  },
  {
    id: 29,
    title: "صندلی استخر والورا",
    description:
      "صندلی و تخت استخری تنها یک وسیله برای استراحت نیست گوشه‌ای از آرامش و لذت در فضای زندگی شماست. طراحی مدرن راحتی بی‌نظیر و کیفیت ماندگار هر کنار استخری را به فضایی لوکس، دلنشین و فراموش‌نشدنی تبدیل می‌کند.",
    price: 14200000,
    features: {
      public: [
        "مناسب برای استخر لوکس و ریزورت",
        "ضد رطوبت و خوردگی آب‌شور",
        "مقاومت بالا در برابر آب و وزن مداوم",
        "طراحی پریمیوم با اسکلت آلومینیوم پودری",
      ],
      technical: [
        "وینیل روتان مصنوعی",
        "بدون سوخت",
        "پوشش پودری آلومینیوم",
        "205 x 80 cm",
        "13 kg",
      ],
    },
    images: {
      normal: [
        "/images/products/chairs/chair-valora-one.png",
        "/images/products/chairs/chair-valora-two.png",
        "/images/products/chairs/chair-valora-three.png",
        "/images/products/chairs/chair-valora-four.png",
      ],
      bordered: [
        "/images/products/chairs/bordered/chair-valora-one.png",
        "/images/products/chairs/bordered/chair-valora-two.png",
        "/images/products/chairs/bordered/chair-valora-three.png",
        "/images/products/chairs/bordered/chair-valora-four.png",
      ],
    },
    category: "صندلی",
    brand: "والورا",
    colors: [
      { label: "سفید", hex: "#F8F8F8" },
      { label: "آنتراسیت", hex: "#363636" },
      { label: "بژ", hex: "#D6C9B3" },
      { label: "خاکستری", hex: "#9E9E9E" },
    ],
  },
  {
    id: 30,
    title: "چراغ والورا",
    description:
      "چراغ تنها یک منبع نور نیست؛ عنصری از زیبایی و آرامش است که به فضا جان می‌بخشد طراحی مدرن، نورپردازی چشم‌نواز و کیفیت ممتاز هر محیطی را به فضایی گرم، لوکس و فراموش‌نشدنی تبدیل می‌کند.",
    price: 7800000,
    discount: 20,
    features: {
      public: [
        "مناسب برای ویلا و محوطه لوکس",
        "ضد خوردگی و پتینه‌ریزی",
        "مقاومت بالا در برابر رطوبت و باران اسیدی",
        "طراحی هنری دست‌ساز با مس خالص",
      ],
      technical: [
        "مس خالص",
        "برق شهری ۲۲۰V",
        "پتینه برنزی دست‌ساز",
        "H: 260 cm",
        "9.4 kg",
        "24W",
      ],
    },
    images: {
      normal: [
        "/images/products/lights/light-valora-one.png",
        "/images/products/lights/light-valora-two.png",
        "/images/products/lights/light-valora-three.png",
        "/images/products/lights/light-valora-four.png",
      ],
      bordered: [
        "/images/products/lights/bordered/light-valora-one.png",
        "/images/products/lights/bordered/light-valora-two.png",
        "/images/products/lights/bordered/light-valora-three.png",
        "/images/products/lights/bordered/light-valora-four.png",
      ],
    },
    category: "چراغ",
    brand: "والورا",
    colors: [
      { label: "پتینه برنزی", hex: "#7A5230" },
      { label: "مس خالص", hex: "#B87333" },
      { label: "مشکی مات", hex: "#1E1E1E" },
    ],
  },
];