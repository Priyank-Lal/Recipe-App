import React from "react";
import { motion } from "framer-motion";
import { Search, Star, Users, Clock, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-[#e9fdf5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              Discover <span className="text-emerald-600">Amazing Recipes</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-xl">
              Explore thousands of delicious recipes from around the world.
              Create, share, and discover your next favorite dish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link  to="/recipes">
                <button className="bg-emerald-600 text-white font-semibold py-2.5 px-6 rounded-md hover:bg-emerald-700 transition w-full cursor-pointer">
                  Explore Recipes
                </button>
              </Link>
              <Link to="/createRecipe">
                <button className="border border-emerald-600 text-emerald-600 font-semibold py-2.5 px-6 rounded-md hover:bg-emerald-100 transition w-full cursor-pointer">
                  Create Recipe
                </button>
              </Link>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-700">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4 text-emerald-600" />
                <span>50K+ Users</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>Quick & Easy</span>
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-fit"
          >
            <img
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Delicious food"
              className="rounded-2xl shadow-xl border-4 border-white w-full"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-4xl mx-auto relative"
        >
          <div className="bg-gradient-to-br from-white via-[#fafffe] to-[#e9fdf5] rounded-2xl p-6 sm:p-8 shadow-lg border border-emerald-100/40 relative overflow-hidden">
            {/* Soft Background Decorations */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(16,185,129,0.05),transparent_50%)] pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-100/20 to-transparent rounded-full blur-2xl pointer-events-none"></div>

            {/* Quote Icon */}
            <div className="absolute top-4 left-4 text-emerald-200">
              <Quote className="w-8 h-8 rotate-180" />
            </div>

            <div className="relative flex items-start sm:items-center gap-6 sm:gap-8">
              {/* Profile */}
              <div className="flex-shrink-0">
                <img
                  src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgQh3qKnwfjjqb_s2PDUqo5IlJtR6w00__S3WHuw1NMqhQyeTtFlBKpo_dfjvq6n9Y7lqmBg_EI-EijFiRZsIKWiUBWKfsIgBZvOBh9iNy"
                  alt="Gordon Ramsay"
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow ring-2 ring-emerald-400/30"
                />
                <div className="flex items-center justify-center mt-2 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>

              {/* Quote + Details */}
              <div className="flex-1">
                <p className="text-sm sm:text-base text-gray-800 italic mb-4 leading-snug">
                  "The heart of every great dish lies in simplicity and passion.
                  This platform inspires that daily — it's a brilliant way to
                  explore bold flavors and elevate home cooking."
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                  <div>
                    <div className="text-base font-bold text-gray-900">
                      Gordon Ramsay
                    </div>
                    <div className="text-xs text-emerald-600 font-semibold">
                      Michelin Star Chef & TV Host
                    </div>
                    <div className="text-xs text-gray-500">
                      Hell's Kitchen • MasterChef
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Quote Icon */}
            <div className="absolute bottom-4 right-4 text-emerald-200">
              <Quote className="w-6 h-6" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
