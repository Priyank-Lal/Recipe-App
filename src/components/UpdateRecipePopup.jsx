import { useForm } from "react-hook-form";
import {
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  InputAdornment,
} from "@mui/material";
import { recipeContext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import imageCompression from "browser-image-compression";
import { lazy, Suspense, useContext, useState } from "react";
const UpdateImagePopup = lazy(() => import("./UpdateImagePopup"));

const UpdateRecipePopup = ({ visible, recipeData, data, id }) => {
  const { setData } = useContext(recipeContext);
  const [file, setFile] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(
    recipeData.category || ""
  );
  const [tasteValue, setTasteValue] = useState(recipeData.taste || "");
  const [updateImage, setUpdateImage] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [showImagePopup, setShowImagePopup] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const findIndexById = (arr, id) => arr.findIndex((item) => item.id === id);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const sumbitHandler = async (recipe) => {
    const index = findIndexById(data, id);
    const updatedData = [...data];

    if (updateImage) {
      if (file && typeof file !== "string") {
        const compressed = await imageCompression(file, {
          maxSizeMB: 0.4,
          maxWidthOrHeight: 800,
          useWebWorker: true,
        });
        recipe.image = await toBase64(compressed);
      } else if (typeof file === "string") {
        recipe.image = file;
      } else if (imageURL) {
        recipe.image = imageURL;
      }
    } else {
      recipe.image = recipeData.image;
    }

    recipe.category = selectedCategory;
    recipe.taste = tasteValue;

    updatedData[index] = { ...updatedData[index], ...recipe };
    setData(updatedData);
    localStorage.setItem("Recipes", JSON.stringify(updatedData));
    toast.success("Recipe Updated!");
    visible(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-5xl max-h-[90vh] overflow-y-auto z-50 fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
      <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
        Update Recipe
      </h2>

      {/* Main Form */}
      <form
        onSubmit={handleSubmit(sumbitHandler)}
        className="flex flex-col gap-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
          <TextField
            label="Recipe Title"
            color="success"
            fullWidth
            {...register("title")}
            defaultValue={recipeData.title}
            required
          />

          <TextField
            label="Chef's Name"
            color="success"
            fullWidth
            {...register("chef")}
            defaultValue={recipeData.chef}
            required
          />

          <TextField
            label="Time"
            color="success"
            fullWidth
            defaultValue={recipeData.time}
            {...register("time")}
            InputProps={{
              endAdornment: <InputAdornment position="end">min</InputAdornment>,
            }}
          />

          <TextField
            label="Servings"
            type="number"
            color="success"
            fullWidth
            defaultValue={recipeData.servings}
            {...register("servings")}
          />

          <TextField
            label="Cuisine"
            color="success"
            fullWidth
            defaultValue={recipeData.cuisine}
            {...register("cuisine")}
          />

          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              color="success"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              required
            >
              <MenuItem value="Breakfast">Breakfast</MenuItem>
              <MenuItem value="Lunch">Lunch</MenuItem>
              <MenuItem value="Supper">Supper</MenuItem>
              <MenuItem value="Dinner">Dinner</MenuItem>
              <MenuItem value="Snacks">Snacks</MenuItem>
              <MenuItem value="Dessert">Dessert</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Taste</InputLabel>
            <Select
              color="success"
              value={tasteValue}
              onChange={(e) => setTasteValue(e.target.value)}
              required
            >
              <MenuItem value="Spicy">Spicy</MenuItem>
              <MenuItem value="Sweet">Sweet</MenuItem>
              <MenuItem value="Savory">Savory</MenuItem>
              <MenuItem value="Tangy">Tangy</MenuItem>
              <MenuItem value="Bland">Bland</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Description"
            multiline
            rows={3}
            fullWidth
            color="success"
            {...register("description")}
            defaultValue={recipeData.description}
            required
          />

          <TextField
            label="Ingredients"
            multiline
            rows={3}
            fullWidth
            color="success"
            {...register("ingredients")}
            defaultValue={recipeData.ingredients}
            required
          />

          <TextField
            label="Instructions"
            multiline
            rows={3}
            fullWidth
            color="success"
            {...register("instructions")}
            defaultValue={recipeData.instructions}
            required
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center gap-4">
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setShowImagePopup(true)}
          >
            Update Image
          </Button>

          <div className="flex gap-4">
            <Button type="submit" variant="contained" color="success">
              Update
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                reset();
                visible(false);
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </form>

      {showImagePopup && (
        <Suspense fallback={<div className="text-center p-6">Loading...</div>}>
          <div className="z-50 bg-white p-6 rounded-2xl shadow-2xl max-w-3xl w-full">
            <UpdateImagePopup
              existingImage={recipeData.image}
              onClose={() => setShowImagePopup(false)}
              onSave={(newImage) => {
                recipeData.image = newImage;
                setShowImagePopup(false);
              }}
            />
          </div>
        </Suspense>
      )}
    </div>
  );
};

export default UpdateRecipePopup;
