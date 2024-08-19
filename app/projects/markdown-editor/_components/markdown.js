import React from "react";

export default function Markdown({ markdown, setMarkdown }) {
  return (
    <>
      <textarea
        name="markdown"
        id=""
        cols="30"
        rows="10"
        className="input lg:h-[600px]"
        placeholder="Start typing..."
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      ></textarea>
    </>
  );
}
