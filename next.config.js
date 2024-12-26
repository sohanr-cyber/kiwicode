/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['bn', 'en'], // Add the languages you want to support
    defaultLocale: 'bn', // Default language
    localeDetection: false
  },
  images: {
    domains: [
      "cdn-icons-png.flaticon.com",
      "images.pexels.com",
      "www.flaticon.com",
      "upload.wikimedia.org",
      "cdn.jsdelivr.net",
      "img.icons8.com",
      "picsum.photos",
      "img.freepik.com",
    ],
  },
};

module.exports = nextConfig;
