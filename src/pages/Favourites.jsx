import { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Favourites = () => {
  const { favourites } = useContext(recipeContext);

  return (
    <>
      <div className="grid gap-10 grid-cols-3 sm:grid-cols-2 lg:grid-cols-3">
        {favourites.length > 0 ? (
          favourites.map((favouriteRecipe) => (
            <RecipeCard key={favouriteRecipe.id} recipe={favouriteRecipe} />
          ))
        ) : (
          <p className="text-gray-500 text-lg">No Recipes Available</p>
        )}
      </div>
    </>
  );
};

export default Favourites;
