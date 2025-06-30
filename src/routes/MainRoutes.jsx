// MainRoutes.jsx
import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton"; // ✅ Required import

import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import Favourites from "../pages/Favourites";
import CreateRecipe from "../pages/CreateRecipe";
import RecipeDetails from "../pages/RecipeDetails";
import PageNotFound from "../pages/PageNotFound";
// Lazy import for code splitting
// const Home = lazy(() => import("../pages/Home"));
// const Recipes = lazy(() => import("../pages/Recipes"));
// const Favourites = lazy(() => import("../pages/Favourites"));
// const CreateRecipe = lazy(() => import("../pages/CreateRecipe"));
// const RecipeDetails = lazy(() => import("../pages/RecipeDetails"));

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/details/:id" element={<RecipeDetails />} />
      <Route path="/Favourites" element={<Favourites />} />
      <Route path="/createRecipe" element={<CreateRecipe />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;
