import { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";
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

const Favourites = () => {
  const { favourites } = useContext(recipeContext);

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
            Your Favourite Recipes ❤️
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mt-2 max-w-xl mx-auto">
            Curated list of all your saved dishes!
          </p>
        </motion.div>

        {/* Favourites Grid */}
        <motion.div
          className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
        >
          {favourites.length > 0 ? (
            favourites.map((favouriteRecipe) => (
              <motion.div key={favouriteRecipe.id} variants={itemVariants}>
                <RecipeCard recipe={favouriteRecipe} />
              </motion.div>
            ))
          ) : (
            <motion.p
              className="text-center text-gray-500 col-span-full"
              variants={itemVariants}
            >
              No Favourite Recipes Found
            </motion.p>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Favourites;
