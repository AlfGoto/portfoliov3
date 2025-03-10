import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alfredgauthier.com";

  const pages = [
    "", // Home
    "cv.pdf",
    "lowback",
    "sezame",
    "minesweeper",
    "3foto",
    "towalf",
    "experiments-on-3d",
    "some-random-projects",
  ];

  const lastModified = new Date().toISOString();

  return pages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified,
    priority: page === "" ? 1.0 : 0.8,
  }));
}
