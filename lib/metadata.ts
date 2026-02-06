import type { Metadata } from "next";
import { fetchAPI } from "./api";
import { getStrapiMedia } from "./media";

export interface PageSeo {
  metaTitle?: string | null;
  metaDescription?: string | null;
  shareImage?: unknown;
}

export interface GlobalAttributes {
  defaultSeo?: {
    metaTitle?: string | null;
    metaDescription?: string | null;
    shareImage?: unknown;
  } | null;
  siteName?: string | null;
}

const DEFAULT_SITE_NAME = "Invert";

/**
 * Загружает Global (Single type) из Strapi для defaultSeo и siteName.
 * Кэшируется Next.js fetch.
 */
export async function getGlobal(locale = "ru") {
  const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      defaultSeo: { populate: "*" },
    },
    locale,
  });
  return globalRes?.data ?? null;
}

/**
 * Собирает Next.js Metadata из SEO страницы и глобального defaultSeo.
 * Если у страницы есть своё Seo (Strapi Shared section) — оно приоритетнее defaultSeo.
 */
export function buildMetadata(
  pageSeo: PageSeo | null | undefined,
  globalAttributes: GlobalAttributes | null | undefined
): Metadata {
  const defaultSeo = globalAttributes?.defaultSeo ?? null;
  const siteName = globalAttributes?.siteName ?? DEFAULT_SITE_NAME;

  const merged = {
    metaTitle: pageSeo?.metaTitle ?? defaultSeo?.metaTitle ?? null,
    metaDescription: pageSeo?.metaDescription ?? defaultSeo?.metaDescription ?? null,
    shareImage: pageSeo?.shareImage ?? defaultSeo?.shareImage ?? null,
  };

  const title =
    merged.metaTitle ?
      `${merged.metaTitle} | ${siteName}`
    : `${DEFAULT_SITE_NAME}`;

  const description = merged.metaDescription ?? "";

  let imageUrl: string | undefined;
  try {
    if (merged.shareImage && typeof merged.shareImage === "object" && "data" in (merged.shareImage as object)) {
      imageUrl = getStrapiMedia(merged.shareImage as { data: { attributes: { url: string } } });
    }
  } catch {
    imageUrl = undefined;
  }

  const metadata: Metadata = {
    title,
    description,
    openGraph: {
      title,
      description: description || undefined,
      ...(imageUrl && { images: [imageUrl] }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: description || undefined,
      ...(imageUrl && { images: [imageUrl] }),
    },
  };

  return metadata;
}
