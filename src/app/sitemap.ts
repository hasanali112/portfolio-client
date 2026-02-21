import { MetadataRoute } from "next";
import { industries } from "@/data/industries";
import { locations } from "@/data/locations";

const baseUrl = "https://mdhasanalikhan.vercel.app";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // ─── Static routes ────────────────────────────────────────────────────────
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hire-me`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // pSEO hub pages
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hire`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // ─── pSEO: Industry spoke pages ───────────────────────────────────────────
  const industryRoutes: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${baseUrl}/services/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // ─── pSEO: Location spoke pages ───────────────────────────────────────────
  const locationRoutes: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${baseUrl}/hire/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // ─── Dynamic content routes ───────────────────────────────────────────────
  const dynamicRoutes: MetadataRoute.Sitemap = [];

  try {
    const projectsRes = await fetch(`${apiUrl}/project`, {
      next: { revalidate: 3600 },
    });
    if (projectsRes.ok) {
      const projectsData = await projectsRes.json();
      const projects: { _id: string; updatedAt?: string }[] =
        projectsData?.data || [];
      projects.forEach((p) => {
        dynamicRoutes.push({
          url: `${baseUrl}/projects/${p._id}`,
          lastModified: p.updatedAt ? new Date(p.updatedAt) : new Date(),
          changeFrequency: "monthly",
          priority: 0.7,
        });
      });
    }
  } catch (_) {}

  try {
    const blogsRes = await fetch(`${apiUrl}/blog`, {
      next: { revalidate: 3600 },
    });
    if (blogsRes.ok) {
      const blogsData = await blogsRes.json();
      const blogs: { _id: string; updatedAt?: string }[] =
        blogsData?.data || [];
      blogs.forEach((b) => {
        dynamicRoutes.push({
          url: `${baseUrl}/blogs/${b._id}`,
          lastModified: b.updatedAt ? new Date(b.updatedAt) : new Date(),
          changeFrequency: "monthly",
          priority: 0.7,
        });
      });
    }
  } catch (_) {}

  try {
    const shopRes = await fetch(`${apiUrl}/product`, {
      next: { revalidate: 3600 },
    });
    if (shopRes.ok) {
      const shopData = await shopRes.json();
      const products: { _id: string; updatedAt?: string }[] =
        shopData?.data || [];
      products.forEach((p) => {
        dynamicRoutes.push({
          url: `${baseUrl}/shop/${p._id}`,
          lastModified: p.updatedAt ? new Date(p.updatedAt) : new Date(),
          changeFrequency: "monthly",
          priority: 0.6,
        });
      });
    }
  } catch (_) {}

  // Case Study Routes
  const caseStudySlugs = [
    "roofing-seo-success",
    "ecommerce-transformation",
    "dental-booking-system",
  ];

  const caseStudyRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/case-study`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...caseStudySlugs.map((slug) => ({
      url: `${baseUrl}/case-study/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [
    ...staticRoutes,
    ...industryRoutes,
    ...locationRoutes,
    ...caseStudyRoutes,
    ...dynamicRoutes,
  ];
}
