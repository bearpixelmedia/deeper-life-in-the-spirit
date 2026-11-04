export const AMAZON_URL =
  "https://www.amazon.com/Deeper-Life-Spirit-Journey-Intimacy/dp/B0HP1MQR7B";

/** Canonical production origin (apex). */
export const SITE_URL = "https://danielmpage.com";

export const book = {
  title: "Deeper Life in the Spirit",
  subtitle: "A Journey into Intimacy with God through His Word",
  author: "Dr. Daniel Page",
  asin: "B0HP1MQR7B",
  isbn13: "979-8982072603",
  publisher: "Leadership Ministries Inc",
  publicationDate: "October 23, 2026",
  format: "Paperback",
  pages: 752,
  language: "English",
  price: "$29.95",
  // Amazon listing product images (MAIN + BACK).
  coverSrc: "https://m.media-amazon.com/images/I/71oaK84UvHL._SL1499_.jpg",
  coverBackSrc: "https://m.media-amazon.com/images/I/61ecuhyHimL._SL1500_.jpg",
  description: [
    "Moving from Genesis to Revelation, this 365-day devotional takes readers on a journey through the unfolding story of God's Word while highlighting the Holy Spirit's role in teaching, guiding, and transforming the heart.",
    "More than a collection of inspirational thoughts, Deeper Life in the Spirit invites readers to slow down, reflect deeply on Scripture, respond personally to God's truth, and grow in faith for the journey ahead. With clear biblical insight and practical application, this devotional is a faithful companion for anyone longing to know God more intimately, understand His Word more deeply, and walk more fully in the Holy Spirit.",
  ],
  themes: [
    {
      title: "Genesis to Revelation",
      body: "Walk the unfolding story of Scripture across a full year of daily reflection.",
    },
    {
      title: "Life in the Spirit",
      body: "See how the Holy Spirit teaches, guides, and transforms the heart.",
    },
    {
      title: "Intimacy with God",
      body: "Slow down, respond to God's truth, and grow in faith for the journey ahead.",
    },
  ],
  gallery: [
    {
      src: "https://m.media-amazon.com/images/I/71oaK84UvHL._SL1499_.jpg",
      alt: "Front cover of Deeper Life in the Spirit",
      label: "Front cover",
      width: 1000,
      height: 1499,
    },
    {
      src: "https://m.media-amazon.com/images/I/61ecuhyHimL._SL1500_.jpg",
      alt: "Back cover of Deeper Life in the Spirit with description and author bio",
      label: "Back cover",
      width: 1000,
      height: 1500,
    },
  ],
};

/** Condensed from the Amazon product back cover. */
export const author = {
  name: "Dr. Daniel Page",
  role: "Senior Pastor, Crestview Baptist Church",
  // Restored Amazon back-cover author portrait (pre Crestview/red-shirt swap).
  portraitSrc: "/images/author-portrait.jpg",
  portraitSrcSet: "/images/author-portrait-320.jpg 320w, /images/author-portrait.jpg 504w",
  portraitSizes: "(max-width: 720px) 14rem, 22rem",
  portraitWidth: 504,
  portraitHeight: 504,
  portraitWebpSrc: "/images/author-portrait.webp",
  portraitWebpSrcSet: "/images/author-portrait.webp 504w",
  paragraphs: [
    "Dr. Daniel Page is a pastor, preacher, musician, and teacher with a deep love for God's Word and a passion for communicating its timeless truth in ways that speak to today's world. A native of Cherryville, North Carolina, Dan came to faith in Christ at age ten under the ministry of his father, Ken Page, who was also his pastor.",
    "Since beginning church ministry in 1985, Dan has served in worship, youth, children's, and pastoral ministry, including local and international missions with his wife, Christine. Since 2009, he has served as Senior Pastor of Crestview Baptist Church in Canton, North Carolina. Dan and Christine have been married for 37 years and are blessed with 9 children and 15 grandchildren.",
  ],
  sourceLabel: "Amazon product listing (back cover)",
  sourceUrl: AMAZON_URL,
};
