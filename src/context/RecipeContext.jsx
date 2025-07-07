import { createContext, useEffect, useState } from "react";
import chickenBiryani from "../images/chickenBiryani.webp";
import butterChicken from "../images/butterChicken.webp";
import avocadoToast from "../images/avocadoToastEgg.webp";
import chickenTandoori from "../images/chickenTandoori.webp";
import greekSalad from "../images/greekSalad.webp";
import mushroomSoup from "../images/mushroomSoup.webp";
import pancake from "../images/pancake.webp";
import paneerTikka from "../images/pannerTikka.webp";
import sushi from "../images/sushi.webp";
import salmonBowl from "../images/salmonBowl.webp";
import mediterraneanSalad from "../images/mediterraneanSalad.webp";
import garlicPasta from "../images/garlicPasta.webp";
import cake from "../images/cake.webp";

export const recipeContext = createContext(null);

const featuredRecipes = [
  {
    id: "20",
    title: "Creamy Garlic Pasta",
    description:
      "Rich and creamy pasta with roasted garlic and parmesan cheese",
    image: garlicPasta,
    time: "20 mins",
    servings: 4,
    category: "Dinner",
    taste: "Savory",
    cuisine: "Italian",
    chef: "Gianna Russo",
    ingredients:
      "Spaghetti, Garlic, Heavy cream, Parmesan cheese, Butter, Salt, Pepper",
    instructions:
      "Cook spaghetti. Sauté minced garlic in butter. Add cream, simmer, then add Parmesan. Toss in cooked pasta and season with salt and pepper.",
  },
  {
    id: "17",
    title: "Grilled Salmon Bowl",
    description: "Fresh grilled salmon with quinoa, avocado, and vegetables",
    image: salmonBowl,
    time: "30 mins",
    servings: 2,
    category: "Healthy",
    taste: "Fresh",
    cuisine: "Mediterranean",
    chef: "Noah Bennett",
    ingredients:
      "Salmon fillets, Quinoa, Avocado, Cucumber, Cherry tomatoes, Olive oil, Lemon juice, Salt, Pepper",
    instructions:
      "Grill seasoned salmon fillets. Cook quinoa. Prepare a bowl with sliced avocado, cucumber, tomatoes, and quinoa. Top with salmon and drizzle with olive oil and lemon.",
  },
  {
    id: "18",
    title: "Chocolate Lava Cake",
    description:
      "Decadent chocolate cake with molten center and vanilla ice cream",
    image: cake,
    time: "45 mins",
    servings: 6,
    category: "Dessert",
    taste: "Sweet",
    cuisine: "French",
    chef: "Clara Dubois",
    ingredients: "Dark chocolate, Butter, Eggs, Sugar, Flour, Vanilla extract",
    instructions:
      "Melt chocolate and butter. Whisk eggs and sugar until fluffy. Fold in chocolate mixture and flour. Pour into ramekins and bake until edges are firm but center is gooey.",
  },
  {
    id: "19",
    title: "Mediterranean Salad",
    description:
      "Fresh vegetables, olives, feta cheese with olive oil dressing",
    image: mediterraneanSalad,
    time: "15 mins",
    servings: 3,
    category: "Salad",
    taste: "Tangy",
    cuisine: "Greek",
    chef: "Yannis Kostas",
    ingredients:
      "Cucumber, Cherry tomatoes, Red onion, Kalamata olives, Feta cheese, Olive oil, Lemon juice, Oregano, Salt, Pepper",
    instructions:
      "Chop all vegetables. Mix in olives and feta. Whisk together olive oil, lemon juice, oregano, salt and pepper. Toss salad with dressing before serving.",
  },
];

