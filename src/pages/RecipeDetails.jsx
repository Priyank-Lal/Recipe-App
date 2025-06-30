import { useContext, useEffect, useState } from "react";
import { recipeContext } from "../context/RecipeContext";
import { useNavigate, useParams } from "react-router-dom";
import UpdateRecipePopup from "../components/UpdateRecipePopup";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

const RecipeDetails = () => {
  const { data, setData, favourites, setFavourites } =
    useContext(recipeContext);
  const { id } = useParams();
  const recipe = data.find((recipe) => recipe.id === id);
  const navigateTo = useNavigate();

  const [isFavourite, setIsFavourite] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
    const fav = favourites.some((f) => f.id === recipe?.id);
    setIsFavourite(fav);
  }, [favourites, recipe?.id]);

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

  const deleteHandler = () => {
    const filteredData = data.filter((r) => r.id !== id);
    setData(filteredData);
    localStorage.setItem("Recipes", JSON.stringify(filteredData));

    const updatedFavs = favourites.filter((f) => f.id !== recipe.id);
    setFavourites(updatedFavs);

    toast.success("Recipe Deleted");
    navigateTo("/recipes");
  };

  if (!recipe)
    return (
      <p className="text-center mt-20 text-xl text-gray-500">
        Recipe not found
      </p>
    );

  return (
    <>
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex gap-8">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="rounded-3xl shadow-xl object-cover w-[500px] h-[400px]"
          />
          <div>
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl font-extrabold text-green-800">
                {recipe.title}
              </h1>
              <p className="text-gray-700 text-lg">{recipe.description}</p>
            </div>
            <div className="flex gap-4 mt-6">
              <Button
                variant="contained"
                onClick={() => {
                  setPopUp(true);
                }}
              >
                Update Recipe
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => setShowDeleteConfirm(true)}
              >
                Delete
              </Button>
              <Button
                onClick={isFavourite ? unfavouriteToggle : favouriteToggle}
                variant="outlined"
                className={`!px-5 !py-2 !font-semibold !rounded-lg !transition ${
                  isFavourite
                    ? "!bg-red-100 !text-red-600 !border !border-red-400"
                    : "!bg-gray-100 !text-gray-800 !hover:bg-red-50"
                }`}
              >
                {isFavourite
                  ? "❤️ Added to Favourites"
                  : "🤍 Add to Favourites"}
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
              ⏱ Duration: {recipe.duration}
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium">
              ⭐ {recipe.rating} ({recipe.reviewCount} reviews)
            </span>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-medium">
              🍽 Category: {recipe.category}
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
              🧂 Taste: {recipe.taste}
            </span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">
              🌍 Cuisine: {recipe.cuisine}
            </span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
              👨‍🍳 Chef: {recipe.chef}
            </span>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-2">
              🍳Ingredients
            </h2>
            {/* <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {recipe.ingredients
                .split(".")
                .map((item, index) =>
                  item.trim() ? <li key={index}>{item.trim()}</li> : null
                )}
            </ul> */}
            <h3>{recipe.ingredients}</h3>
            {/* <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              {recipe.instructions
                .split(".")
                .map((step, index) =>
                  step.trim() ? <li key={index}>{step.trim()}</li> : null
                )}
            </ol> */}
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-2">
              👨‍🍳 Instructions
            </h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              {recipe.instructions}
            </ol>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {popUp && (
          <motion.div
            key="popup"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex justify-center items-center"
          >
            <div className="absolute inset-0 bg-black opacity-30"></div>

            <div className="z-50 bg-white p-6 rounded-2xl shadow-2xl max-w-2xl w-full">
              <UpdateRecipePopup
                data={data}
                recipeData={recipe}
                visible={setPopUp}
                id={id}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Popup */}
      <AnimatePresence>
        {showDeleteConfirm && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white rounded-lg shadow-xl p-6 z-50 w-96"
            >
              <h2 className="text-xl font-bold mb-4 text-red-600">
                Confirm Deletion
              </h2>
              <p className="text-gray-700 mb-6">
                Are you sure you want to delete this recipe?
              </p>
              <div className="flex justify-end gap-3">
                <Button
                  variant="outlined"
                  onClick={() => setShowDeleteConfirm(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={deleteHandler}
                >
                  Delete
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RecipeDetails;
