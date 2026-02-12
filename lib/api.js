import qs from "qs";

// lib/api.ts
const STRAPI_URL = process.env.STRAPI_URL || process.env.NEXT_PUBLIC_STRAPI_URL;

export function getStrapiURL(path = "") {
  if (!STRAPI_URL) {
    throw new Error("STRAPI_URL is not set. Define STRAPI_URL (server) or NEXT_PUBLIC_STRAPI_URL (fallback).");
  }

  // гарантируем корректную склейку
  const base = STRAPI_URL.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject);

  const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ""}`)}`;

  const response = await fetch(requestUrl, mergedOptions);
  // Handle response
  if (!response.ok) {
    const errorText = await response.text();

    console.error(errorText);
    throw new Error(`An error occurred. Please try again.`);
  }

  const contentType = response.headers.get("content-type");

  // if (contentType && contentType.indexOf("application/json") !== -1) {
  //   const json = await response.json();
  //   console.log("DATA", path, json.attributes);
  //   return json;
  // }

  const data = await response.json();

  return data;
}
