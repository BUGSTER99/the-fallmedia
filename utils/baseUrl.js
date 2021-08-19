const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://the-fallmedia.herokuapp.com";

module.exports = baseUrl;
