"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { API_BASE_URL } from "@/config/env";

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

        await fetch(`${API_BASE_URL}/visitors/track`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            page: pathname,
            clientIP: realIP,
          }),
        });
      } catch (error) {
        // Silently fail for visitor tracking to avoid console noise if the server is unreachable
      }
    };

    trackVisitor();
  }, [pathname]);
};

export const getVisitorStats = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/visitors/stats`);
    const data = await response.json();
    return data.success ? data.data : null;
  } catch (error) {
    return null;
  }
};

export const getRecentVisitors = async (limit: number = 50) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/visitors/recent?limit=${limit}`,
    );
    const data = await response.json();
    return data.success ? data.data : [];
  } catch (error) {
    return [];
  }
};

export const getVisitorsByCountry = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/visitors/by-country`);
    const data = await response.json();
    return data.success ? data.data : [];
  } catch (error) {
    return [];
  }
};

export const deleteVisitor = async (id: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/visitors/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data.success;
  } catch (error) {
    return false;
  }
};

export const deleteAllVisitors = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/visitors`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data.success;
  } catch (error) {
    return false;
  }
};
