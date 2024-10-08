import { Switch } from "@/components/ui/switch";
import React from "react";

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-center gap-8 sm:justify-between">
      <div>
        <h2 className="lg:text-xl">Social Media Dashboard</h2>
        <p className="font-bold">Total Followers: 23,004</p>
      </div>
    </header>
  );
}
