import '../styles/globals.css';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://stijndv.com" />
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        />
        <meta
          name="description"
          content=" This year, Innovate 2.0 returns with even more excitement, inviting a larger community of innovators to build on the tradition of turning groundbreaking ideas into real-world applications, reinforcing the hackathon’s mission to drive innovation and entrepreneurship."
        />
        <meta
          name="keywords"
          content="Hackathon, Hackstreet, Hackstreet 2.0, Hackers"
        />
        <link rel="icon" href="/hackstreetlogo.ico" />
        <title>INNOVATE 2.O</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
