"use client";

import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function Container({ children }) {
  const router = useRouter();

  return (
    <>
      <section className="container mx-auto px-6 py-20">
        <Button onClick={() => router.back()} className="mb-6">
          &larr; Back
        </Button>
        {children}
      </section>
    </>
  );
}
