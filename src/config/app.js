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
    api_endpoint: "",
  },
};

export default config;
