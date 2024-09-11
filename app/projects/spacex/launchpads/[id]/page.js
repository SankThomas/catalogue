import Image from "next/image";
import React from "react";
import { CardDescription, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { HeightIcon } from "@radix-ui/react-icons";
import { DiameterIcon, LocateIcon, RocketIcon, WeightIcon } from "lucide-react";

export default async function Launchpad({ params }) {
  async function getLaunchpad() {
    const res = await fetch(
      `https://api.spacexdata.com/v4/launchpads/${params.id}`,
    );

    if (!res.ok) throw new Error("Failed to fetch");

    return res.json();
  }

  const launchpad = await getLaunchpad();

  return (
    <div className="container mx-auto">
      {launchpad ? (
        <div>
          <h1 className="text-center">
            {launchpad.full_name} ({launchpad.name})
          </h1>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="mx-auto max-w-2xl">
              <Carousel>
                <CarouselContent>
                  {launchpad.images.large.map((image, index) => (
                    <CarouselItem key={index}>
                      <Image
                        src={image}
                        alt={launchpad.name}
                        width={1920}
                        height={1080}
                        className="rounded-lg"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            <article>
              {launchpad.status === "active" ? (
                <CardDescription className="mb-2 inline-block rounded-lg bg-emerald-400/25 px-4 text-sm text-emerald-400">
                  Active
                </CardDescription>
              ) : launchpad.status === "retired" ? (
                <CardDescription className="mb-2 inline-block rounded-lg bg-rose-400/25 px-4 text-sm text-rose-400">
                  Retired
                </CardDescription>
              ) : launchpad.status === "under construction" ? (
                <CardDescription className="mb-2 inline-block rounded-lg bg-blue-400/25 px-4 text-sm text-blue-400">
                  Under Construction
                </CardDescription>
              ) : null}
              <CardDescription>{launchpad.details}</CardDescription>

              <div className="mt-8 grid gap-8 text-center sm:grid-cols-2 md:grid-cols-3">
                <div className="space-y-2 rounded-lg border border-neutral-900 p-4">
                  <LocateIcon className="mx-auto block" />
                  <h3>Location</h3>
                  <CardDescription>
                    {launchpad.locality}, {launchpad.region}
                  </CardDescription>
                </div>

                <div className="space-y-2 rounded-lg border border-neutral-900 p-4">
                  <RocketIcon className="mx-auto block" />
                  <h3>Launches</h3>
                  <CardDescription>
                    {launchpad.launches.length} launches
                  </CardDescription>
                </div>

                <div className="space-y-2 rounded-lg border border-neutral-900 p-4">
                  <RocketIcon className="mx-auto block" />
                  <h3>Launch attempts</h3>
                  <CardDescription>
                    {launchpad.launch_attempts} launch attempts
                  </CardDescription>
                  <CardDescription>
                    {launchpad.launch_successes} successful launches
                  </CardDescription>
                  <CardDescription>
                    {launchpad.launch_attempts - launchpad.launch_successes}{" "}
                    failed launches
                  </CardDescription>
                </div>
              </div>
            </article>
          </div>
        </div>
      ) : (
        <CardDescription>Loading launchpad details</CardDescription>
      )}
    </div>
  );
}
