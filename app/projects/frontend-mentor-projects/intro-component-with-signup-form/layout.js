import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function IntroComponentLayout({ children }) {
  return <div className={poppins.className}>{children}</div>;
}
