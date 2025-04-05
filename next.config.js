const isProd = process.env.NODE_ENV === "production";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

module.exports = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
};