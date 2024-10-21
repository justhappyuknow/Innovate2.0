import Head from 'next/head';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>INNOVATE 2.O</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/logo_hack.png" type="image/x-icon" />
        <link rel="preconnect" href="https://stijndv.com" />
        <meta
          name="description"
          content=" This year, Innovate 2.0 returns with
 even more excitement, inviting a
 larger community of innovators to
 build on the tradition of turning
 groundbreaking ideas into real-world
 applications, reinforcing the
 hackathon’s mission to drive
 innovation and entrepreneurship."
        />
        <meta
          name="keywords"
          content="Hackathon, INNOVATION, INNOVATE 2.O, Hackers"
        />
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
