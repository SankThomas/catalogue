import Image from "next/image";
import React from "react";
import { CardDescription, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HeightIcon } from "@radix-ui/react-icons";
import { DiameterIcon, WeightIcon } from "lucide-react";

export default async function Rocket({ params }) {
  async function getRocket() {
    const res = await fetch(
      `https://api.spacexdata.com/v4/rockets/${params.rocket}`,
    );

    if (!res.ok) throw new Error("Failed to fetch");

    return res.json();
  }

  const rocket = await getRocket();

  return (
    <div className="container mx-auto">
      {rocket ? (
        <div>
          <h1 className="text-center">{rocket.name}</h1>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="mx-auto max-w-2xl">
              <Carousel>
                <CarouselContent>
                  {rocket.flickr_images.map((image, index) => (
                    <CarouselItem key={index}>
                      <Image
                        src={image}
                        alt={rocket.name}
                        width={1920}
                        height={1080}
                        className="rounded-lg"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            <article>
              <CardDescription>{rocket.description}</CardDescription>

              <ul className="mt-8 grid grid-cols-2 gap-8 text-center md:grid-cols-3">
                <li className="space-y-2 rounded-lg border border-neutral-900 p-4">
                  <HeightIcon className="mx-auto block" />
                  <h3 className="font-semibold">Height</h3>
                  <CardDescription>{rocket.height.meters} m</CardDescription>
                  <CardDescription>{rocket.height.feet} ft</CardDescription>
                </li>
                <li className="space-y-2 rounded-lg border border-neutral-900 p-4">
                  <WeightIcon className="mx-auto block" />
                  <h3 className="font-semibold">Weight</h3>
                  <CardDescription>
                    {rocket.mass.kg.toLocaleString()} kg
                  </CardDescription>
                  <CardDescription>
                    {rocket.mass.lb.toLocaleString()} lb
                  </CardDescription>
                </li>
                <li className="space-y-2 rounded-lg border border-neutral-900 p-4">
                  <DiameterIcon className="mx-auto block" />
                  <h3 className="font-semibold">Diameter</h3>
                  <CardDescription>{rocket.diameter.meters} m</CardDescription>
                  <CardDescription>{rocket.diameter.feet} ft</CardDescription>
                </li>
              </ul>

              <article className="mt-8">
                <CardTitle>Payload Weights</CardTitle>

                <div className="mt-6 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                  {rocket.payload_weights.map((p) => (
                    <div
                      key={p.id}
                      className="space-y-2 rounded-lg border border-neutral-900 p-4"
                    >
                      <h3 className="font-semibold uppercase">{p.id}</h3>
                      <CardDescription>{p.name}</CardDescription>
                      <CardDescription>
                        {p.kg.toLocaleString()} kg
                      </CardDescription>
                      <CardDescription>
                        {p.lb.toLocaleString()} lb
                      </CardDescription>
                    </div>
                  ))}
                </div>
              </article>
            </article>
          </div>
        </div>
      ) : (
        <CardDescription>Loading rocket details</CardDescription>
      )}
    </div>
  );
}
