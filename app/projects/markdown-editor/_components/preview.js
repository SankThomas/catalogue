import React from "react";

export default function Preview({ md, markdown }) {
  return (
    <div
      className="markdown"
      dangerouslySetInnerHTML={{ __html: md.render(markdown) }}
    ></div>
  );
}
