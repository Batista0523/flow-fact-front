export function getEnv() {
  const apiUrl =
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_BASE_URL_DEV
      : import.meta.env.VITE_BASE_URL_PROD;
  return apiUrl;
}
