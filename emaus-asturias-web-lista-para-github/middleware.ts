import { NextResponse, type NextRequest } from "next/server";

const ACCESS_COOKIE = "emaus_admin_access_token";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasSupabaseConfig = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  if (!pathname.startsWith("/admin") || pathname === "/admin/login") {
    return NextResponse.next();
  }

  if (!hasSupabaseConfig) {
    return NextResponse.next();
  }

  const hasSession = Boolean(request.cookies.get(ACCESS_COOKIE)?.value);

  if (!hasSession) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/admin/login";
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"]
};
