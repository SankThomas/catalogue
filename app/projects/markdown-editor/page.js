"use client";

import React, { useState } from "react";
import Markdown from "./_components/markdown";
import Preview from "./_components/preview";
import Container from "@/components/container";
import { Remarkable } from "remarkable";
import { CardDescription } from "@/components/ui/card";

const md = new Remarkable();

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("");

  return (
    <Container>
      <div className="mx-auto mb-12 max-w-2xl space-y-4 text-center">
        <h1>Markdown Editor</h1>
        <CardDescription>
          A markdown editor built on top of the{" "}
          <a
            href="https://npmjs.com/package/remarkable"
            target="_blank"
            rel="noreferrer"
            className="text-white underline"
          >
            Remarkable package
          </a>
        </CardDescription>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Markdown markdown={markdown} setMarkdown={setMarkdown} />
        <Preview md={md} markdown={markdown} />
      </div>
    </Container>
  );
}
