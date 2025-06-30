import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { recipeContext } from "../context/RecipeContext";
import { toast } from "react-toastify";

const RecipeCard = ({ recipe }) => {
  const { id, title, chef, description, category, image } = recipe;
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);

  const { favourites, setFavourites } = useContext(recipeContext);

  useEffect(() => {
    const fav = favourites.some((f) => f.id === recipe.id);
    setIsFavourite(fav);
  }, [favourites, recipe.id]);

  const favouriteToggle = () => {
    if (favourites.some((f) => f.id === recipe.id)) return;
    setFavourites([...favourites, recipe]);
    toast.success("Added to Favourites!");
  };

  const unfavouriteToggle = () => {
    const updated = favourites.filter((f) => f.id !== recipe.id);
    setFavourites(updated);
    toast.info("Removed from Favourites!");
  };

  return (
    <Link to={`/recipes/details/${id}`} className="block">
      <div className="w-full h-116 mx-auto bg-white rounded-3xl overflow-hidden border border-gray-300 shadow-lg hover:shadow-2xl hover:shadow-yellow-200 transform hover:scale-105 transition-all duration-300">
        <div className="overflow-hidden">
          {!imageLoaded && (
            <Skeleton
              variant="rectangular"
              width="100%"
              height={240}
              animation="wave"
            />
          )}
          <img
            className={`h-60 w-full object-cover transition-transform duration-300 hover:scale-110 ${
              imageLoaded ? "block" : "hidden"
            }`}
            src={image}
            alt={title}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        <div className="p-5 space-y-3 h-60 relative">
          <h2 className="text-2xl font-extrabold text-gray-800">{title}</h2>
          <p className="text-base text-green-700 font-medium">
            👨‍🍳 Chef: {chef}
          </p>
          <p className="text-sm text-gray-600 line-clamp-3 w-full">
            {description.length > 100 ? (
              <>
                {description.slice(0, 100)}...{" "}
                <span className="text-blue-700 font-semibold hover:underline">
                  more
                </span>
              </>
            ) : (
              description
            )}
          </p>
          <div>
            <div className="px-3 py-1 mt-2 text-xs font-bold bg-yellow-200 text-yellow-900 rounded-full absolute bottom-10">
              #{category}
            </div>
            <div className="absolute bottom-8 right-5">
              {isFavourite ? (
                <Tooltip title="Remove from Favourites" placement="top" arrow>
                  <IconButton
                    onClick={(e) => {
                      e.preventDefault();
                      unfavouriteToggle();
                    }}
                  >
                    <FavoriteIcon htmlColor="red" />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title="Add to Favourites" placement="top" arrow>
                  <IconButton
                    onClick={(e) => {
                      e.preventDefault();
                      favouriteToggle();
                    }}
                  >
                    <FavoriteBorderIcon />
                  </IconButton>
                </Tooltip>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
