// pages/_app.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Handle direct navigation to blog posts when exported statically
    if (typeof window !== 'undefined' && window.location.pathname.startsWith('/blog/')) {
      const slug = window.location.pathname.replace('/blog/', '').replace(/\/$/, '');
      if (slug && !router.isReady) {
        router.push(`/blog/${slug}`);
      }
    }
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;