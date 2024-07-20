import Container from "@/components/container";
import { CardDescription } from "@/components/ui/card";
import React from "react";
import Posts from "./_components/posts";

export default function SanityBlog() {
  return (
    <>
      <Container>
        <div className="mb-4 text-center">
          <h1>Blog using Sanity CMS</h1>
          <CardDescription>
            This project is built using NextJs and{" "}
            <a
              href="https://sanity.io"
              target="_blank"
              rel="noreferrer"
              className="text-white underline"
            >
              Sanity CMS
            </a>
          </CardDescription>
        </div>

        <div>
          <Posts />
        </div>
      </Container>
    </>
  );
}
