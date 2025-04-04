const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  basePath: isProd ? "/personal-website" : "", 
  assetPrefix: isProd ? "/personal-website" : ""
};