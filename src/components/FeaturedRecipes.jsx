import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import { Clock, Users, Heart, UtensilsCrossed } from "lucide-react";
import { toast } from "react-toastify";


const FeaturedRecipes = () => {
  const { favourites, setFavourites } =
    useContext(recipeContext);

  const featuredRecipes = [
    {
      id: "20",
      title: "Creamy Garlic Pasta",
      description:
        "Rich and creamy pasta with roasted garlic and parmesan cheese",
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600",
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
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
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
      image:
        "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600",
      time: "45 mins",
      servings: 6,
      category: "Dessert",
      taste: "Sweet",
      cuisine: "French",
      chef: "Clara Dubois",
      ingredients:
        "Dark chocolate, Butter, Eggs, Sugar, Flour, Vanilla extract",
      instructions:
        "Melt chocolate and butter. Whisk eggs and sugar until fluffy. Fold in chocolate mixture and flour. Pour into ramekins and bake until edges are firm but center is gooey.",
    },
    {
      id: "19",
      title: "Mediterranean Salad",
      description:
        "Fresh vegetables, olives, feta cheese with olive oil dressing",
      image:
        "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=600",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured Recipes
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Our most loved recipes, hand-picked and ready to inspire your next
            meal.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {featuredRecipes.map((recipe) => {
            const isFavourite = favourites.some((f) => f.id === recipe.id);

            const toggleFavourite = (e) => {
              e.preventDefault();
              if (isFavourite) {
                setFavourites(favourites.filter((f) => f.id !== recipe.id));
                toast.info("Removed from Favourites!");
              } else {
                setFavourites([...favourites, recipe]);
                toast.success("Added to Favourites!");
              }
            };
            

            return (
              <motion.div
                key={recipe.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-shadow duration-300 flex flex-col h-full"
              >
                <div className="relative">
                  <img
                    loading="lazy"
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white rounded-full p-2 shadow-md hover:bg-red-50 cursor-pointer"
                      onClick={toggleFavourite}
                    >
                      <Heart
                        className={`h-5 w-5 ${
                          isFavourite
                            ? "text-red-500 fill-red-500"
                            : "text-gray-600 hover:text-red-500"
                        }`}
                      />
                    </motion.button>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-emerald-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {recipe.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                    {recipe.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {recipe.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4 mt-auto">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{recipe.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{recipe.servings}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <UtensilsCrossed className="h-4 w-4 text-emerald-500" />
                      <span>{recipe.cuisine}</span>
                    </div>
                  </div>

                  <Link to={`/recipes/details/${recipe.id}`} className="mt-2">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full bg-emerald-600 text-white py-2.5 rounded-xl font-medium hover:bg-emerald-700 transition cursor-pointer"
                    >
                      View Recipe
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;
