"use client";

import React from "react";
import Link from "next/link";
import { AlertCircle, RefreshCcw, Home } from "lucide-react";
import ReButton from "@/component/Button/ReButton";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0f0715] flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-red-500/10 rounded-full border border-red-500/20">
            <AlertCircle className="w-12 h-12 text-red-400" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-4">Something went wrong!</h1>
        <p className="text-gray-400 mb-8">
          We apologize for the inconvenience. An unexpected error has occurred. 
          Our team has been notified.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ReButton
            title="Try again"
            icon={<RefreshCcw className="w-4 h-4" />}
            onClick={() => reset()}
            className="h-12 rounded-full px-8"
          />
          <Link href="/">
            <ReButton
              title="Return Home"
              variant="outline"
              icon={<Home className="w-4 h-4" />}
              className="h-12 rounded-full px-8 w-full"
            />
          </Link>
        </div>
        
        {error.digest && (
          <p className="mt-8 text-xs text-gray-600 font-mono">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
