import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Lahiru Jayasuriya | Full Stack Developer & QA Engineer",
  description:
    "Portfolio of Lahiru Jayasuriya – BICT Undergraduate at Uva Wellassa University, Full Stack Developer and QA Engineer specializing in Selenium automation, React, and modern web technologies.",
  keywords: [
    "Lahiru Jayasuriya",
    "Full Stack Developer",
    "QA Engineer",
    "Selenium",
    "React",
    "Next.js",
    "Sri Lanka",
    "Portfolio",
  ],
  authors: [{ name: "Lahiru Jayasuriya" }],
  openGraph: {
    title: "Lahiru Jayasuriya | Full Stack Developer & QA Engi eer",
    description:
      "BICT Undergraduate, Full Stack Developer & QA Engineer from Gampaha, Sri Lanka.",
    images: ["https://avatars.githubusercontent.com/u/173532719?v=4"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('portfolio-theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
