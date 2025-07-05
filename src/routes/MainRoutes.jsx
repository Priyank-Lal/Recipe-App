import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import Favourites from "../pages/Favourites";
import CreateRecipe from "../pages/CreateRecipe";
import RecipeDetails from "../pages/RecipeDetails";
import PageNotFound from "../pages/PageNotFound";

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
