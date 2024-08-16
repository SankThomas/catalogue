import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <>
      <header className="flex flex-wrap items-center justify-between gap-4 py-8 lg:gap-8">
        <Image
          src="/images/manage-landing-page/logo.svg"
          alt="Manage landing page"
          width={130}
          height={80}
        />

        <nav>
          <ul className="hidden items-center justify-center gap-8 lg:flex">
            <li>
              <Button variant="ghost">Pricing</Button>
            </li>
            <li>
              <Button variant="ghost">Product</Button>
            </li>
            <li>
              <Button variant="ghost">About Us</Button>
            </li>
            <li>
              <Button variant="ghost">Careers</Button>
            </li>
            <li>
              <Button variant="ghost">Community</Button>
            </li>
          </ul>
        </nav>

        <Button className="bg-[#F35F3B] transition-all hover:bg-[#ca4f31]">
          Get Started
        </Button>
      </header>
    </>
  );
}
