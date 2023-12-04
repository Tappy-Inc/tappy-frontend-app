import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { api } from "@/utils/api";

// Define constants for the paths
const LOGIN_PATH = "/login";
const HOME_PATH = "/";

export async function middleware(request: NextRequest) {
  try {
    const session = await api.auth.session();

    // If the user is not authenticated and not on the login page, redirect them to the login page
    if (session.status === 401 && request.nextUrl.pathname !== LOGIN_PATH) {
      return NextResponse.redirect(new URL(LOGIN_PATH, request.url));
    }

    // If the user is authenticated and on the login page, redirect them to the home page
    if (session.status === 200 && request.nextUrl.pathname === LOGIN_PATH) {
      return NextResponse.redirect(new URL(HOME_PATH, request.url));
    }
  } catch (error: any) {
    // Handle any errors that occur during the execution of the middleware
    console.error("Error in middleware:", error);

    throw new Error(error?.message);
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};