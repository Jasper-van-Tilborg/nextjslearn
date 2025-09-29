import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
  const isOnLogin = nextUrl.pathname.startsWith('/login');
  
  if (isOnDashboard) {
    if (isLoggedIn) return NextResponse.next();
    return NextResponse.redirect(new URL('/login', nextUrl));
  } else if (isOnLogin && isLoggedIn) {
    return NextResponse.redirect(new URL('/dashboard', nextUrl));
  }
  return NextResponse.next();
});

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
