// ============================================================
//  Ekhane shob lekha, photo, gaan, rong ar video bodlano jabe.
//  Sudhu "..." er bhitorer lekha bodlaben. Comma ar quote muchben na.
//  File er nam hobe ekdom ekii (boro/choto hater lekha milte hobe: 1.jpg, 1.JPG na)
// ============================================================
window.CONFIG = {
  friendName: "Tanisha",
  from: "TINA & AKIB ",
  introHint: "✨ Tap the card ✨",

  title: "শুভ জন্মদিন, তানিশা! 🎉",
  subtitle: "চল দেখি, আজকের দিনে তোর জন্য কী কী লুকানো আছে 🎈",

  // Gaan: assets/music/ e mp3 rakhun. Gaan na chaile "" likhe din.
  music: { src: "assets/music/song.mp3", label: "🎵 অফ/অন" },

  colors: { bg1: "#ffd9ec", bg2: "#e8dcff", bg3: "#cfeaff", accent: "#ff7eb3", card: "#fffaf5", ink: "#5a3d5c", rose: "#d6457f" },

  traitsTitle: "তানিশা মানেই… ✨",
  traits: ["গরু 🐮", "বলদ 🙊", "সাহসী 🔥", "বন্ধুত্ব 🤝", "কিপ্টা 🤐 (খাওয়াইলে বড়লোক)"],

  wishHint: "Tap a balloon🎈",
  wishCounter: "wishes found",
  wishes: [
    "আরও বুড়ি হওয়ার শুভেচ্ছা 💛",
    "A friendship that never fades 😊",
    "এই বছর হোক <b>তোর স্বপ্ন পূরণের</b> বছর ✨",
    "<b>এমন বন্ধুত্ব থাকুক, যেখানে কোনো মিথ্যা থাকবে না</b> 🙏",
    "আকিব আর টিনা বলছে: <b>শুভ জন্মদিন, তানিশা!</b> 🎂"
  ],

  momentsTitle: "Our Moments 📸",
  moments: [
    { src: "assets/photos/1.jpg?v=2" },
    { src: "assets/photos/2.jpg?v=2" },
    { src: "assets/videos/1.mp4" },
    { src: "assets/photos/3.jpg?v=2" },
    { src: "assets/photos/4.jpg?v=2" },
    { src: "assets/videos/2.mp4" },
    { src: "assets/photos/5.jpg?v=2" }
  ],

 letterButton: "💌 Tanisha's letter",
    letterOpenHint: "Tap to open the letter",
    letterSkip: "Skip ⏩",
    letterBack: "← Go back",
    letter: [
    "Prio Tanisha,",
    "আজ তোর দিন। তাই আমি আর টিনা বসে ভাবলাম, তোকে কী বলে wish করলে সেটা সত্যিই তোর মতো হবে। সবচেয়ে বড় কথা হলো, এই আয়োজনটা করলাম তোর জন্য। তোর কেমন লাগলো, আমাদের বলিস।",
    "এই নতুন বছরে তোর সব স্বপ্ন পূরণ হোক, সব ইচ্ছা ছুঁয়ে দেখ। যতই ব্যস্ত হোস, আমাদের পাশে থাকিস, আমরাও সবসময় তোর পাশে থাকব।",
    "এখন বল, এই বছর কী কী ট্রিট পাব? তুই তো একা না, হাসবেন্ডও আছে। তার মানে একটা বিগেস্ট ট্রিট মাস্ট চাই! আমরা দুজনই জানি না, একদম বিশাল ট্রিট মাস্ট লাগবে 🙊✨",
    "আবারও বলছি, শুভ জন্মদিন! 🎂"
  ],
  sign: "— তোর টিনা ও আকিব",

  againButton: "🎈 আবার বেলুন ওড়াও",
  footer: "আকিব ও টিনার ভালোবাসায় তৈরি 💛",

  // ===== English version: "English" button e tap korle ei lekha gulo dekhabe =====
  // Je gulo ekhane nei (jemon colors, music src), shegulo upor er ta theke nebe.
  en: {
    friendName: "Tanisha",
    from: "Tina & Akib",
    introHint: "✨ Tap the card ✨",
    title: "Happy Birthday, Tanisha! 🎉",
    subtitle: "Come on, let's see what we've hidden for you today 🎈",
    music: { src: "assets/music/song.mp3", label: "🎵 off/on" },
    traitsTitle: "Tanisha means… ✨",
    traits: ["গরু 🐮", "বলদ 🙊", "সাহসী 🔥", "বন্ধুত্ব 🤝", "কিপ্টা 🤐 (খাওয়াইলে বড়লোক)"],
    wishHint: "Tap a balloon 🎈",
    wishCounter: "wishes found",
    wishes: [
      "Wishing you many more years of growing old 💛",
      "A friendship that never fades 😊",
      "May this year be the year <b>your dreams come true</b> ✨",
      "<b>May our friendship always be one without lies</b> 🙏",
      "Akib and Tina say: <b>Happy Birthday, Tanisha!</b> 🎂"
    ],
    momentsTitle: "Our Moments 📸",
    moments: [
    { src: "assets/photos/1.jpg?v=2" },
    { src: "assets/photos/2.jpg?v=2" },
    { src: "assets/videos/1.mp4" },
    { src: "assets/photos/3.jpg?v=2" },
    { src: "assets/photos/4.jpg?v=2" },
    { src: "assets/videos/2.mp4" },
    { src: "assets/photos/5.jpg?v=2" }
  ],
    letterButton: "💌 Tanisha's letter",
    letterOpenHint: "Tap to open the letter",
    letterSkip: "Skip ⏩",
    letterBack: "← Go back",
    letter: [
      "Dear Tanisha,",
      "Today is your day. So Tina and I sat down and wondered what we could say that would truly sound like you. The biggest thing is this: we put this together just for you. Tell us how it felt.",
      "In this new year, may all your dreams come true and may you reach every wish. No matter how busy you get, stay by our side, and we will always be by yours.",
      "Now tell us, what treats are we getting this year? And you are not alone, your husband is there too, so we definitely need one BIG treat! Both of us know: it has to be absolutely huge 🙊✨",
      "Once again, Happy Birthday! 🎂"
    ],
    sign: "— Your Tina & Akib",
    againButton: "🎈 Fly the balloons again",
    footer: "Made with 💛 by Akib & Tina"
  }
};
