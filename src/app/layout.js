import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ContactModal from "@/components/ContactModal/ContactModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://www.duostechnologies.com'),
  title: "DUOS Technologies Group",
  description: "Creating a Unified Digital Platform for the Next Phase of DUOS Growth",
  icons: {
    icon: "/hero-logo/duostech.png",
    shortcut: "/hero-logo/duostech.png",
    apple: "/hero-logo/duostech.png",
  },
  openGraph: {
    title: "DUOS Technologies Group",
    description: "Creating a Unified Digital Platform for the Next Phase of DUOS Growth",
    url: "https://www.duostechnologies.com",
    siteName: "DUOS Technologies Group",
    images: [
      {
        url: "/hero-logo/duostech.png",
        width: 500,
        height: 500,
        alt: "DUOS Technologies Group Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "DUOS Technologies Group",
    description: "Creating a Unified Digital Platform for the Next Phase of DUOS Growth",
    images: ["/hero-logo/duostech.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        <main style={{ minHeight: "100vh" }}>
          {children}
        </main>
        <Footer />
        <ContactModal />
      </body>
    </html>
  );
}
