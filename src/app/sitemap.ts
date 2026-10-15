import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { PRODUCTS } from "@/lib/products";
import { POSTS } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/nosotros", "/industrias", "/productos", "/catalogo", "/blog", "/contacto"].map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8,
  }));
  const products = PRODUCTS.filter((p) => !p.pending).map((p) => ({ url: `${SITE_URL}/productos/${p.id}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 }));
  const posts = POSTS.map((p) => ({ url: `${SITE_URL}/blog/${p.slug}`, lastModified: new Date(p.date), changeFrequency: "yearly" as const, priority: 0.6 }));
  return [...pages, ...products, ...posts];
}
