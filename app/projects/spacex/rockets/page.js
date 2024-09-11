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

async function getRockets() {
  const res = await fetch("https://api.spacexdata.com/v4/rockets");

  if (!res.ok) throw new Error("Failed to fetch");

  return res.json();
}

export default async function Rockets() {
  const rockets = await getRockets();

  return (
    <div>
      {rockets ? (
        <div className="mx-auto max-w-7xl space-y-6">
          <h1 className="text-center">Rockets</h1>

          <div className="grid gap-8">
            {rockets.map((rocket) => (
              <Link
                href={`/projects/spacex/rockets/${rocket.id}`}
                key={rocket.id}
              >
                <Card className="group grid gap-8 p-4 md:grid-cols-2">
                  <Image
                    src={rocket.flickr_images[0]}
                    width={1920}
                    height={1080}
                    alt={rocket.name}
                    className="rounded-lg"
                  />

                  <CardContent>
                    <CardTitle>{rocket.name}</CardTitle>
                    <CardDescription className="my-4">
                      {rocket.description}
                    </CardDescription>

                    <Button variant="custom">More details</Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <CardDescription>Loading rockets details...</CardDescription>
      )}
    </div>
  );
}
