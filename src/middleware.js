import { withAuth } from "next-auth/middleware";

export default function middleware(req) {
  const { pathname } = req.nextUrl;

  // Allow unauthenticated access to login page
  if (pathname === "/admin/login") return;

  // Otherwise, use NextAuth to protect routes
  return withAuth({
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  })(req);
}

export const config = {
  matcher: ["/admin/:path*"],
};
