export type LanguageCode = "en" | "fa";

const recipes = {
  abgoosht: {
    name: {
      en: "Abgoosht",
      fa: "آبگوشت",
    },
    ingredients: {
      en: [
        "Lamb",
        "Chickpeas",
        "White beans",
        "Potatoes",
        "Onion",
        "Tomato paste",
        "Dried lime",
        "Spices",
      ],
      fa: [
        "گوشت بره",
        "نخود",
        "لوبیا سفید",
        "سیب زمینی",
        "پیاز",
        "رب گوجه فرنگی",
        "لیمو عمانی",
        "ادویه جات",
      ],
    },
    instructions: {
      en: [
        "Cook lamb with onions and spices.",
        "Add beans, chickpeas, and potatoes.",
        "Simmer until tender.",
        "Serve the broth separately and mash the solids.",
      ],
      fa: [
        "گوشت را با پیاز و ادویه جات بپزید.",
        "لوبیا، نخود و سیب زمینی را اضافه کنید.",
        "بگذارید تا کاملاً بپزد.",
        "آب گوشت را جدا کنید و مواد جامد را بکوبید.",
      ],
    },
  },
  "adasi-soup": {
    name: {
      en: "Adasi Soup",
      fa: "سوپ عدسی",
    },
    ingredients: {
      en: ["Lentils", "Onion", "Potatoes", "Tomato paste", "Spices"],
      fa: ["عدس", "پیاز", "سیب زمینی", "رب گوجه فرنگی", "ادویه جات"],
    },
    instructions: {
      en: [
        "Sauté onions until golden.",
        "Add lentils, potatoes, and spices.",
        "Add water and simmer until lentils are soft.",
        "Add tomato paste and cook for a few more minutes.",
        "Serve hot with bread.",
      ],
      fa: [
        "پیاز را تفت دهید تا طلایی شود.",
        "عدس، سیب زمینی و ادویه جات را اضافه کنید.",
        "آب اضافه کنید و بگذارید بپزد تا عدس نرم شود.",
        "رب گوجه فرنگی را اضافه کنید و چند دقیقه دیگر بپزید.",
        "با نان گرم سرو کنید.",
      ],
    },
  },
  "ash-reshteh": {
    name: {
      en: "Ash Reshteh",
      fa: "آش رشته",
    },
    ingredients: {
      en: ["Noodles", "Beans", "Herbs", "Onion", "Garlic", "Spices"],
      fa: ["رشته", "لوبیا", "سبزیجات", "پیاز", "سیر", "ادویه جات"],
    },
    instructions: {
      en: [
        "Cook beans and herbs.",
        "Add noodles and fried onions.",
        "Simmer until noodles are tender.",
        "Serve hot with a sprinkle of sumac and a dollop of yogurt.",
      ],
      fa: [
        "لوبیا و سبزیجات را بپزید.",
        "رشته و پیاز سرخ شده را اضافه کنید.",
        "بگذارید تا رشته ها نرم شوند.",
        "با برنج سرو کنید.",
      ],
    },
  },
  "baghali-polo": {
    name: {
      en: "Baghali Polo",
      fa: "باقالی پلو",
    },
    ingredients: {
      en: ["Rice", "Fava beans", "Dill", "Lamb", "Saffron", "Spices"],
      fa: ["برنج", "باقالی", "شوید", "گوشت بره", "زعفران", "ادویه جات"],
    },
    instructions: {
      en: [
        "Cook rice with fava beans and dill.",
        "Prepare lamb separately with spices.",
        "Layer the rice and lamb, then steam together.",
        "Serve with saffron-infused rice on top.",
      ],
      fa: [
        "برنج را با باقالی و شوید بپزید.",
        "گوشت بره را جداگانه با ادویه آماده کنید.",
        "برنج و گوشت را لایه بندی کرده و با هم دم کنید.",
        "با برنج زعفرانی روی آن سرو کنید.",
      ],
    },
  },
  "borani-bademjan": {
    name: {
      en: "Borani Bademjan",
      fa: "بورانی بادمجان",
    },
    ingredients: {
      en: ["Eggplant", "Yogurt", "Garlic", "Onion", "Mint", "Spices"],
      fa: ["بادمجان", "ماست", "سیر", "پیاز", "نعناع", "ادویه جات"],
    },
    instructions: {
      en: [
        "Roast eggplants until soft and peel them.",
        "Sauté onions and garlic.",
        "Mix mashed eggplant with yogurt, onions, and spices.",
        "Garnish with dried mint and serve chilled.",
      ],
      fa: [
        "بادمجان ها را کباب کنید تا نرم شوند و پوست آنها را جدا کنید.",
        "پیاز و سیر را تفت دهید.",
        "بادمجان له شده را با ماست، پیاز و ادویه جات مخلوط کنید.",
        "با نعناع خشک تزئین کنید و سرد سرو کنید.",
      ],
    },
  },
  dolmeh: {
    name: {
      en: "Dolmeh",
      fa: "دلمه",
    },
    ingredients: {
      en: ["Grape leaves", "Rice", "Ground meat", "Herbs", "Onion", "Spices"],
      fa: [
        "برگ مو",
        "برنج",
        "گوشت چرخ کرده",
        "سبزیجات معطر",
        "پیاز",
        "ادویه جات",
      ],
    },
    instructions: {
      en: [
        "Mix rice, ground meat, herbs, and spices.",
        "Stuff grape leaves with the mixture.",
        "Arrange in a pot and cook until tender.",
        "Serve hot with yogurt or lemon juice.",
      ],
      fa: [
        "برنج، گوشت چرخ کرده، سبزیجات و ادویه را مخلوط کنید.",
        "مخلوط را داخل برگ مو بپیچید.",
        "در قابلمه بچینید و بپزید تا نرم شود.",
        "با ماست یا آب لیمو سرو کنید.",
      ],
    },
  },
  "ghormeh-sabzi": {
    name: {
      en: "Ghormeh Sabzi",
      fa: "قرمه سبزی",
    },
    ingredients: {
      en: ["Herbs", "Kidney beans", "Lamb", "Dried lime", "Onion", "Spices"],
      fa: [
        "سبزیجات",
        "لوبیا قرمز",
        "گوشت بره",
        "لیمو عمانی",
        "پیاز",
        "ادویه جات",
      ],
    },
    instructions: {
      en: [
        "Fry finely chopped herbs and onions until fragrant.",
        "Add lamb pieces and brown on all sides.",
        "Add kidney beans, dried lime, and spices.",
        "Cover with water and simmer on low heat for several hours until the meat is tender and the flavors are well combined.",
        "Adjust seasoning to taste and serve with rice.",
      ],
      fa: [
        "سبزیجات و پیاز را سرخ کنید.",
        "گوشت، لوبیا، لیمو عمانی و ادویه جات را اضافه کنید.",
        "بگذارید تا گوشت نرم شود.",
        "با برنج سرو کنید.",
      ],
    },
  },
  "joojeh-kabab": {
    name: {
      en: "Joojeh Kabab",
      fa: "جوجه کباب",
    },
    ingredients: {
      en: ["Chicken", "Yogurt", "Saffron", "Lemon juice", "Onion", "Spices"],
      fa: ["مرغ", "ماست", "زعفران", "آب لیمو", "پیاز", "ادویه جات"],
    },
    instructions: {
      en: [
        "Marinate chicken in yogurt, saffron, lemon juice, and spices.",
        "Thread chicken pieces onto skewers.",
        "Grill until golden and cooked through.",
        "Serve with rice and grilled tomatoes.",
      ],
      fa: [
        "مرغ را در ماست، زعفران، آب لیمو و ادویه جات مارینه کنید.",
        "تکه های مرغ ا به سیخ بکشید.",
        "روی گریل بپزید تا طلایی و پخته شود.",
        "با برنج و گوجه فرنگی کبابی سرو کنید.",
      ],
    },
  },
  kabab: {
    name: {
      en: "Kebab",
      fa: "کباب",
    },
    ingredients: {
      en: ["Ground meat", "Onion", "Spices"],
      fa: ["گوشت چرخ کرده", "پیاز", "ادویه جات"],
    },
    instructions: {
      en: [
        "Mix ground meat with grated onion and spices.",
        "Shape onto skewers and grill until cooked through.",
        "Serve hot with rice and your favorite sides.",
      ],
      fa: [
        "گوشت چرخ کرده را با پیاز رنده شده و ادویه جات مخلوط کنید.",
        "به سیخ بکشید و کباب کنید.",
        "با برنج سرو کنید.",
      ],
    },
  },
  "kashk-e-bademjan": {
    name: {
      en: "Kashk-e Bademjan",
      fa: "کشک بادمجان",
    },
    ingredients: {
      en: ["Eggplant", "Kashk (whey)", "Onion", "Garlic", "Mint", "Walnuts"],
      fa: ["بادمجان", "کشک", "پیاز", "سیر", "نعناع", "گردو"],
    },
    instructions: {
      en: [
        "Fry eggplants until soft and golden.",
        "Sauté onions and garlic.",
        "Mash eggplants and mix with onions and kashk.",
        "Garnish with fried mint and crushed walnuts.",
      ],
      fa: [
        "بادمجان ها را سرخ کنید تا نرم و طلایی شوند.",
        "پیاز و سیر را تفت دهید.",
        "بادمجان ها را له کنید و با پیاز و کشک مخلوط کنید.",
        "با نعناع سرخ شده و گردوی خرد شده تزئین کنید.",
      ],
    },
  },
  "khoresh-e-bademjan": {
    name: {
      en: "Khoresht-e Bademjan",
      fa: "خورشت بادمجان",
    },
    ingredients: {
      en: ["Eggplant", "Lamb", "Tomatoes", "Onion", "Spices"],
      fa: ["بادمجان", "گوشت بره", "گوجه فرنگی", "پیاز", "ادویه جات"],
    },
    instructions: {
      en: [
        "Fry eggplants until golden.",
        "Sauté onions and lamb until browned.",
        "Add tomatoes and spices, simmer until tender.",
      ],
      fa: [
        "بادمجان‌ها را سرخ کنید تا طلایی شوند.",
        "پیاز و گوشت را تفت دهید تا قهوه‌ای شوند.",
        "گوجه فرنگی و ادویه جات را اضافه کنید و بگذارید بپزد.",
      ],
    },
  },
  "khoresht-e-fesenjan": {
    name: {
      en: "Khoresh-e-Fesenjan",
      fa: "خورشت فسنجان",
    },
    ingredients: {
      en: ["Pomegranate paste", "Walnuts", "Chicken", "Onion", "Spices"],
      fa: ["رب انار", "گردو", "مرغ", "پیاز", "ادویه جات"],
    },
    instructions: {
      en: [
        "Cook chicken with onions and spices until browned.",
        "Add ground walnuts and pomegranate paste.",
        "Simmer on low heat, stirring occasionally, until the sauce thickens and the chicken is cooked through.",
        "Adjust seasoning to taste and serve with rice.",
      ],
      fa: [
        "مرغ را با پیاز و ادویه جات بپزید.",
        "گردوی آسیاب شده و رب انار را اضافه کنید.",
        "بگذارید تا غلیظ شود.",
        "با برنج سرو کنید.",
      ],
    },
  },
  kotlet: {
    name: {
      en: "Kotlet",
      fa: "کتلت",
    },
    ingredients: {
      en: ["Ground meat", "Potatoes", "Onion", "Eggs", "Breadcrumbs", "Spices"],
      fa: [
        "گوشت چرخ کرده",
        "سیب زمینی",
        "پیاز",
        "تخم مرغ",
        "آرد سوخاری",
        "ادویه جات",
      ],
    },
    instructions: {
      en: [
        "Mix ground meat, grated potatoes, grated onion, eggs, breadcrumbs, and spices.",
        "Shape into patties.",
        "Fry in oil until golden brown on both sides.",
        "Serve hot with bread or rice.",
      ],
      fa: [
        "گوشت چرخ کرده، سیب زمینی رنده شده، پیاز رنده شده، تخم مرغ، آرد سوخاری و ادویه جات را مخلوط کنید.",
        "به شکل کتلت درآورید.",
        "در روغن سرخ کنید تا هر دو طرف طلایی شود.",
        "با نان یا برنج سرو کنید.",
      ],
    },
  },
  "salad-e-olovieh": {
    name: {
      en: "Olivier Salad",
      fa: "سالاد الویه",
    },
    ingredients: {
      en: [
        "Chicken",
        "Potatoes",
        "Eggs",
        "Pickles",
        "Peas",
        "Mayonnaise",
        "Spices",
      ],
      fa: [
        "مرغ",
        "سیب زمینی",
        "تخم مرغ",
        "خیارشور",
        "نخود فرنگی",
        "مایونز",
        "ادویه جات",
      ],
    },
    instructions: {
      en: [
        "Boil and dice chicken, potatoes, and eggs.",
        "Chop pickles finely.",
        "Mix all ingredients with peas and mayonnaise.",
        "Season to taste and chill before serving.",
      ],
      fa: [
        "مرغ، سیب زمینی و تخم مرغ را بپزید و خرد کنید.",
        "خیارشور را ریز خرد کنید.",
        "همه مواد را با نخود فرنگی و مایونز مخلوط کنید.",
        "به میزان دلخواه نمک و فلفل بزنید و قبل از سرو در یخچال نگهداری کنید.",
      ],
    },
  },
  "khoresht-e-gheymeh": {
    name: {
      en: "Khoresht-e Gheymeh",
      fa: "خورشت قیمه",
    },
    ingredients: {
      en: ["Lamb", "Split peas", "Potatoes", "Onion", "Spices"],
      fa: ["گوشت بره", "لپه", "سیب‌زمینی", "پیاز", "ادویه جات"],
    },
    instructions: {
      en: [
        "Fry onions until golden.",
        "Add lamb and brown.",
        "Add split peas and water, simmer until tender.",
        "Top with fried potatoes.",
      ],
      fa: [
        "پیاز را سرخ کنید تا طلایی شود.",
        "گوشت را اضافه کنید و سرخ کنید.",
        "لپه و آب را اضافه کنید و بگذارید بپزد.",
        "با سیب‌زمینی سرخ شده تزئین کنید.",
      ],
    },
  },
  "khoresht-e-karafs": {
    name: {
      en: "Khoresht-e Karafs",
      fa: "خورشت کرفس",
    },
    ingredients: {
      en: ["Celery", "Lamb", "Onion", "Lemon juice", "Spices"],
      fa: ["کرفس", "گوشت بره", "پیاز", "آب لیمو", "ادویه جات"],
    },
    instructions: {
      en: [
        "Fry onions until golden.",
        "Add lamb and brown.",
        "Add chopped celery and lemon juice, simmer until tender.",
      ],
      fa: [
        "پیاز را سرخ کنید تا طلایی شود.",
        "گوشت را اضافه کنید و سرخ کنید.",
        "کرفس خرد شده و آب لیمو را اضافه کنید و بگذارید بپزد.",
      ],
    },
  },
  "khoresht-e-morgh": {
    name: {
      en: "Khoresht-e Morgh",
      fa: "خورشت مرغ",
    },
    ingredients: {
      en: ["Chicken", "Tomatoes", "Onion", "Turmeric", "Spices"],
      fa: ["مرغ", "گوجه‌فرنگی", "پیاز", "زردچوبه", "ادویه جات"],
    },
    instructions: {
      en: [
        "Fry onions until golden.",
        "Add chicken and brown.",
        "Add tomatoes and spices, simmer until chicken is cooked through.",
      ],
      fa: [
        "پیاز را سرخ کنید تا طلایی شود.",
        "مرغ را اضافه کنید و سرخ کنید.",
        "گوجه‌فرنگی و ادویه جات را اضافه کنید و بگذارید بپزد.",
      ],
    },
  },
  "kuku-sabzi": {
    name: {
      en: "Kuku Sabzi",
      fa: "کوکو سبزی",
    },
    ingredients: {
      en: ["Eggs", "Mixed herbs", "Walnuts", "Barberries", "Spices"],
      fa: ["تخم مرغ", "سبزیجات مخلوط", "گردو", "زرشک", "ادویه جات"],
    },
    instructions: {
      en: [
        "Mix chopped herbs with beaten eggs.",
        "Add chopped walnuts, barberries, and spices.",
        "Fry in a pan until golden on both sides.",
        "Serve hot or cold as a side dish or appetizer.",
      ],
      fa: [
        "سبزیجات خرد شده را با تخم مرغ زده شده مخلوط کنید.",
        "گردوی خرد شده، زرشک و ادویه جات را اضافه کنید.",
        "در تابه سرخ کنید تا هر دو طرف طلایی شود.",
        "به صورت گرم یا سرد به عنوان غذای جانبی یا پیش غذا سرو کنید.",
      ],
    },
  },
  "loobia-polo": {
    name: {
      en: "Loobia Polo",
      fa: "لوبیا پلو",
    },
    ingredients: {
      en: ["Rice", "Green beans", "Ground meat", "Tomato paste", "Spices"],
      fa: ["برنج", "لوبیا سبز", "گوشت چرخ کرده", "رب گوجه فرنگی", "ادویه جات"],
    },
    instructions: {
      en: [
        "Cook rice partially and set aside.",
        "Sauté meat with onions and spices.",
        "Add green beans and tomato paste, cook until tender.",
        "Layer rice and meat mixture, then steam together.",
      ],
      fa: [
        "برنج را نیم پز کنید و کنار بگذارید.",
        "گوشت را با پیاز و ادویه جات تفت دهید.",
        "لوبیا سبز و رب گوجه فرنگی را اضافه کنید و بپزید تا نرم شود.",
        "برنج و مخلوط گوشت را لایه بندی کنید و با هم دم کنید.",
      ],
    },
  },
  "mirza-ghasemi": {
    name: {
      en: "Mirza Ghasemi",
      fa: "میرزا ق��سمی",
    },
    ingredients: {
      en: ["Eggplant", "Tomatoes", "Garlic", "Eggs", "Turmeric", "Oil"],
      fa: ["بادمجان", "گوجه فرنگی", "سیر", "تخم مرغ", "زردچوبه", "روغن"],
    },
    instructions: {
      en: [
        "Grill eggplants until skin is charred, then peel and mash.",
        "Sauté garlic and add mashed eggplant.",
        "Add tomatoes and turmeric, cook until thickened.",
        "Add beaten eggs and stir until set.",
        "Serve hot with bread.",
      ],
      fa: [
        "بادمجان را کباب کنید، پوست آن را جدا کرده و له کنید.",
        "سیر را تفت دهید و بادمجان له شده را اضافه کنید.",
        "گوجه فرنگی و زردچوبه را اضافه کرده و بپزید تا غلیظ شود.",
        "تخم مرغ زده شده را اضافه کرده و هم بزنید تا بسته شود.",
        "با نان گرم سرو کنید.",
      ],
    },
  },
  "salad-shirazi": {
    name: {
      en: "Salad Shirazi",
      fa: "سالاد شیرازی",
    },
    ingredients: {
      en: ["Cucumber", "Tomatoes", "Onion", "Lime juice", "Olive oil", "Mint"],
      fa: ["خیار", "گوجه فرنگی", "پیاز", "آب لیمو", "روغن زیتون", "نعناع"],
    },
    instructions: {
      en: [
        "Dice cucumber, tomatoes, and onion finely.",
        "Mix vegetables with lime juice and olive oil.",
        "Add dried mint and salt to taste.",
        "Chill before serving.",
      ],
      fa: [
        "خیار، گوجه فرنگی و پیاز را ریز خرد کنید.",
        "سبزیجات را با آب لیمو و روغن زیتون مخلوط کنید.",
        "نعناع خشک و نمک را به میزان دلخواه اضافه کنید.",
        "قبل از سرو در یخچال خنک کنید.",
      ],
    },
  },
  "shirin-polow": {
    name: {
      en: "Shirin Polow",
      fa: "شیرین پلو",
    },
    ingredients: {
      en: ["Rice", "Sugar", "Saffron", "Almonds", "Pistachios", "Spices"],
      fa: ["برنج", "شکر", "زعفران", "بادام", "پسته", "ادویه جات"],
    },
    instructions: {
      en: [
        "Cook rice and set aside.",
        "Mix sugar, saffron, and spices.",
        "Layer rice with the mixture and top with nuts.",
      ],
      fa: [
        "برنج را بپزید و کنار بگذارید.",
        "شکر، زعفران و ادویه جات را مخلوط کنید.",
        "برنج را با این مخلوط لایه بندی کنید و با پسته و بادام تزئین کنید.",
      ],
    },
  },
  tahchin: {
    name: {
      en: "Tahchin",
      fa: "ته چین",
    },
    ingredients: {
      en: ["Rice", "Yogurt", "Saffron", "Chicken", "Eggs", "Spices"],
      fa: ["برنج", "ماست", "زعفران", "مرغ", "تخم مرغ", "ادویه جات"],
    },
    instructions: {
      en: [
        "Mix cooked rice with yogurt, saffron, and beaten eggs.",
        "Layer the rice mixture with cooked chicken.",
        "Bake until golden and serve hot.",
      ],
      fa: [
        "برنج را با ماست، زعفران و تخم مرغ مخلوط کنید.",
        "با مرغ پخته شده لایه بندی کنید.",
        "بپزید تا طلایی شود.",
        "با برنج سرو کنید.",
      ],
    },
  },
  tahdig: {
    name: {
      en: "Tahdig",
      fa: "ته دیگ",
    },
    ingredients: {
      en: ["Rice", "Oil or butter", "Yogurt", "Saffron", "Bread (optional)"],
      fa: ["برنج", "روغن یا کره", "ماست", "زعفران", "نان (اختیاری)"],
    },
    instructions: {
      en: [
        "Mix some cooked rice with yogurt and saffron.",
        "Heat oil or butter in a pot.",
        "Spread the rice mixture evenly on the bottom of the pot.",
        "Layer the remaining rice on top and cook until crispy.",
        "Flip onto a plate to serve, crispy side up.",
      ],
      fa: [
        "مقداری برنج پخته را با ماست و زعفران مخلوط کنید.",
        "روغن یا کره را در قابلمه گرم کنید.",
        "مخلوط برنج را به طور یکنواخت در کف قابلمه پهن کنید.",
        "بقیه برنج را روی آن بریزید و بپزید تا ترد شود.",
        "برای سرو کردن، در بشقاب برگردانید تا سمت ترد بالا باشد.",
      ],
    },
  },
  "zereshk-polo": {
    name: {
      en: "Zereshk Polo",
      fa: "زرشک پلو",
    },
    ingredients: {
      en: ["Rice", "Barberries", "Saffron", "Sugar", "Butter", "Spices"],
      fa: ["برنج", "زرشک", "زعفران", "شکر", "کره", "ادویه جات"],
    },
    instructions: {
      en: [
        "Cook rice and set aside.",
        "Sauté barberries in butter with sugar and spices.",
        "Mix barberries with rice and serve.",
      ],
      fa: [
        "برنج را بپزید و کنار بگذارید.",
        "زرشک را با کره و شکر و ادویه جات تفت دهید.",
        "زرشک را با برنج مخلوط کرده و سرو کنید.",
      ],
    },
  },
  "zeytoon-parvardeh": {
    name: {
      en: "Zeytoon Parvardeh",
      fa: "زیتون پرورده",
    },
    ingredients: {
      en: [
        "Green olives",
        "Walnuts",
        "Pomegranate molasses",
        "Garlic",
        "Herbs",
        "Spices",
      ],
      fa: ["زیتون سبز", "گردو", "رب انار", "سیر", "سبزیجات معطر", "ادویه جات"],
    },
    instructions: {
      en: [
        "Chop walnuts and herbs finely.",
        "Mix with crushed garlic, pomegranate molasses, and spices.",
        "Add pitted olives and stir gently.",
        "Refrigerate for a few hours before serving.",
      ],
      fa: [
        "گردو و سبزیجات معطر را ریز خرد کنید.",
        "با سیر له شده، رب انار و ادویه جات مخلوط کنید.",
        "زیتون های بدون هسته را اضافه کرده و به آرامی هم بزنید.",
        "قبل از سرو چند ساعت در یخچال نگهداری کنید.",
      ],
    },
  },
};

const translations = {
  en: {
    searchPlaceholder: "Search for recipes...",
    findRecipes: "Find Recipes",
    topRecipes: Object.keys(recipes).map((key) => ({
      name: recipes[key as keyof typeof recipes].name.en,
      link: `/en/recipes/${key}`,
    })),
    ingredients: "Ingredients",
    instructions: "Instructions",
    backToHome: "Back to Home",
    allRecipes: "All Recipes",
    recipes,
  },
  fa: {
    searchPlaceholder: "جستجوی دستور پخت...",
    findRecipes: "یافتن دستور پخت",
    topRecipes: Object.keys(recipes).map((key) => ({
      name: recipes[key as keyof typeof recipes].name.fa,
      link: `/fa/recipes/${key}`,
    })),
    ingredients: "مواد لازم",
    instructions: "دستور پخت",
    backToHome: "بازگشت به صفحه اصلی",
    allRecipes: "همه دستور پخت‌ها",
    recipes,
  },
};

export function getTranslations(lang: LanguageCode) {
  return translations[lang];
}
