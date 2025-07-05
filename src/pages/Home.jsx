import React from "react";
import { motion } from "framer-motion";
import { Button, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import GroupIcon from "@mui/icons-material/Group";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Categories from "../components/Categories";
import { Clock, Users, Heart, Star } from "lucide-react";
import Hero from "../components/Hero";

export default function HomePage() {
  const recipes = [
    {
      id: 1,
      title: "Creamy Garlic Pasta",
      description:
        "Rich and creamy pasta with roasted garlic and parmesan cheese",
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600",
      time: "25 min",
      servings: 4,
      rating: 4.8,
      category: "Italian",
    },
    {
      id: 2,
      title: "Grilled Salmon Bowl",
      description: "Fresh grilled salmon with quinoa, avocado, and vegetables",
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      time: "30 min",
      servings: 2,
      rating: 4.9,
      category: "Healthy",
    },
    {
      id: 3,
      title: "Chocolate Lava Cake",
      description:
        "Decadent chocolate cake with molten center and vanilla ice cream",
      image:
        "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600",
      time: "45 min",
      servings: 6,
      rating: 4.7,
      category: "Dessert",
    },
    {
      id: 4,
      title: "Mediterranean Salad",
      description:
        "Fresh vegetables, olives, feta cheese with olive oil dressing",
      image:
        "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=600",
      time: "15 min",
      servings: 3,
      rating: 4.6,
      category: "Salad",
    },
  ];

  return (
    <div className="bg-[#f7fdf8] min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <Hero/>

      {/* Featured Recipes */}
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
            className="grid grid-cols-4 gap-8"
          >
            {recipes.map((recipe) => (
              <motion.div
                key={recipe.id}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white rounded-full p-2 shadow-md hover:bg-red-50"
                    >
                      <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                    </motion.button>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-emerald-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {recipe.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {recipe.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {recipe.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{recipe.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{recipe.servings}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span>{recipe.rating}</span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full bg-emerald-600 text-white py-2.5 rounded-xl font-medium hover:bg-emerald-700 transition"
                  >
                    View Recipe
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Browse by Category */}
      <Categories />

      {/* Subscribe Section */}
      <section className="bg-green-800 text-white py-12 px-8 text-center">
        <Typography variant="h6" className="font-bold">
          Never Miss a Recipe
        </Typography>
        <p className="mt-2 mb-6">
          Get weekly updates with new recipes, cooking tips, and exclusive
          content from our community of passionate chefs.
        </p>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <TextField
            variant="outlined"
            placeholder="Enter your email"
            size="small"
            className="bg-white rounded"
          />
          <Button variant="contained" color="warning">
            Subscribe
          </Button>
        </div>
        <div className="mt-4 text-sm flex justify-center gap-4 text-green-200">
          <span>✓ Weekly recipes</span>
          <span>✓ Cooking tips</span>
          <span>✓ No spam</span>
        </div>
      </section>
    </div>
  );
}
