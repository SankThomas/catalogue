"use client";

import React from "react";

export default function SearchCountries({ searchCountries }) {
  return (
    <>
      <div>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for a country"
          autoComplete="off"
          className="input"
          onChange={(e) => searchCountries(e.target.value)}
        />
      </div>
    </>
  );
}
