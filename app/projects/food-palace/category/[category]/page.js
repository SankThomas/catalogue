import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Category({ params }) {
  const slug = params.category;

  async function getMeals() {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${slug}`,
    );

    if (!res) {
      throw new Error("Failed to get meal category");
    }

    return res.json();
  }

  const meals = await getMeals();

  return (
    <Container>
      <div>
        <h1 className="mb-8 text-4xl font-bold text-white">
          {params.category}
        </h1>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {meals.meals.map((meal) => (
            <Link
              href={`/projects/food-palace/category/meals/${meal.strMeal}`}
              key={meal.idMeal}
            >
              <Card>
                <CardHeader>
                  <Image
                    src={meal.strMealThumb}
                    width={700}
                    height={400}
                    className="rounded-lg object-cover"
                    alt={meal.strMeal}
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle>{meal.strMeal}</CardTitle>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
