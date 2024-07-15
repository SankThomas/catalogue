"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    title: "Home",
    url: "/projects/event-creation-and-booking",
  },
  {
    title: "Booked Events",
    url: "/projects/event-creation-and-booking/booked-events",
  },
  {
    title: "New Event",
    url: "/projects/event-creation-and-booking/new-event",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <header className="flex flex-wrap items-center justify-center">
        <ul className="flex flex-wrap items-center justify-center gap-4">
          {links.map((link) => (
            <li key={link.url}>
              <Link
                href={link.url}
                className={`${pathname === link.url && "bg-neutral-900 font-semibold text-white"} rounded px-4 py-2 text-sm transition hover:bg-neutral-800 lg:text-base`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
}
