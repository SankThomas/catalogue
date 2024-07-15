import React from "react";

export default function Ingredients({ meal }) {
  return (
    <>
      <ol className="list-decimal pl-7 text-neutral-400">
        {meal.strMeasure1 && meal.strIngredient1 ? (
          <li>
            {meal.strMeasure1} {meal.strIngredient1}
          </li>
        ) : null}
        {meal.strMeasure2 && meal.strIngredient2 ? (
          <li>
            {meal.strMeasure2} {meal.strIngredient2}
          </li>
        ) : null}
        {meal.strMeasure3 && meal.strIngredient3 ? (
          <li>
            {meal.strMeasure3} {meal.strIngredient3}
          </li>
        ) : null}
        {meal.strMeasure4 && meal.strIngredient4 ? (
          <li>
            {meal.strMeasure4} {meal.strIngredient4}
          </li>
        ) : null}
        {meal.strMeasure5 && meal.strIngredient5 ? (
          <li>
            {meal.strMeasure5} {meal.strIngredient5}
          </li>
        ) : null}
        {meal.strMeasure6 && meal.strIngredient6 ? (
          <li>
            {meal.strMeasure6} {meal.strIngredient6}
          </li>
        ) : null}
        {meal.strMeasure7 && meal.strIngredient7 ? (
          <li>
            {meal.strMeasure7} {meal.strIngredient7}
          </li>
        ) : null}
        {meal.strMeasure8 && meal.strIngredient8 ? (
          <li>
            {meal.strMeasure8} {meal.strIngredient8}
          </li>
        ) : null}
        {meal.strMeasure9 && meal.strIngredient9 ? (
          <li>
            {meal.strMeasure9} {meal.strIngredient9}
          </li>
        ) : null}
        {meal.strMeasure10 && meal.strIngredient10 ? (
          <li>
            {meal.strMeasure10} {meal.strIngredient10}
          </li>
        ) : null}
        {meal.strMeasure11 && meal.strIngredient11 ? (
          <li>
            {meal.strMeasure11} {meal.strIngredient11}
          </li>
        ) : null}
        {meal.strMeasure12 && meal.strIngredient12 ? (
          <li>
            {meal.strMeasure12} {meal.strIngredient12}
          </li>
        ) : null}
        {meal.strMeasure13 && meal.strIngredient13 ? (
          <li>
            {meal.strMeasure13} {meal.strIngredient13}
          </li>
        ) : null}
        {meal.strMeasure14 && meal.strIngredient14 ? (
          <li>
            {meal.strMeasure14} {meal.strIngredient14}
          </li>
        ) : null}
        {meal.strMeasure15 && meal.strIngredient15 ? (
          <li>
            {meal.strMeasure15} {meal.strIngredient15}
          </li>
        ) : null}
        {meal.strMeasure16 && meal.strIngredient16 ? (
          <li>
            {meal.strMeasure16} {meal.strIngredient16}
          </li>
        ) : null}
        {meal.strMeasure17 && meal.strIngredient17 ? (
          <li>
            {meal.strMeasure17} {meal.strIngredient17}
          </li>
        ) : null}
        {meal.strMeasure18 && meal.strIngredient18 ? (
          <li>
            {meal.strMeasure18} {meal.strIngredient18}
          </li>
        ) : null}
        {meal.strMeasure19 && meal.strIngredient19 ? (
          <li>
            {meal.strMeasure19} {meal.strIngredient19}
          </li>
        ) : null}
        {meal.strMeasure20 && meal.strIngredient20 ? (
          <li>
            {meal.strMeasure20} {meal.strIngredient20}
          </li>
        ) : null}
      </ol>
    </>
  );
}
