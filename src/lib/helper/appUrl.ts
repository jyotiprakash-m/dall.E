export function getAppUrl(path: string) {
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL ||
    process.env.VERCEL_URL ||
    "http://localhost:3000";
  return `${
    baseUrl.startsWith("http") ? baseUrl : `https://${baseUrl}`
  }/${path}`;
}
