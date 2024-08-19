import Container from "@/components/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export default async function Dog({ params }) {
  async function getDogDetails() {
    const res = await fetch(
      `https://api.thedogapi.com/v1/breeds/${params.dog}`,
    );

    return res.json();
  }

  const dog = await getDogDetails();

  return (
    <>
      <Container>
        {dog ? (
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:gap-8">
            <Image
              src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
              alt={dog.name}
              width={800}
              height={600}
              className="w-full rounded-lg object-cover"
            />

            <div className="space-y-4">
              <h1>{dog.name}</h1>
              <div className="space-y-4">
                <CardDescription>
                  <strong>Origin:</strong> {dog.origin}
                </CardDescription>
                <CardDescription>
                  <strong>Bred For:</strong> {dog.bred_for}
                </CardDescription>
                <CardDescription>
                  <strong>Breed Group:</strong> {dog.breed_group}
                </CardDescription>
                <CardDescription>
                  <strong>Life Span:</strong> {dog.life_span}
                </CardDescription>
                <CardDescription>
                  <strong>Temperament:</strong> {dog.temperament}
                </CardDescription>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Height</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      {dog.height.imperial} inches
                    </CardDescription>
                    <CardDescription>{dog.height.metric} cm</CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Weight</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      {dog.weight.imperial} pounds
                    </CardDescription>
                    <CardDescription>{dog.weight.metric} kgs</CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading dog details</p>
        )}
      </Container>
    </>
  );
}
