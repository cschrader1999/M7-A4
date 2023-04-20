import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav>
        <Link href="/">
          <span>Home</span>
        </Link>{' '}
        <Link href="/about">
          <span>About</span>
        </Link>{' '}
        <Link href="/SignUp">
          <span>Sign Up</span>
        </Link>{' '}
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;