import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getLaunchpads() {
  const res = await fetch("https://api.spacexdata.com/v4/launchpads");

  if (!res.ok) throw new Error("Failed to fetch");

  return res.json();
}

export default async function Launchpads() {
  const launchpads = await getLaunchpads();

  return (
    <div>
      {launchpads ? (
        <div className="mx-auto max-w-7xl space-y-6">
          <h1 className="text-center">Launchpads</h1>

          <div className="grid gap-8">
            {launchpads.map((launchpad) => (
              <Link
                href={`/projects/spacex/launchpads/${launchpad.id}`}
                key={launchpad.id}
              >
                <Card className="group grid gap-8 p-4 md:grid-cols-2">
                  <Image
                    src={launchpad.images.large[0]}
                    width={1920}
                    height={1080}
                    alt={launchpad.name}
                    className="rounded-lg"
                  />

                  <CardContent>
                    <CardTitle className="leading-7">
                      {launchpad.full_name} ({launchpad.name})
                    </CardTitle>
                    <CardDescription className="my-4">
                      {launchpad.details}
                    </CardDescription>

                    <Button variant="custom">More details</Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <CardDescription>Loading launchpad details...</CardDescription>
      )}
    </div>
  );
}
