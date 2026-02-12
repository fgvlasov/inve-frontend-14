import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  if (!media) return null;

  const url = media?.data?.attributes?.url;
  if (!url || typeof url !== "string") return null;

  return url.startsWith("/") ? getStrapiURL(url) : url;
}
