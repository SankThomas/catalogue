import { PersonIcon } from "@radix-ui/react-icons";
import { CalendarIcon, LocateIcon, RocketIcon } from "lucide-react";
import React from "react";

async function getDetails() {
  const res = await fetch("https://api.spacexdata.com/v4/company");

  if (!res.ok) throw new Error("Failed to fetch");

  return res.json();
}

export default async function SpaceX() {
  const details = await getDetails();

  return (
    <div>
      {details ? (
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-4xl font-bold lg:text-6xl">SpaceX</h1>
          <p className="text-muted-foreground">{details.summary}</p>

          <h2 className="text-2xl font-bold lg:text-3xl">Company details</h2>
          <ul className="flex flex-wrap items-center justify-center gap-4">
            <li className="flex flex-col items-center gap-4 rounded-lg border border-neutral-800 p-4 font-normal text-muted-foreground">
              <span className="block font-semibold">
                <LocateIcon className="text-white" />
              </span>
              Located at {details.headquarters.address},{" "}
              {details.headquarters.city}, {details.headquarters.state}
            </li>
            <li className="flex flex-col items-center gap-4 rounded-lg border border-neutral-800 p-4 font-normal text-muted-foreground">
              <span className="block font-semibold">
                <CalendarIcon className="text-white" />
              </span>
              and founded in {details.founded}
            </li>
            <li className="flex flex-col items-center gap-4 rounded-lg border border-neutral-800 p-4 font-normal text-muted-foreground">
              <span className="block font-semibold">
                <PersonIcon className="text-white" />
              </span>
              By {details.founder}
            </li>
            <li className="flex flex-col items-center gap-4 rounded-lg border border-neutral-800 p-4 font-normal text-muted-foreground">
              <span className="block font-semibold">
                <PersonIcon className="text-white" />
              </span>
              It has {details.employees} employees
            </li>
            <li className="flex flex-col items-center gap-4 rounded-lg border border-neutral-800 p-4 font-normal text-muted-foreground">
              <span className="block font-semibold">
                <RocketIcon className="text-white" />
              </span>
              and {details.vehicles} rockets
            </li>
          </ul>
        </div>
      ) : (
        <p>Loading details...</p>
      )}
    </div>
  );
}
