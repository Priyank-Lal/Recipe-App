import { useContext, useEffect, useState } from "react";
import { recipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Recipes = () => {
  const { data } = useContext(recipeContext);

  const [search, setSearch] = useState("");
  const [displayedData, setDisplayedData] = useState(data);

  useEffect(() => {
    setDisplayedData(data);
  }, [data]);

  // Filter recipes based on title
  const handleSearch = () => {
    const results = data.filter((r) =>
      r.title.toLowerCase().includes(search.toLowerCase())
    );
    setDisplayedData(results);
  };

  const handleClear = () => {
    setSearch("");
    setDisplayedData(data);
  };

  return (
    <>
      {/* Heading */}
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

      {/* Search Box */}
      <div className="my-6 w-full flex  md:flex-row items-center justify-center gap-4 px-4">
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/2 md:w-1/2"
          variant="outlined"
          label="Search for Recipes"
          size="small"
        />
        <Button
          onClick={handleSearch}
          variant="contained"
          className="!py-2 !px-6"
        >
          Search
        </Button>
        <Button onClick={handleClear} variant="outlined" color="secondary">
          Clear
        </Button>
      </div>

      {/* Recipe Grid */}
      <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 px-6 pb-10">
        {displayedData.length > 0 ? (
          displayedData.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No Recipes Found
          </p>
        )}
      </div>
    </>
  );
};

export default Recipes;
