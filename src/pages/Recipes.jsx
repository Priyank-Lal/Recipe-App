import { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { data } = useContext(recipeContext);
  const renderRecipes = data.map((recipe) => {
    return <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>;
  });
  return (
    <>
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-green-700">
          Explore Delicious
        </h1>
        <h2 className="text-3xl font-semibold text-green-900 mt-2">
          Recipes{" "}
          <span className="inline-block animate-bounce animation-delay-3000">
            😋
          </span>
        </h2>
        <p className="text-gray-500 mt-2">
          Discover your next favorite meal below
        </p>
      </div>

      <div className="grid gap-10 grid-cols-3 sm:grid-cols-2 lg:grid-cols-3">
        {data.length > 0 ? renderRecipes : "No Recipes Available"}
      </div>
    </>
  );
};

export default Recipes;
