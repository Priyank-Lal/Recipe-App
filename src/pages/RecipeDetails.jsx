import { useContext, useEffect, useState } from "react";
import { recipeContext } from "../context/RecipeContext";
import { useNavigate, useParams } from "react-router-dom";
import UpdateRecipePopup from "../components/UpdateRecipePopup";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, Users, UtensilsCrossed } from "lucide-react";

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
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        {/* Image + Actions */}
        <div className="space-y-6">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-96 object-cover rounded-3xl shadow-xl"
          />
          <div className="flex flex-wrap gap-3">
            <Button
              variant="contained"
              onClick={() => setPopUp(true)}
              className="!rounded-xl !px-6 !py-2"
            >
              Update Recipe
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => setShowDeleteConfirm(true)}
              className="!rounded-xl !px-6 !py-2"
            >
              Delete
            </Button>
            <Button
              onClick={isFavourite ? unfavouriteToggle : favouriteToggle}
              variant="outlined"
              className={`!px-6 !py-2 !rounded-xl !transition font-semibold ${
                isFavourite
                  ? "!bg-red-100 !text-red-600 !border-red-400"
                  : "!bg-gray-100 !text-gray-800 hover:!bg-red-50"
              }`}
            >
              {isFavourite ? "❤️ Added to Favourites" : "🤍 Add to Favourites"}
            </Button>
          </div>
        </div>

        {/* Recipe Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {recipe.title}
            </h1>
            <p className="text-gray-600 text-lg">{recipe.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-600" /> {recipe.duration}
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-600" />{" "}
              {recipe.servings || 2} servings
            </div>
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-emerald-600" />{" "}
              {recipe.cuisine}
            </div>
            <div className="flex items-center gap-2">
              👨‍🍳 Chef: {recipe.chef}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-2">
              🍳 Ingredients
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {recipe.ingredients
                ?.split(".")
                .map((item, i) =>
                  item.trim() ? <li key={i}>{item.trim()}</li> : null
                )}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-2">
              👨‍🍳 Instructions
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700">
              {recipe.instructions
                ?.split(".")
                .map((step, i) =>
                  step.trim() ? <li key={i}>{step.trim()}</li> : null
                )}
            </ol>
          </div>
        </div>
      </div>

      {/* Update Recipe Modal */}
      <AnimatePresence>
        {popUp && (
          <motion.div
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

      {/* Delete Confirmation Modal */}
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
    </section>
  );
};

export default RecipeDetails;
