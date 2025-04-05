const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/personal-website" : "";

module.exports = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
};
