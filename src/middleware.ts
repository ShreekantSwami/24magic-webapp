import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const STATIC_EXTENSIONS =
  /\.(jpg|jpeg|png|gif|svg|ico|webp|css|js|json|woff|woff2|ttf|eot)$/;

const LAUNCH_DATE = new Date(process.env.NEXT_PUBLIC_LAUNCH_DATE!);

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isAfterLaunch = new Date() >= LAUNCH_DATE;

  if (isAfterLaunch) {
    return NextResponse.next();
  }

  if (pathname === "/" || STATIC_EXTENSIONS.test(pathname)) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|public|api).*)"],
};