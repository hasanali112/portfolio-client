import { jwtDecode } from "jwt-decode";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const authRoutes = ["/login"];
const adminRoutes = ["/admin", "/admin/*"];

type Role = "superAdmin";

// Define which routes each role can access
const roleBasedRoutes: Record<Role, string[]> = {
  superAdmin: adminRoutes,
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("accessToken")?.value;

  // 1. Handle authentication routes (e.g., /login, /register)
  const isAuthRoute = authRoutes.includes(pathname);
  if (isAuthRoute) {
    if (accessToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  // 2. All other routes in the matcher are protected, so an access token is required.
  if (!accessToken) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, request.url)
    );
  }

  // 3. If the user is logged in, verify their role and permissions.
  try {
    const decoded = jwtDecode(accessToken) as { role?: Role };
    const role = decoded?.role;

    if (!role) {
      throw new Error("Invalid access token: role is missing.");
    }

    const allowedRoutes = roleBasedRoutes[role];
    const hasAccess = allowedRoutes?.some((route) =>
      pathname.startsWith(route)
    );

    if (hasAccess) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } catch (error) {
    console.error("Token validation error:", error);
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("accessToken");
    return response;
  }
}

export const config = {
  matcher: ["/login", "/admin/:path*"],
};
