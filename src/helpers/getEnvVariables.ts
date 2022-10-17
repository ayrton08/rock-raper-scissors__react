export const getEnvVariables = () => {
  return {
    VITE_API_URL: import.meta.env.VITE_API_URL,
    VITE_API_KEY: import.meta.env.VITE_API_KEY,
    VITE_AUTH_DOMAIN: import.meta.env.VITE_AUTH_DOMAIN,
    VITE_DATA_BASE_URL: import.meta.env.VITE_DATA_BASE_URL,
  };
};

