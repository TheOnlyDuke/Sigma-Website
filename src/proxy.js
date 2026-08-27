import { NextResponse } from "next/server";

export const config = {
  matcher: "/dashboard/:path*",
};

export function proxy(request) {
  const accessToken = request.cookies.get("access_token");

  if (
    !accessToken?.value &&
    request.nextUrl.pathname.startsWith("/dashboard")
  ) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}
