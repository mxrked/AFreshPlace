const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,

  //! This added clean urls and eliminates the .html extension aswell as linking
  //! CSS and JS with the trailingSlash
  assetPrefix: isProd
    ? "https://effulgent-marshmallow-23dfdf.netlify.app/"
    : "",
  trailingSlash: true,
};
