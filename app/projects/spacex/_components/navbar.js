"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "Crew",
    url: "/projects/spacex/crew",
  },
  {
    title: "Rockets",
    url: "/projects/spacex/rockets",
  },
  {
    title: "Dragons",
    url: "/projects/spacex/dragons",
  },
  {
    title: "Launchpads",
    url: "/projects/spacex/launchpads",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed left-1/2 z-10 m-4 mx-auto w-full max-w-4xl -translate-x-1/2 rounded-full border border-neutral-800 bg-neutral-900/75 p-4 backdrop-blur-lg">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/" className="text-lg font-semibold text-white">
            SpaceX
          </Link>
        </div>

        <nav>
          <ul className="space-x-4">
            {links.map((link) => (
              <Link
                href={link.url}
                key={link.title}
                className={`text-sm text-muted-foreground hover:text-white/65 ${link.url === pathname && "text-white underline hover:text-white"}`}
              >
                {link.title}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
