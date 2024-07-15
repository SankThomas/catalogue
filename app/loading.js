import Container from "@/components/container";
import React from "react";

export default function Loading() {
  return (
    <>
      <Container>
        <div className="flex items-center justify-center">
          <div className="h-14 w-14 animate-spin rounded-full border-4 border-neutral-800 border-t-neutral-400 bg-transparent"></div>
        </div>
      </Container>
    </>
  );
}
