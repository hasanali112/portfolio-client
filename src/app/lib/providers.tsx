"use client";

import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-right" richColors />
        {children}
      </QueryClientProvider>
    </NextUIProvider>
  );
}