const RecipeContext = ({ children }) => {
  const [data, setData] = useState([
    {
      id: "1",
      title: "Classic Margherita Pizza",
      ingredients:
        "Pizza dough, Tomato sauce, Fresh mozzarella cheese, Fresh basil leaves, Olive oil, Salt and pepper",
      instructions:
        "Preheat oven to 475°F. Roll out dough, spread sauce, top with mozzarella and basil, drizzle olive oil, bake 12‑15 min, slice and serve.",
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      category: "Dinner",
      chef: "Rahul Kumar",
      description:
        "An Italian classic made with fresh ingredients and lots of love. Perfect for dinner!",
      time: "30 mins",
      taste: "Savory",
      cuisine: "Italian",
      servings: 2,
    },
    {
      id: "2",
      title: "Chocolate Chip Cookies",
      ingredients:
        "Flour, Butter, Brown sugar, White sugar, Eggs, Vanilla extract, Baking soda, Salt, Chocolate chips",
      instructions:
        "Preheat oven to 350°F. Cream butter and sugars, beat in eggs & vanilla. Combine dry ingredients, fold in chips, drop on baking sheet, bake 10‑12 min, cool.",
      image: "https://cdn.dummyjson.com/recipe-images/3.webp",
      category: "Dessert",
      chef: "Emma Watson",
      description: "Soft and chewy homemade cookies that everyone will love.",
      time: "25 mins",
      taste: "Sweet",
      cuisine: "American",
      servings: 6,
    },
    {
      id: "4",
      title: "Chicken Alfredo Pasta",
      ingredients:
        "Fettuccine, Chicken breast, Heavy cream, Parmesan cheese, Garlic, Butter, Salt, Pepper, Parsley",
      instructions:
        "Cook pasta. Sauté chicken in butter, add garlic, pour cream & cheese, season, combine with pasta, garnish parsley.",
      image: "https://cdn.dummyjson.com/recipe-images/4.webp",
      category: "Dinner",
      chef: "Sophia Green",
      description:
        "Rich and creamy Alfredo pasta tossed with tender chicken pieces.",
      time: "35 mins",
      taste: "Savory",
      cuisine: "Italian",
      servings: 4,
    },
    {
      id: "5",
      title: "Mango Salsa Chicken",
      ingredients:
        "Chicken thighs, Mango, Red onion, Cilantro, Lime juice, Jalapeño, Salt, Pepper, Cooked rice",
      instructions:
        "Season and grill chicken. Mix mango, onion, cilantro, jalapeño, lime. Dice chicken, toss in salsa, serve over rice.",
      image: "https://cdn.dummyjson.com/recipe-images/5.webp",
      category: "Dinner",
      chef: "Carlos Mendez",
      description: "Juicy grilled chicken served with fresh mango salsa.",
      time: "40 mins",
      taste: "Sweet & Spicy",
      cuisine: "Mexican",
      servings: 4,
    },
    {
      id: "6",
      title: "Quinoa Salad with Avocado",
      ingredients:
        "Cooked quinoa, Avocado, Cherry tomatoes, Cucumber, Bell pepper, Feta cheese, Lemon vinaigrette, Salt, Pepper",
      instructions:
        "Combine all ingredients in bowl, drizzle vinaigrette, toss, season, chill and serve.",
      image: "https://cdn.dummyjson.com/recipe-images/6.webp",
      category: "Lunch",
      chef: "Isabella Rose",
      description: "A light, healthy salad full of flavor and nutrients.",
      time: "30 mins",
      taste: "Fresh",
      cuisine: "Mediterranean",
      servings: 3,
    },
    {
      id: "7",
      title: "Tomato Basil Bruschetta",
      ingredients:
        "Baguette, Tomatoes, Basil, Garlic, Balsamic glaze, Olive oil, Salt, Pepper",
      instructions:
        "Toast baguette slices. Mix tomatoes, basil, garlic, olive oil, salt & pepper. Top toast, drizzle balsamic, serve.",
      image: "https://cdn.dummyjson.com/recipe-images/7.webp",
      category: "Appetizer",
      chef: "Marco Rossi",
      description:
        "Crunchy bruschetta topped with fresh tomato and basil mixture.",
      time: "25 mins",
      taste: "Savory",
      cuisine: "Italian",
      servings: 4,
    },
    {
      id: "8",
      title: "Beef and Broccoli Stir‑Fry",
      ingredients:
        "Beef sirloin, Broccoli florets, Soy sauce, Oyster sauce, Sesame oil, Garlic, Ginger, Cornstarch, Rice",
      instructions:
        "Mix sauce. Stir‑fry beef, remove. Stir‑fry broccoli with garlic & ginger. Return beef, add sauce, serve over rice.",
      image: "https://cdn.dummyjson.com/recipe-images/8.webp",
      category: "Dinner",
      chef: "Li Wang",
      description:
        "Classic Asian stir‑fry with tender beef and fresh broccoli.",
      time: "35 mins",
      taste: "Umami",
      cuisine: "Asian",
      servings: 4,
    },
    {
      id: "9",
      title: "Spicy Paneer Tikka",
      ingredients:
        "Paneer cubes, Yogurt, Ginger‑garlic paste, Chili powder, Garam masala, Lemon juice, Salt, Bell peppers, Onion",
      instructions:
        "Marinate paneer & veggies in spiced yogurt. Skewer, grill at 200 °C for 15‑20 min. Serve with mint chutney.",
      image: paneerTikka,
      category: "Appetizer",
      chef: "Aarav Mehta",
      description:
        "A popular Indian appetizer made with marinated paneer and veggies grilled to perfection.",
      time: "45 mins",
      taste: "Spicy",
      cuisine: "Indian",
      servings: 4,
    },
    {
      id: "10",
      title: "Avocado Toast with Egg",
      ingredients:
        "Bread, Avocado, Lemon juice, Salt, Pepper, Chili flakes, Poached egg",
      instructions:
        "Toast bread. Mash avocado with lemon, salt & pepper. Spread on toast, top with poached egg & chili flakes.",
      image: avocadoToast,
      category: "Breakfast",
      chef: "Liam Turner",
      description:
        "A quick and healthy breakfast with creamy avocado and a perfectly poached egg.",
      time: "15 mins",
      taste: "Savory",
      cuisine: "American",
      servings: 1,
    },
    {
      id: "11",
      title: "Sushi Rolls",
      ingredients:
        "Sushi rice, Nori, Cucumber, Avocado, Crab sticks, Vinegar, Soy sauce, Wasabi",
      instructions:
        "Cook rice, season. Place nori, spread rice, add fillings, roll, slice, serve with soy and wasabi.",
      image: sushi,
      category: "Dinner",
      chef: "Hiroshi Tanaka",
      description:
        "Delicious homemade sushi rolls with a balance of fresh ingredients and flavor.",
      time: "50 mins",
      taste: "Umami",
      cuisine: "Japanese",
      servings: 6,
    },
    {
      id: "12",
      title: "Creamy Mushroom Soup",
      ingredients:
        "Mushrooms, Onion, Garlic, Butter, Broth, Cream, Salt, Pepper, Thyme",
      instructions:
        "Sauté mushrooms, onion, garlic in butter. Add broth, simmer, blend. Add cream, season, serve hot.",
      image: mushroomSoup,
      category: "Lunch",
      chef: "Isla Morgan",
      description:
        "A comforting creamy soup packed with the rich flavor of fresh mushrooms.",
      time: "35 mins",
      taste: "Savory",
      cuisine: "French",
      servings: 4,
    },
    {
      id: "13",
      title: "Pancakes with Maple Syrup",
      ingredients:
        "Flour, Eggs, Milk, Baking powder, Butter, Sugar, Salt, Maple syrup",
      instructions:
        "Mix wet & dry ingredients. Cook on griddle until golden. Serve with maple syrup.",
      image: pancake,
      category: "Breakfast",
      chef: "Olivia Brown",
      description:
        "Fluffy pancakes served with a generous drizzle of maple syrup – perfect weekend breakfast!",
      time: "20 mins",
      taste: "Sweet",
      cuisine: "American",
      servings: 4,
    },
    {
      id: "14",
      title: "Tandoori Chicken",
      ingredients:
        "Chicken drumsticks, Yogurt, Lemon juice, Ginger‑garlic paste, Spices, Mustard oil",
      instructions:
        "Marinate chicken for 6‑8 hrs, grill or bake at 220 °C for 30 min. Serve with onion & lemon.",
      image: chickenTandoori,
      category: "Dinner",
      chef: "Rajeev Sharma",
      description:
        "Smoky, spicy and juicy grilled chicken — a true Indian classic.",
      time: "50 mins",
      taste: "Spicy",
      cuisine: "Indian",
      servings: 4,
    },
    {
      id: "15",
      title: "Greek Salad",
      ingredients:
        "Cucumber, Tomatoes, Onion, Olives, Feta, Olive oil, Lemon juice, Oregano",
      instructions:
        "Chop veggies, mix with olives & feta, drizzle oil & lemon, toss well, serve.",
      image: greekSalad,
      category: "Lunch",
      chef: "Nikos Papadopoulos",
      description:
        "A refreshing and healthy salad bursting with Mediterranean flavors.",
      time: "15 mins",
      taste: "Fresh",
      cuisine: "Greek",
      servings: 3,
    },
    {
      id: "16",
      title: "Butter Chicken",
      ingredients:
        "Boneless chicken, Butter, Tomato puree, Cream, Garlic, Ginger, Spices, Fenugreek leaves",
      instructions:
        "Cook chicken, prepare creamy tomato sauce, combine and simmer with fenugreek, serve with naan.",
      image: butterChicken,
      category: "Dinner",
      chef: "Neha Kapoor",
      description:
        "Creamy, rich and mildly spiced chicken curry — a restaurant-style treat at home.",
      time: "45 mins",
      taste: "Rich & Spicy",
      cuisine: "Indian",
      servings: 4,
    },
    {
      id: "21",
      title: "Chicken Biryani",
      description:
        "A fragrant and flavorful Indian rice dish made with marinated chicken, aromatic spices, and basmati rice, layered and cooked to perfection.",
      image: chickenBiryani,
      category: "Dinner",
      chef: "Zainab Khan",
      time: "60 mins",
      servings: 4,
      taste: "Spicy",
      cuisine: "Indian",
      ingredients:
        "Basmati rice, Chicken (bone-in), Yogurt, Onions, Tomatoes, Garlic, Ginger, Green chilies, Biryani masala, Turmeric, Red chili powder, Coriander powder, Garam masala, Fresh coriander, Mint leaves, Ghee, Oil, Salt, Saffron (optional), Milk",
      instructions:
        "Marinate chicken in yogurt, spices, ginger-garlic paste. Fry onions until golden. Add tomatoes and cook until soft. Add marinated chicken and cook until done. Boil basmati rice with whole spices until 70% cooked. In a pot, layer rice and chicken alternately. Add fried onions, coriander, mint, saffron milk. Cover tightly and cook on low heat for 20–25 mins (dum). Serve hot with raita or salad.",
    },
  ]);
  const [favourites, setFavourites] = useState(() => {
    try {
      const saved = localStorage.getItem("favourites");
      return saved && saved !== "undefined" ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Error parsing favourites from localStorage:", e);
      return [];
    }
  });

  useEffect(() => {
    const loadData = () => {
      const saved = localStorage.getItem("Recipes");
      let baseData = saved ? JSON.parse(saved) : [];

      // Add featured recipes if missing
      featuredRecipes.forEach((featured) => {
        if (!baseData.some((r) => r.id === featured.id)) {
          baseData.push(featured);
        }
      });

      setData(baseData);
      localStorage.setItem("Recipes", JSON.stringify(baseData));
    };

    loadData();
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("Recipes", JSON.stringify(data));
    } catch (e) {
      console.error("Error saving recipes to localStorage:", e);
    }
  }, [data]);

  useEffect(() => {
    try {
      localStorage.setItem("favourites", JSON.stringify(favourites));
    } catch (e) {
      console.error("Error saving favourites to localStorage:", e);
    }
  }, [favourites]);

  return (
    <recipeContext.Provider
      value={{ data, setData, favourites, setFavourites }}
    >
      {children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;

const defaultRecipes = [
  {
    id: "1",
    title: "Classic Margherita Pizza",
    ingredients:
      "Pizza dough, Tomato sauce, Fresh mozzarella cheese, Fresh basil leaves, Olive oil, Salt and pepper",
    instructions:
      "Preheat oven to 475°F. Roll out dough, spread sauce, top with mozzarella and basil, drizzle olive oil, bake 12‑15 min, slice and serve.",
    image: "https://cdn.dummyjson.com/recipe-images/1.webp",
    category: "Dinner",
    chef: "Rahul Kumar",
    description:
      "An Italian classic made with fresh ingredients and lots of love. Perfect for dinner!",
    time: "30 mins",
    taste: "Savory",
    cuisine: "Italian",
    servings: 2,
  },
  {
    id: "2",
    title: "Chocolate Chip Cookies",
    ingredients:
      "Flour, Butter, Brown sugar, White sugar, Eggs, Vanilla extract, Baking soda, Salt, Chocolate chips",
    instructions:
      "Preheat oven to 350°F. Cream butter and sugars, beat in eggs & vanilla. Combine dry ingredients, fold in chips, drop on baking sheet, bake 10‑12 min, cool.",
    image: "https://cdn.dummyjson.com/recipe-images/3.webp",
    category: "Dessert",
    chef: "Emma Watson",
    description: "Soft and chewy homemade cookies that everyone will love.",
    time: "25 mins",
    taste: "Sweet",
    cuisine: "American",
    servings: 6,
  },
  {
    id: "4",
    title: "Chicken Alfredo Pasta",
    ingredients:
      "Fettuccine, Chicken breast, Heavy cream, Parmesan cheese, Garlic, Butter, Salt, Pepper, Parsley",
    instructions:
      "Cook pasta. Sauté chicken in butter, add garlic, pour cream & cheese, season, combine with pasta, garnish parsley.",
    image: "https://cdn.dummyjson.com/recipe-images/4.webp",
    category: "Dinner",
    chef: "Sophia Green",
    description:
      "Rich and creamy Alfredo pasta tossed with tender chicken pieces.",
    time: "35 mins",
    taste: "Savory",
    cuisine: "Italian",
    servings: 4,
  },
  {
    id: "5",
    title: "Mango Salsa Chicken",
    ingredients:
      "Chicken thighs, Mango, Red onion, Cilantro, Lime juice, Jalapeño, Salt, Pepper, Cooked rice",
    instructions:
      "Season and grill chicken. Mix mango, onion, cilantro, jalapeño, lime. Dice chicken, toss in salsa, serve over rice.",
    image: "https://cdn.dummyjson.com/recipe-images/5.webp",
    category: "Dinner",
    chef: "Carlos Mendez",
    description: "Juicy grilled chicken served with fresh mango salsa.",
    time: "40 mins",
    taste: "Sweet & Spicy",
    cuisine: "Mexican",
    servings: 4,
  },
  {
    id: "6",
    title: "Quinoa Salad with Avocado",
    ingredients:
      "Cooked quinoa, Avocado, Cherry tomatoes, Cucumber, Bell pepper, Feta cheese, Lemon vinaigrette, Salt, Pepper",
    instructions:
      "Combine all ingredients in bowl, drizzle vinaigrette, toss, season, chill and serve.",
    image: "https://cdn.dummyjson.com/recipe-images/6.webp",
    category: "Lunch",
    chef: "Isabella Rose",
    description: "A light, healthy salad full of flavor and nutrients.",
    time: "30 mins",
    taste: "Fresh",
    cuisine: "Mediterranean",
    servings: 3,
  },
  {
    id: "7",
    title: "Tomato Basil Bruschetta",
    ingredients:
      "Baguette, Tomatoes, Basil, Garlic, Balsamic glaze, Olive oil, Salt, Pepper",
    instructions:
      "Toast baguette slices. Mix tomatoes, basil, garlic, olive oil, salt & pepper. Top toast, drizzle balsamic, serve.",
    image: "https://cdn.dummyjson.com/recipe-images/7.webp",
    category: "Appetizer",
    chef: "Marco Rossi",
    description:
      "Crunchy bruschetta topped with fresh tomato and basil mixture.",
    time: "25 mins",
    taste: "Savory",
    cuisine: "Italian",
    servings: 4,
  },
  {
    id: "8",
    title: "Beef and Broccoli Stir‑Fry",
    ingredients:
      "Beef sirloin, Broccoli florets, Soy sauce, Oyster sauce, Sesame oil, Garlic, Ginger, Cornstarch, Rice",
    instructions:
      "Mix sauce. Stir‑fry beef, remove. Stir‑fry broccoli with garlic & ginger. Return beef, add sauce, serve over rice.",
    image: "https://cdn.dummyjson.com/recipe-images/8.webp",
    category: "Dinner",
    chef: "Li Wang",
    description: "Classic Asian stir‑fry with tender beef and fresh broccoli.",
    time: "35 mins",
    taste: "Umami",
    cuisine: "Asian",
    servings: 4,
  },
  {
    id: "9",
    title: "Spicy Paneer Tikka",
    ingredients:
      "Paneer cubes, Yogurt, Ginger‑garlic paste, Chili powder, Garam masala, Lemon juice, Salt, Bell peppers, Onion",
    instructions:
      "Marinate paneer & veggies in spiced yogurt. Skewer, grill at 200 °C for 15‑20 min. Serve with mint chutney.",
    image: paneerTikka,
    category: "Appetizer",
    chef: "Aarav Mehta",
    description:
      "A popular Indian appetizer made with marinated paneer and veggies grilled to perfection.",
    time: "45 mins",
    taste: "Spicy",
    cuisine: "Indian",
    servings: 4,
  },
  {
    id: "10",
    title: "Avocado Toast with Egg",
    ingredients:
      "Bread, Avocado, Lemon juice, Salt, Pepper, Chili flakes, Poached egg",
    instructions:
      "Toast bread. Mash avocado with lemon, salt & pepper. Spread on toast, top with poached egg & chili flakes.",
    image: avocadoToast,
    category: "Breakfast",
    chef: "Liam Turner",
    description:
      "A quick and healthy breakfast with creamy avocado and a perfectly poached egg.",
    time: "15 mins",
    taste: "Savory",
    cuisine: "American",
    servings: 1,
  },
  {
    id: "11",
    title: "Sushi Rolls",
    ingredients:
      "Sushi rice, Nori, Cucumber, Avocado, Crab sticks, Vinegar, Soy sauce, Wasabi",
    instructions:
      "Cook rice, season. Place nori, spread rice, add fillings, roll, slice, serve with soy and wasabi.",
    image: sushi,
    category: "Dinner",
    chef: "Hiroshi Tanaka",
    description:
      "Delicious homemade sushi rolls with a balance of fresh ingredients and flavor.",
    time: "50 mins",
    taste: "Umami",
    cuisine: "Japanese",
    servings: 6,
  },
  {
    id: "12",
    title: "Creamy Mushroom Soup",
    ingredients:
      "Mushrooms, Onion, Garlic, Butter, Broth, Cream, Salt, Pepper, Thyme",
    instructions:
      "Sauté mushrooms, onion, garlic in butter. Add broth, simmer, blend. Add cream, season, serve hot.",
    image: mushroomSoup,
    category: "Lunch",
    chef: "Isla Morgan",
    description:
      "A comforting creamy soup packed with the rich flavor of fresh mushrooms.",
    time: "35 mins",
    taste: "Savory",
    cuisine: "French",
    servings: 4,
  },
  {
    id: "13",
    title: "Pancakes with Maple Syrup",
    ingredients:
      "Flour, Eggs, Milk, Baking powder, Butter, Sugar, Salt, Maple syrup",
    instructions:
      "Mix wet & dry ingredients. Cook on griddle until golden. Serve with maple syrup.",
    image: pancake,
    category: "Breakfast",
    chef: "Olivia Brown",
    description:
      "Fluffy pancakes served with a generous drizzle of maple syrup – perfect weekend breakfast!",
    time: "20 mins",
    taste: "Sweet",
    cuisine: "American",
    servings: 4,
  },
  {
    id: "14",
    title: "Tandoori Chicken",
    ingredients:
      "Chicken drumsticks, Yogurt, Lemon juice, Ginger‑garlic paste, Spices, Mustard oil",
    instructions:
      "Marinate chicken for 6‑8 hrs, grill or bake at 220 °C for 30 min. Serve with onion & lemon.",
    image: chickenTandoori,
    category: "Dinner",
    chef: "Rajeev Sharma",
    description:
      "Smoky, spicy and juicy grilled chicken — a true Indian classic.",
    time: "50 mins",
    taste: "Spicy",
    cuisine: "Indian",
    servings: 4,
  },
  {
    id: "15",
    title: "Greek Salad",
    ingredients:
      "Cucumber, Tomatoes, Onion, Olives, Feta, Olive oil, Lemon juice, Oregano",
    instructions:
      "Chop veggies, mix with olives & feta, drizzle oil & lemon, toss well, serve.",
    image: greekSalad,
    category: "Lunch",
    chef: "Nikos Papadopoulos",
    description:
      "A refreshing and healthy salad bursting with Mediterranean flavors.",
    time: "15 mins",
    taste: "Fresh",
    cuisine: "Greek",
    servings: 3,
  },
  {
    id: "16",
    title: "Butter Chicken",
    ingredients:
      "Boneless chicken, Butter, Tomato puree, Cream, Garlic, Ginger, Spices, Fenugreek leaves",
    instructions:
      "Cook chicken, prepare creamy tomato sauce, combine and simmer with fenugreek, serve with naan.",
    image: butterChicken,
    category: "Dinner",
    chef: "Neha Kapoor",
    description:
      "Creamy, rich and mildly spiced chicken curry — a restaurant-style treat at home.",
    time: "45 mins",
    taste: "Rich & Spicy",
    cuisine: "Indian",
    servings: 4,
  },
  {
    id: "21",
    title: "Chicken Biryani",
    description:
      "A fragrant and flavorful Indian rice dish made with marinated chicken, aromatic spices, and basmati rice, layered and cooked to perfection.",
    image: chickenBiryani,
    category: "Dinner",
    chef: "Zainab Khan",
    time: "60 mins",
    servings: 4,
    taste: "Spicy",
    cuisine: "Indian",
    ingredients:
      "Basmati rice, Chicken (bone-in), Yogurt, Onions, Tomatoes, Garlic, Ginger, Green chilies, Biryani masala, Turmeric, Red chili powder, Coriander powder, Garam masala, Fresh coriander, Mint leaves, Ghee, Oil, Salt, Saffron (optional), Milk",
    instructions:
      "Marinate chicken in yogurt, spices, ginger-garlic paste. Fry onions until golden. Add tomatoes and cook until soft. Add marinated chicken and cook until done. Boil basmati rice with whole spices until 70% cooked. In a pot, layer rice and chicken alternately. Add fried onions, coriander, mint, saffron milk. Cover tightly and cook on low heat for 20–25 mins (dum). Serve hot with raita or salad.",
  },
];
