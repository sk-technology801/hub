import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";
import PageTransitionWrapper from "./components/page-transition";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "SK HUB Auto Performance & Care | Master Automotive Engineering",
  description: "Premier automotive engineering, dealer-level diagnostics, ceramic brake overhauls, synthetic lubrication, and 24/7 roadside assistance by SK HUB.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#080c14] text-gray-100 min-h-screen`}
      >
        <Header />
        <PageTransitionWrapper>
          {children}
        </PageTransitionWrapper>
        <Footer />
      </body>
    </html>
  );
}
