import Image from "next/image";
import React from "react";
import Ingredients from "./_components/ingredients";
import Container from "@/components/container";

export default async function Meals({ params }) {
  const slug = params.meals;

  async function getMealDetails() {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${slug}`,
    );

    if (!res) {
      throw new Error("Failed to get meal category");
    }

    return res.json();
  }

  const details = await getMealDetails();

  return (
    <>
      <Container>
        <div>
          <div>
            {details.meals.map((meal) => (
              <div key={meal.idMeal} className="grid gap-4">
                <article>
                  <Image
                    src={meal.strMealThumb}
                    className="rounded-lg object-cover"
                    width={600}
                    height={400}
                    alt={meal.strMeal}
                  />
                </article>

                <article className="space-y-4 md:col-span-2">
                  <h1 className="text-4xl font-bold text-white">
                    {meal.strMeal}
                  </h1>

                  <ul className="flex flex-wrap gap-2">
                    <li>
                      <small className="cursor-pointer rounded-full bg-neutral-800 px-2 py-1 transition hover:bg-neutral-700">
                        {meal.strArea}
                      </small>
                    </li>
                    <li>
                      <small className="cursor-pointer rounded-full bg-neutral-800 px-2 py-1 transition hover:bg-neutral-700">
                        {meal.strCategory}
                      </small>
                    </li>
                  </ul>

                  <div>
                    <h3 className="mb-2 text-2xl font-bold text-white">
                      Ingredients
                    </h3>
                    <Ingredients meal={meal} />
                  </div>

                  <div>
                    <h3 className="mb-2 text-2xl font-bold text-white">
                      How to prepare
                    </h3>
                    <p className="leading-6 text-neutral-400">
                      {meal.strInstructions}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
