"use client";

import React from "react";

export default function Search({ search }) {
  return (
    <>
      <div>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Type to search"
          autoComplete="off"
          className="input"
          onChange={(e) => search(e.target.value)}
        />
      </div>
    </>
  );
}
