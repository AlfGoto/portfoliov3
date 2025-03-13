import projects from "@/data/projects";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alfredgauthier.com";

  const pages = [
    "", // Home
    "cv.pdf",
    "hero-bg.jpg",
    "hero-bg1.jpg",
    "pp.jpg",
    ...projects.map((p) => p.name.toLowerCase().replace(/\s+/g, "-")),

    ...projects.map((p) => {
      const imgsAndVideos: string[] = [];
      p.images.forEach((i) => imgsAndVideos.push(`imgs/${p.name}/${i}`));
      if (p.videos)
        p.videos.forEach((i) => imgsAndVideos.push(`imgs/${p.name}/${i}`));
      return imgsAndVideos;
    }).flat(),
  ];

  const lastModified = new Date().toISOString();

  return pages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified,
    priority: page === "" ? 1.0 : 0.8,
  }));
}
