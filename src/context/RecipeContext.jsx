import React, { createContext, useEffect, useState } from "react";

export const recipeContext = createContext(null);

const RecipeContext = ({ children }) => {
  const [data, setData] = useState([
    {
      id: "1",
      title: "Classic Margherita Pizza",
      ingredients:
        "Pizza dough, Tomato sauce, Fresh mozzarella cheese, Fresh basil leaves, Olive oil, Salt and pepper to taste",
      instructions:
        "Preheat the oven to 475°F (245°C). Roll out the pizza dough and spread tomato sauce evenly. Top with slices of fresh mozzarella and fresh basil leaves. Drizzle with olive oil and season with salt and pepper. Bake in the preheated oven for 12-15 minutes or until the crust is golden brown. Slice and serve hot.",
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
      id: "2",
      title: "Chocolate Chip Cookies",
      ingredients:
        "All-purpose flour, Butter (softened), Brown sugar, White sugar, Eggs, Vanilla extract, Baking soda, Salt, Chocolate chips",
      instructions:
        "Preheat the oven to 350°F (175°C). In a bowl, cream together softened butter, brown sugar, and white sugar. Beat in eggs one at a time, then stir in vanilla extract. Combine flour, baking soda, and salt. Gradually add to the wet ingredients. Fold in chocolate chips. Drop rounded tablespoons of dough onto ungreased baking sheets. Bake for 10-12 minutes or until edges are golden brown. Allow cookies to cool before transferring to a wire rack.",
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
    {
      id: "4",
      title: "Chicken Alfredo Pasta",
      ingredients:
        "Fettuccine pasta, Chicken breast (sliced), Heavy cream, Parmesan cheese (grated), Garlic (minced), Butter, Salt and pepper, Fresh parsley",
      instructions:
        "Cook fettuccine pasta according to package instructions. In a pan, sauté sliced chicken in butter until fully cooked. Add minced garlic and cook until fragrant. Pour in heavy cream and grated Parmesan cheese. Stir until melted. Season with salt and pepper. Combine with cooked pasta and garnish with parsley.",
      image: "https://cdn.dummyjson.com/recipe-images/4.webp",
      category: "Dinner",
      chef: "Sophia Green",
      description:
        "Rich and creamy Alfredo pasta tossed with tender chicken pieces.",
      duration: "35 mins",
      rating: 4.9,
      reviewCount: 82,
      taste: "Savory",
      cuisine: "Italian",
    },
    {
      id: "5",
      title: "Mango Salsa Chicken",
      ingredients:
        "Chicken thighs, Mango (diced), Red onion (chopped), Cilantro (chopped), Lime juice, Jalapeño (minced), Salt and pepper, Cooked rice",
      instructions:
        "Season chicken thighs with salt and pepper. Grill or bake chicken until cooked. In a bowl, mix diced mango, red onion, cilantro, jalapeño, and lime juice. Dice chicken and mix with salsa. Serve over cooked rice.",
      image: "https://cdn.dummyjson.com/recipe-images/5.webp",
      category: "Dinner",
      chef: "Carlos Mendez",
      description: "Juicy grilled chicken served with fresh mango salsa.",
      duration: "40 mins",
      rating: 4.9,
      reviewCount: 63,
      taste: "Sweet & Spicy",
      cuisine: "Mexican",
    },
    {
      id: "6",
      title: "Quinoa Salad with Avocado",
      ingredients:
        "Cooked quinoa, Avocado (diced), Cherry tomatoes (halved), Cucumber (diced), Red bell pepper (diced), Feta cheese (crumbled), Lemon vinaigrette, Salt and pepper",
      instructions:
        "Combine quinoa, avocado, cherry tomatoes, cucumber, bell pepper, and feta cheese in a bowl. Drizzle with lemon vinaigrette and toss. Season with salt and pepper. Chill before serving.",
      image: "https://cdn.dummyjson.com/recipe-images/6.webp",
      category: "Lunch",
      chef: "Isabella Rose",
      description: "A light, healthy salad full of flavor and nutrients.",
      duration: "30 mins",
      rating: 4.4,
      reviewCount: 59,
      taste: "Fresh",
      cuisine: "Mediterranean",
    },
    {
      id: "7",
      title: "Tomato Basil Bruschetta",
      ingredients:
        "Baguette (sliced), Tomatoes (diced), Fresh basil (chopped), Garlic (minced), Balsamic glaze, Olive oil, Salt and pepper",
      instructions:
        "Preheat oven to 375°F (190°C). Toast baguette slices. In a bowl, mix tomatoes, basil, garlic, olive oil, salt and pepper. Top each toast with the mixture. Drizzle with balsamic glaze.",
      image: "https://cdn.dummyjson.com/recipe-images/7.webp",
      category: "Appetizer",
      chef: "Marco Rossi",
      description:
        "Crunchy bruschetta topped with fresh tomato and basil mixture.",
      duration: "25 mins",
      rating: 4.7,
      reviewCount: 95,
      taste: "Savory",
      cuisine: "Italian",
    },
    {
      id: "8",
      title: "Beef and Broccoli Stir-Fry",
      ingredients:
        "Beef sirloin (thinly sliced), Broccoli florets, Soy sauce, Oyster sauce, Sesame oil, Garlic (minced), Ginger (minced), Cornstarch, Cooked white rice",
      instructions:
        "Mix soy sauce, oyster sauce, sesame oil, and cornstarch. Stir-fry beef until browned. Remove. Stir-fry broccoli, garlic, and ginger. Return beef and add sauce. Mix well and serve over rice.",
      image: "https://cdn.dummyjson.com/recipe-images/8.webp",
      category: "Dinner",
      chef: "Li Wang",
      description:
        "Classic Asian stir-fry with tender beef and fresh broccoli.",
      duration: "35 mins",
      rating: 4.7,
      reviewCount: 58,
      taste: "Umami",
      cuisine: "Asian",
    },
    {
      id: "9",
      title: "Spicy Paneer Tikka",
      ingredients:
        "Paneer cubes, Yogurt, Ginger-garlic paste, Red chili powder, Garam masala, Lemon juice, Salt, Bell peppers, Onion",
      instructions:
        "In a bowl, mix yogurt, ginger-garlic paste, spices, and lemon juice. Marinate paneer and veggies for 1 hour. Skewer paneer and vegetables alternately. Grill or bake at 200°C for 15-20 mins until charred. Serve with mint chutney.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMe8NRDNujsBstrK8GUNBRDnGLRnAjs9MPMA&s",
      category: "Appetizer",
      chef: "Aarav Mehta",
      description:
        "A popular Indian appetizer made with marinated paneer and veggies grilled to perfection.",
      duration: "45 mins",
      rating: 4.6,
      reviewCount: 110,
      taste: "Spicy",
      cuisine: "Indian",
    },
    {
      id: "10",
      title: "Avocado Toast with Egg",
      ingredients:
        "Bread slices, Ripe avocados, Lemon juice, Salt, Black pepper, Red chili flakes, Poached egg",
      instructions:
        "Toast the bread until crispy. Mash avocado with lemon juice, salt, and pepper. Spread on toast. Top with poached egg and sprinkle chili flakes. Serve immediately.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQOvqRpQDxJbK8xbpBwuxRuzsxVSsdaDGxaQ&s",
      category: "Breakfast",
      chef: "Liam Turner",
      description:
        "A quick and healthy breakfast with creamy avocado and a perfectly poached egg.",
      duration: "15 mins",
      rating: 4.8,
      reviewCount: 89,
      taste: "Savory",
      cuisine: "American",
    },
    {
      id: "11",
      title: "Sushi Rolls",
      ingredients:
        "Sushi rice, Nori sheets, Cucumber, Avocado, Crab sticks, Rice vinegar, Soy sauce, Wasabi",
      instructions:
        "Cook and season sushi rice. Place nori on mat, spread rice evenly. Add fillings. Roll tightly and slice with a sharp knife. Serve with soy sauce and wasabi.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIKDPBk5NhlHhutniIVNVZ80RyHdyLzmFIkA&s",
      category: "Dinner",
      chef: "Hiroshi Tanaka",
      description:
        "Delicious homemade sushi rolls with a balance of fresh ingredients and flavor.",
      duration: "50 mins",
      rating: 4.7,
      reviewCount: 102,
      taste: "Umami",
      cuisine: "Japanese",
    },
    {
      id: "12",
      title: "Creamy Mushroom Soup",
      ingredients:
        "Mushrooms, Onion, Garlic, Butter, Vegetable broth, Heavy cream, Salt, Black pepper, Thyme",
      instructions:
        "Sauté mushrooms, onion, and garlic in butter. Add broth and simmer. Blend until smooth. Add cream, season, and heat gently. Serve hot with toast.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM5KCZ3tE858lTSbHUpmJjXyvR0LmirCKLfA&s",
      category: "Lunch",
      chef: "Isla Morgan",
      description:
        "A comforting creamy soup packed with the rich flavor of fresh mushrooms.",
      duration: "35 mins",
      rating: 4.5,
      reviewCount: 76,
      taste: "Savory",
      cuisine: "French",
    },
    {
      id: "13",
      title: "Pancakes with Maple Syrup",
      ingredients:
        "All-purpose flour, Eggs, Milk, Baking powder, Butter, Sugar, Salt, Maple syrup",
      instructions:
        "Whisk flour, sugar, baking powder, and salt. Mix eggs, milk, and butter separately. Combine wet and dry ingredients. Cook on a hot griddle until golden. Serve with maple syrup.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTaNViGP8myfMtCU8kk6V_33Bu_wTy7cS3lg&s",
      category: "Breakfast",
      chef: "Olivia Brown",
      description:
        "Fluffy pancakes served with a generous drizzle of maple syrup – perfect weekend breakfast!",
      duration: "20 mins",
      rating: 4.9,
      reviewCount: 134,
      taste: "Sweet",
      cuisine: "American",
    },
    {
      id: "14",
      title: "Tandoori Chicken",
      ingredients:
        "Chicken drumsticks, Yogurt, Lemon juice, Ginger-garlic paste, Red chili powder, Garam masala, Cumin powder, Salt, Mustard oil",
      instructions:
        "Mix yogurt, spices, ginger-garlic paste, and lemon juice. Marinate chicken for 6-8 hours. Grill or bake at 220°C for 30 mins until charred. Serve hot with onion rings and lemon wedges.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVjiAxC3ahbiOQ-tvNJYDteQcUYi3GahDnMQ&s",
      category: "Dinner",
      chef: "Rajeev Sharma",
      description:
        "Smoky, spicy and juicy grilled chicken — a true Indian classic.",
      duration: "50 mins (plus marination)",
      rating: 4.8,
      reviewCount: 176,
      taste: "Spicy",
      cuisine: "Indian",
    },
    {
      id: "15",
      title: "Greek Salad",
      ingredients:
        "Cucumber, Tomatoes, Red onion, Kalamata olives, Feta cheese, Olive oil, Lemon juice, Oregano, Salt, Pepper",
      instructions:
        "Chop cucumber, tomatoes, onion. Mix with olives and feta. Drizzle olive oil, lemon juice, and oregano. Toss well and serve fresh.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUeEtG_pS-BxJLb4lclUicJXkT4aHooDIkyw&s",
      category: "Lunch",
      chef: "Nikos Papadopoulos",
      description:
        "A refreshing and healthy salad bursting with Mediterranean flavors.",
      duration: "15 mins",
      rating: 4.6,
      reviewCount: 97,
      taste: "Fresh",
      cuisine: "Greek",
    },
    {
      id: "16",
      title: "Butter Chicken",
      ingredients:
        "Boneless chicken, Butter, Tomato puree, Cream, Garlic, Ginger, Garam masala, Red chili powder, Fenugreek leaves, Salt",
      instructions:
        "Cook marinated chicken. In another pan, cook tomato puree with spices and butter. Add cream and chicken. Simmer and finish with fenugreek leaves. Serve with naan.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0MoQGlq3WXHRDTZXKNe4b5HMD_WGuJA5CBA&s",
      category: "Dinner",
      chef: "Neha Kapoor",
      description:
        "Creamy, rich and mildly spiced chicken curry — a restaurant-style treat at home.",
      duration: "45 mins",
      rating: 4.9,
      reviewCount: 204,
      taste: "Rich & Spicy",
      cuisine: "Indian",
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
