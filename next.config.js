/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn-icons-png.flaticon.com",
      "images.pexels.com",
      "www.flaticon.com",
      "upload.wikimedia.org",
      "cdn.jsdelivr.net",
      "img.icons8.com",
    ],
  },
};

module.exports = nextConfig;
