import { useContext, useEffect, useState } from "react";
import { recipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const Recipes = () => {
  const { data } = useContext(recipeContext);

  const [search, setSearch] = useState("");
  const [displayedData, setDisplayedData] = useState(data);

  useEffect(() => {
    setDisplayedData(data);
  }, [data]);

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
    <motion.section
      className="py-20 bg-gradient-to-b from-white to-emerald-50 min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Explore Delicious <span className="inline-block">Recipes 😋</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mt-2 max-w-xl mx-auto">
            Discover your next favorite meal below
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          variants={itemVariants}
          className="flex sm:flex-row justify-center items-center gap-4 mb-12"
        >
          <TextField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-1/2"
            variant="outlined"
            label="Search for Recipes"
            size="small"
            color="success"
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
        </motion.div>

        {/* Recipes Grid */}
        <motion.div
          className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
        >
          {displayedData.length > 0 ? (
            displayedData
              .filter((recipe) => !["20", "17", "18", "19"].includes(recipe.id))
              .map((recipe) => (
                <motion.div key={recipe.id} variants={itemVariants}>
                  <RecipeCard recipe={recipe} />
                </motion.div>
              ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No Recipes Found
            </p>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Recipes;
