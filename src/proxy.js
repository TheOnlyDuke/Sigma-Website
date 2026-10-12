import { NextResponse } from "next/server";

export const config = {
  matcher: "/dashboard/:path*",
};

export function proxy(request) {
  // Dev Mode Bypass: Skip auth check when NEXT_PUBLIC_DEV_BYPASS_AUTH is true
  const devBypass = process.env.NEXT_PUBLIC_DEV_BYPASS_AUTH === "true";

  if (devBypass) {
    return NextResponse.next();
  }

  // Production: Check for access token cookie
  const accessToken = request.cookies.get("access_token");

  if (
    !accessToken?.value &&
    request.nextUrl.pathname.startsWith("/dashboard")
  ) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}
