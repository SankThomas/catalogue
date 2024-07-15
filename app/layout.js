import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
// import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://tsbsankara-catalogue.vercel.app"),
  title: {
    default: "TsbSankara's Catalogue of Projects",
    template: "%s | TsbSankara's Catalogue of Projects",
  },
  description:
    "TsbSankara's Catalogue of Projects is a website built in NextJs containing all the projects, websites and web apps built by Front-end web developer and YouTuber, Thomas Sankara, more populary known as TsbSankara",
  // twitter: {
  //   card: "summary_large_image",
  // },
  // openGraph: {
  //   images: "./opengraph-image.png",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* <Analytics /> */}
        <Toaster />
      </body>
    </html>
  );
}
