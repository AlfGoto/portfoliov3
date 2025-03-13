import projects from "@/data/projects";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alfredgauthier.com";

  const pages = [
    "", // Home
    "cv.pdf",
    ...projects.map((p) => p.name.toLowerCase().replace(/\s+/g, "-")),
  ];

  const lastModified = new Date().toISOString();

  return pages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified,
    priority: page === "" ? 1.0 : 0.8,
  }));
}
