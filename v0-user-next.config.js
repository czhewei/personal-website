/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/personal-website" : "",
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

