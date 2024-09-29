import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

async function getCrew() {
  const res = await fetch("https://api.spacexdata.com/v4/crew");

  if (!res.ok) throw new Error("Failed to fetch");

  return res.json();
}

export default async function Crew() {
  const crew = await getCrew();

  return (
    <div>
      {crew ? (
        <div className="mx-auto max-w-7xl space-y-6">
          <h1 className="text-center">The Crew</h1>

          <div className="grid gap-8 md:grid-cols-2">
            {crew.map((mem) => (
              <Card
                key={mem.id}
                className="group grid gap-8 p-4 md:grid-cols-2"
              >
                <Image
                  src={mem.image}
                  width={1920}
                  height={1080}
                  alt={mem.name}
                  className="h-full w-full rounded-lg object-cover"
                />

                <CardContent>
                  <CardTitle>{mem.name}</CardTitle>
                  <CardDescription className="my-4">
                    {mem.agency}
                  </CardDescription>

                  {mem.status === "active" ? (
                    <CardDescription className="inline-block rounded-lg bg-emerald-400/25 px-2 text-emerald-400">
                      Active
                    </CardDescription>
                  ) : mem.status !== "active" ? (
                    <CardDescription className="inline-block rounded-lg bg-rose-400/25 px-2 text-rose-400">
                      Inactive
                    </CardDescription>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading crew details...</p>
      )}
    </div>
  );
}
