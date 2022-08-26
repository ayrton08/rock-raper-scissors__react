export const getEnvVariables = () => {
  return {
    VITE_API_URL: import.meta.env.VITE_API_URL,
    API_KEY: import.meta.env.API_KEY,
    AUTH_DOMAIN: import.meta.env.AUTH_DOMAIN,
    DATA_BASE_URL: import.meta.env.DATA_BASE_URL,
  };
};
