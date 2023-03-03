/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["encrypted-tbn0.gstatic.com", "links.papareact.com"],
  },
  experimental: {
    appDir: true,
  },
};
