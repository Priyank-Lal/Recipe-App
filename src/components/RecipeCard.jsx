import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Clock, Users, UtensilsCrossed } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { recipeContext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { Skeleton } from "@mui/material";

const RecipeCard = ({ recipe }) => {
  const {
    id,
    title,
    description,
    category,
    image,
    time,
    servings,
    chef,
    cuisine = "Global",
  } = recipe;

  const { favourites, setFavourites } = useContext(recipeContext);
  const [isFavourite, setIsFavourite] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    setIsFavourite(favourites.some((f) => f.id === id));
  }, [favourites, id]);

  const toggleFavourite = (e) => {
    e.preventDefault();
    if (isFavourite) {
      setFavourites(favourites.filter((f) => f.id !== id));
      toast.info("Removed from Favourites!");
    } else {
      setFavourites([...favourites, recipe]);
      toast.success("Added to Favourites!");
    }
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-shadow duration-300 flex flex-col h-full"
    >
      <div className="relative w-full h-56">
        {!imgLoaded && (
          <Skeleton variant="rectangular" width="100%" height="100%" />
        )}
        <img
          loading="lazy"
          src={image}
          alt={title}
          className={`w-full h-56 object-cover absolute inset-0 transition-opacity duration-300 ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImgLoaded(true)}
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
            {category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4 mt-auto">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{time || "30 min"}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{servings || 2}</span>
          </div>
          <div className="flex items-center gap-1">
            <UtensilsCrossed className="h-4 w-4 text-emerald-500" />
            <span>{cuisine}</span>
          </div>
        </div>

        <Link to={`/recipes/details/${id}`} className="mt-2">
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
};

export default RecipeCard;
