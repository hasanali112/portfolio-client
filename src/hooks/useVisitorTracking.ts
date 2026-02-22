"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { API_BASE_URL } from "@/config/env";

export const useVisitorTracking = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      return;
    }

    const trackVisitor = () => {
      try {
        const payload = JSON.stringify({ page: pathname, clientIP: "unknown" });
        const endpoint = `${API_BASE_URL}/visitors/track`;

        if (navigator.sendBeacon) {
          const blob = new Blob([payload], { type: "application/json" });
          navigator.sendBeacon(endpoint, blob);
          return;
        }

        fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: payload,
          keepalive: true,
        }).catch(() => {
          // Silently fail for visitor tracking.
        });
      } catch (error) {
        // Silently fail for visitor tracking.
      }
    };

    const id = window.requestIdleCallback
      ? window.requestIdleCallback(() => trackVisitor())
      : window.setTimeout(trackVisitor, 500);

    return () => {
      if (typeof id === "number") {
        window.clearTimeout(id);
      } else {
        window.cancelIdleCallback(id);
      }
    };
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
