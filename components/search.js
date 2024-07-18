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
          className="input"
          onChange={(e) => searchProjects(e.target.value)}
        />
      </div>
    </>
  );
}
