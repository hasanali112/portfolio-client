import { MetadataRoute } from "next";
import { industries } from "@/data/industries";
import { locations } from "@/data/locations";

const baseUrl = "https://mdhasanalikhan.vercel.app";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Helper to fetch with a timeout to prevent build hangs
async function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
  timeout = 8000,
) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    return response;
  } finally {
    clearTimeout(id);
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // ─── Static routes ────────────────────────────────────────────────────────
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: "2024-03-24",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: "2024-03-24",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hire-me`,
      lastModified: "2024-03-24",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: "2024-03-24",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: "2024-03-24",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: "2024-03-24",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: "2024-03-24",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hire`,
      lastModified: "2024-03-24",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: "2024-03-24",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // ─── pSEO: Industry & Location routes ─────────────────────────────────────
  const industryRoutes: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${baseUrl}/services/${industry.slug}`,
    lastModified: "2024-03-24",
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const locationRoutes: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${baseUrl}/hire/${loc.slug}`,
    lastModified: "2024-03-24",
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // ─── Case Study Routes ────────────────────────────────────────────────────
  const caseStudySlugs = [
    "roofing-seo-success",
    "ecommerce-transformation",
    "dental-booking-system",
  ];
  const caseStudyRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/case-study`,
      lastModified: "2024-03-24",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...caseStudySlugs.map((slug) => ({
      url: `${baseUrl}/case-study/${slug}`,
      lastModified: "2024-03-24",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  // ─── Dynamic content routes (Parallel Fetch) ──────────────────────────────
  const dynamicRoutes: MetadataRoute.Sitemap = [];

  if (apiUrl) {
    const fetchPromises = [
      fetchWithTimeout(`${apiUrl}/project`, {
        next: { revalidate: 3600 },
      }).then(async (r) => (r.ok ? (await r.json()).data : [])),
      fetchWithTimeout(`${apiUrl}/blog`, { next: { revalidate: 3600 } }).then(
        async (r) => (r.ok ? (await r.json()).data : []),
      ),
      fetchWithTimeout(`${apiUrl}/product`, {
        next: { revalidate: 3600 },
      }).then(async (r) => (r.ok ? (await r.json()).data : [])),
    ];

    try {
      const [projects, blogs, products] =
        await Promise.allSettled(fetchPromises);

      if (projects.status === "fulfilled") {
        projects.value.forEach((p: any) => {
          dynamicRoutes.push({
            url: `${baseUrl}/projects/${p._id}`,
            lastModified: p.updatedAt ? new Date(p.updatedAt) : "2024-03-24",
            changeFrequency: "monthly",
            priority: 0.7,
          });
        });
      }

      if (blogs.status === "fulfilled") {
        blogs.value.forEach((b: any) => {
          dynamicRoutes.push({
            url: `${baseUrl}/blogs/${b._id}`,
            lastModified: b.updatedAt ? new Date(b.updatedAt) : "2024-03-24",
            changeFrequency: "monthly",
            priority: 0.7,
          });
        });
      }

      if (products.status === "fulfilled") {
        products.value.forEach((p: any) => {
          dynamicRoutes.push({
            url: `${baseUrl}/shop/${p._id}`,
            lastModified: p.updatedAt ? new Date(p.updatedAt) : "2024-03-24",
            changeFrequency: "monthly",
            priority: 0.6,
          });
        });
      }
    } catch (error) {
      console.error("Error fetching dynamic routes for sitemap:", error);
    }
  }

  return [
    ...staticRoutes,
    ...industryRoutes,
    ...locationRoutes,
    ...caseStudyRoutes,
    ...dynamicRoutes,
  ];
}
