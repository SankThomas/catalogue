import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Container() {
  return (
    <Button asChild className="fixed left-8 top-8">
      <Link href="/projects/frontend-mentor-projects">&larr; Back</Link>
    </Button>
  );
}
