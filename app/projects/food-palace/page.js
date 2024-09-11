import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getMealCategories() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
  );

  if (!res) {
    throw new Error("Fetch Failed at line 2");
  }

  return res.json();
}

export default async function FoodPalace() {
  const meals = await getMealCategories();

  return (
    <Container>
      <section>
        {!meals ? (
          <p className="text-center text-neutral-600">No meals to be shown</p>
        ) : (
          <>
            <div className="mx-auto mb-12 max-w-2xl space-y-6 text-center">
              <h1 className="mb-8 text-4xl lg:text-5xl">Food Palace</h1>
              <p>
                This is an app that shows meal categories, specific meals in the
                selected categories, and finally the recipe for the meal. It
                uses{" "}
                <a
                  href="https://themealdb.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-200 underline"
                >
                  TheMealDB API
                </a>
                . Enjoy
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {meals.categories.map((category) => (
                <Link
                  href={`/projects/food-palace/category/${category.strCategory}`}
                  key={category.idCategory}
                  className="cursor-pointer space-y-4 rounded-lg border border-neutral-800 p-4 transition hover:bg-neutral-950"
                >
                  <Image
                    src={category.strCategoryThumb}
                    width={400}
                    height={200}
                    className="mx-auto block object-cover"
                    alt={category.strCategory}
                  />
                  <article className="space-y-4">
                    <h2 className="text-xl font-bold">
                      {category.strCategory}
                    </h2>
                    <p className="leading-6 text-neutral-400">{`${category.strCategoryDescription.substring(
                      0,
                      100,
                    )}...`}</p>
                  </article>
                </Link>
              ))}
            </div>
          </>
        )}
      </section>
    </Container>
  );
}
