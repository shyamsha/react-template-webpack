const config = {
  env: "production",
  isProd: process.env.NODE_ENV === "production" || false,
  production: {
    api_endpoint: "",
  },
  qa: {
    api_endpoint: "",
  },
  development: {
    api_endpoint: "https://otrackerapi-dev.onpassive.com",
  },
};

export default config;
