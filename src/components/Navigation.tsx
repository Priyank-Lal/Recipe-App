import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChefHat } from 'lucide-react';

const Navigation = () => {
  const activeLink = ({ isActive }: { isActive: boolean }) => {
    return isActive 
      ? "text-emerald-600 bg-emerald-50 px-4 py-2 rounded-lg font-semibold" 
      : "text-gray-600 hover:text-emerald-600 px-4 py-2 rounded-lg font-medium transition-colors duration-200";
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <ChefHat className="h-8 w-8 text-emerald-600" />
            <span className="font-bold text-xl text-gray-900">RecipeHub</span>
          </motion.div>
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <NavLink className={activeLink} to="/">
                Home
              </NavLink>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <NavLink className={activeLink} to="/recipes">
                Recipes
              </NavLink>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <NavLink className={activeLink} to="/Favourites">
                Favourites
              </NavLink>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <NavLink className={activeLink} to="/createRecipe">
                Create Recipe
              </NavLink>
            </motion.div>
          </div>

          {/* Mobile menu button (for future mobile implementation) */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
