/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://www.zenxgym.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "daily",
  priority: 0.8,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" }, // tüm botlara izin
    ],
  },
};

module.exports = config;
