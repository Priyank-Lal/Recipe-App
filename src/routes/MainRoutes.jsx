import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy load pages
const Home = lazy(() => import("../pages/Home"));
const Recipes = lazy(() => import("../pages/Recipes"));
const Favourites = lazy(() => import("../pages/Favourites"));
const CreateRecipe = lazy(() => import("../pages/CreateRecipe"));
const RecipeDetails = lazy(() => import("../pages/RecipeDetails"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

const MainRoutes = () => {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/details/:id" element={<RecipeDetails />} />
        <Route path="/Favourites" element={<Favourites />} />
        <Route path="/createRecipe" element={<CreateRecipe />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
