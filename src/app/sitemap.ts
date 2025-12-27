import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://your-domain.com"; // change later

  return [
    { url: `${baseUrl}/`, priority: 1 },
    { url: `${baseUrl}/compress-pdf`, priority: 0.9 },
    { url: `${baseUrl}/merge-pdf`, priority: 0.9 },
    { url: `${baseUrl}/image-to-pdf`, priority: 0.9 },
    { url: `${baseUrl}/pdf-to-png`, priority: 0.9 },
    { url: `${baseUrl}/privacy-policy`, priority: 0.3 },
    { url: `${baseUrl}/terms`, priority: 0.3 },
  ];
}
