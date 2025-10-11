"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

export const useVisitorTracking = () => {
  const pathname = usePathname();

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        // Get real IP from external service with fallbacks
        let realIP = "unknown";

        // Try multiple IP services for reliability
        const ipServices = [
          "https://api.ipify.org?format=json",
          "https://httpbin.org/ip",
          "https://api64.ipify.org?format=json",
        ];

        for (const service of ipServices) {
          try {
            const ipResponse = await fetch(service);
            const ipData = await ipResponse.json();
            realIP = ipData.ip || ipData.origin || "unknown";
            if (realIP !== "unknown") break;
          } catch (error) {
            continue; // Try next service
          }
        }

        await fetch(
          `https://portfolio-dashboard-server-sage.vercel.app/api/v1/visitors/track`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              page: pathname,
              clientIP: realIP,
            }),
          }
        );
      } catch (error) {
        console.error("Failed to track visitor:", error);
      }
    };

    trackVisitor();
  }, [pathname]);
};

export const getVisitorStats = async () => {
  try {
    const response = await fetch(
      `https://portfolio-dashboard-server-sage.vercel.app/api/v1/visitors/stats`
    );
    const data = await response.json();
    return data.success ? data.data : null;
  } catch (error) {
    console.error("Failed to get visitor stats:", error);
    return null;
  }
};

export const getRecentVisitors = async (limit: number = 50) => {
  try {
    const response = await fetch(
      `https://portfolio-dashboard-server-sage.vercel.app/api/v1/visitors/recent?limit=${limit}`
    );
    const data = await response.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error("Failed to get recent visitors:", error);
    return [];
  }
};

export const getVisitorsByCountry = async () => {
  try {
    const response = await fetch(
      `https://portfolio-dashboard-server-sage.vercel.app/api/v1/visitors/by-country`
    );
    const data = await response.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error("Failed to get visitors by country:", error);
    return [];
  }
};

export const deleteVisitor = async (id: string) => {
  try {
    const response = await fetch(
      `https://portfolio-dashboard-server-sage.vercel.app/api/v1/visitors/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error("Failed to delete visitor:", error);
    return false;
  }
};

export const deleteAllVisitors = async () => {
  try {
    const response = await fetch(
      `https://portfolio-dashboard-server-sage.vercel.app/api/v1/visitors`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error("Failed to delete all visitors:", error);
    return false;
  }
};
