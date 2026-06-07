import { NextResponse, type NextRequest } from "next/server";

const ACCESS_COOKIE = "emaus_admin_access_token";
const LOCAL_ADMIN_SESSION_TOKEN =
  process.env.ADMIN_SESSION_TOKEN ?? "6168ece31dc89c9cca4d220a68842b1c03162e47c6489dbe96d3881c1368b942";

function redirectToLogin(request: NextRequest, pathname: string) {
  const loginUrl = request.nextUrl.clone();
  loginUrl.pathname = "/admin/login";
  loginUrl.searchParams.set("next", pathname);
  return NextResponse.redirect(loginUrl);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasSupabaseConfig = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  if (!pathname.startsWith("/admin") || pathname === "/admin/login") {
    return NextResponse.next();
  }

  const sessionToken = request.cookies.get(ACCESS_COOKIE)?.value;

  if (!sessionToken) {
    return redirectToLogin(request, pathname);
  }

  if (!hasSupabaseConfig && sessionToken !== LOCAL_ADMIN_SESSION_TOKEN) {
    return redirectToLogin(request, pathname);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"]
};
