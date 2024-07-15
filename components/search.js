"use client";

import React from "react";

export default function Search({ searchProjects }) {
  return (
    <>
      <div>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for a project"
          autoComplete="off"
          className="w-full rounded-lg border border-neutral-900 bg-transparent px-6 py-3 text-neutral-400 placeholder-neutral-600 outline-none transition"
          onChange={(e) => searchProjects(e.target.value)}
        />
      </div>
    </>
  );
}
