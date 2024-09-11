import React from "react";
import { Josefin_Sans } from "next/font/google";

const josefinsans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function ComingSoonLandingPageLayout({ children }) {
  return <div className={josefinsans.className}>{children}</div>;
}
