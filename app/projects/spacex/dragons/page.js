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

async function getDragons() {
  const res = await fetch("https://api.spacexdata.com/v4/dragons");

  if (!res.ok) throw new Error("Failed to fetch");

  return res.json();
}

export default async function Dragons() {
  const dragons = await getDragons();

  return (
    <div>
      {dragons ? (
        <div className="mx-auto max-w-7xl space-y-6">
          <h1 className="text-center">Dragons</h1>

          <div className="grid gap-8">
            {dragons.map((dragon) => (
              <Link
                href={`/projects/spacex/dragons/${dragon.id}`}
                key={dragon.id}
              >
                <Card className="group grid gap-8 p-4 md:grid-cols-2">
                  <Image
                    src={dragon.flickr_images[0]}
                    width={1920}
                    height={1080}
                    alt={dragon.name}
                    className="rounded-lg"
                  />

                  <CardContent>
                    <CardTitle>{dragon.name}</CardTitle>
                    <CardDescription className="my-4">
                      {dragon.description}
                    </CardDescription>

                    <Button variant="custom">More details</Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <CardDescription>Loading dragons details...</CardDescription>
      )}
    </div>
  );
}
