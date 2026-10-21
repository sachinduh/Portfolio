/**
 * Get image path with basePath for production
 * Supports Vercel (root /), GitHub Pages (/Portfolio/), and local development.
 */
export const getImgPath = (path: string): string => {
  const envBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (envBasePath) {
    if (path.startsWith(envBasePath)) return path;
    return `${envBasePath}${path}`;
  }

  if (typeof window !== "undefined") {
    const firstSegment = window.location.pathname.split("/")[1] || "";
    if (firstSegment.toLowerCase() === "portfolio" && path.startsWith("/")) {
      return `/${firstSegment}${path}`;
    }
  }

  return path;
};

/**
 * Get data file path with basePath for production
 * Used for fetching JSON data files
 */
export const getDataPath = (path: string): string => {
  const envBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (envBasePath) {
    if (path.startsWith(envBasePath)) return path;
    return `${envBasePath}${path}`;
  }

  if (typeof window !== "undefined") {
    const firstSegment = window.location.pathname.split("/")[1] || "";
    if (firstSegment.toLowerCase() === "portfolio" && path.startsWith("/")) {
      return `/${firstSegment}${path}`;
    }
  }

  return path;
};
