import React, { createContext, useEffect, useState } from "react";

export const recipeContext = createContext(null);

const RecipeContext = ({ children }) => {
  const [data, setData] = useState([
    {
      id: "1",
      title: "Classic Margherita Pizza",
      ingredients: "",
      instructions:
        "Preheat the oven to 475°F (245°C).Roll out the pizza dough and spread tomato sauce evenly.Top with slices of fresh mozzarella and fresh basil leaves.Drizzle with olive oil and season with salt and pepper.Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.Slice and serve hot.",
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      category: "Dinner",
      chef: "Rahul Kumar",
      description:
        "An Italian classic made with fresh ingredients and lots of love. Perfect for dinner!",
      duration: "30 mins",
      rating: 4.7,
      reviewCount: 256,
      taste: "Savory",
      cuisine: "Italian",
    },
    {
      id: "3",
      title: "Chocolate Chip Cookies",
      ingredients:
        "All-purpose flour Butter, softened Brown sugar White sugar Eggs Vanilla extract Baking soda Salt Chocolate chips",
      instructions:
        "Preheat the oven to 350°F (175°C).In a bowl, cream together softened butter, brown sugar, and white sugar.Beat in eggs one at a time, then stir in vanilla extract.Combine flour, baking soda, and salt. Gradually add to the wet ingredients.Fold in chocolate chips.Drop rounded tablespoons of dough onto ungreased baking sheets.Bake for 10-12 minutes or until edges are golden brown.Allow cookies to cool on the baking sheet for a few minutes before transferring to a wire rack.",
      image: "https://cdn.dummyjson.com/recipe-images/3.webp",
      category: "Dessert",
      chef: "Emma Watson",
      description: "Soft and chewy homemade cookies that everyone will love.",
      duration: "25 mins",
      rating: 4.9,
      reviewCount: 13,
      taste: "Sweet",
      cuisine: "American",
    },
  ]);

  const [favourites, setFavourites] = useState(() => {
    const saved = localStorage.getItem("favourites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const saved = localStorage.getItem("Recipes");
    if (saved) {
      setData(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  useEffect(() => {
    localStorage.setItem("Recipes", JSON.stringify(data));
  }, [data]);

  return (
    <recipeContext.Provider
      value={{ data, setData, favourites, setFavourites }}
    >
      {children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;
