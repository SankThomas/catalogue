import React from "react";
import Navbar from "./_components/navbar";

export default function SpaceXLayout({ children }) {
  return (
    <div className="px-4">
      <Navbar />
      <div className="py-32">{children}</div>
    </div>
  );
}
