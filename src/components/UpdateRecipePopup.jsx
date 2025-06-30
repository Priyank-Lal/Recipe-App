import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { CloudUpload } from "@mui/icons-material";
import { recipeContext } from "../context/RecipeContext";
import { toast } from "react-toastify";

const UpdateRecipePopup = ({ visible, recipeData, data, id }) => {
  const { setData } = useContext(recipeContext);
  const [file, setFile] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const [updateImage, setUpdateImage] = useState(false);
  useState(() => {
    setSelectedCategory(recipeData.category);
  }, []);

  function findIndexById(arr, id) {
    return arr.findIndex((item) => item.id === id);
  }

  const sumbitHandler = (recipe) => {
    const index = findIndexById(data, id);
    const copyrecipeData = [...data];
    copyrecipeData[index] = { ...copyrecipeData[index], ...recipe };
    setData(copyrecipeData);
    localStorage.setItem("Recipes", JSON.stringify(copyrecipeData));
    toast.success("Recipe Updated");
    visible(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.recipeDataTransfer.files && e.recipeDataTransfer.files[0]) {
      setFile(e.recipeDataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 w-6xl z-99 fixed top-[50%] left-[50%] -translate-x-[50%]  -translate-y-[50%] ">
      <h2 className="text-2xl font-bold text-green-700 mb-6">Update Recipe</h2>
      <form className="flex gap-8" onSubmit={handleSubmit(sumbitHandler)}>
        {/* Left column: Form Inputs (approx. 70%) */}
        <div className="w-[65%] flex flex-col gap-6">
          <TextField
            fullWidth
            color="success"
            label="Recipe Title"
            variant="outlined"
            {...register("title")}
            defaultValue={recipeData?.title}
          />
          <TextField
            fullWidth
            color="success"
            label="Chef's Name"
            variant="outlined"
            {...register("chef")}
            defaultValue={recipeData?.chef}
          />
          <TextField
            fullWidth
            color="success"
            label="Description"
            multiline
            rows={3}
            {...register("description")}
            defaultValue={recipeData?.description}
          />
          <TextField
            fullWidth
            color="success"
            label="Ingredients"
            multiline
            rows={3}
            {...register("ingredients")}
            defaultValue={recipeData?.ingredients}
          />
          <TextField
            fullWidth
            color="success"
            label="Instructions"
            multiline
            rows={3}
            {...register("instructions")}
            defaultValue={recipeData?.instructions}
          />
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              color="success"
              value={selectedCategory}
              {...register("category")}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <MenuItem value="Breakfast">Breakfast</MenuItem>
              <MenuItem value="Lunch">Lunch</MenuItem>
              <MenuItem value="Supper">Supper</MenuItem>
              <MenuItem value="Dinner">Dinner</MenuItem>
            </Select>
          </FormControl>
          <div className="flex justify-end gap-4 mt-4">
            <Button color="success" variant="contained" type="submit">
              Update
            </Button>
            <Button
              color="error"
              variant="outlined"
              onClick={() => {
                reset();
                visible(false);
              }}
            >
              Cancel
            </Button>
          </div>
        </div>

        {/* Right column: Image Section (approx. 30%) */}
        <div className="w-[35%] flex flex-col gap-6">
          {updateImage && !file && (
            <>
              <div
                className="h-[260px] bg-white rounded-xl border-2 border-dashed border-gray-300 px-6 py-8 text-center shadow-md transition hover:shadow-lg"
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
              >
                <div className="flex flex-col items-center justify-center gap-4 h-full">
                  <div className="bg-green-100 p-4 rounded-full">
                    <CloudUpload
                      className="text-green-600"
                      style={{ fontSize: 48 }} // Smaller icon
                    />
                  </div>
                  <p className="text-lg font-semibold text-gray-700">
                    Drop your food image here, or{" "}
                    <label
                      htmlFor="fileInput"
                      className="text-green-600 underline cursor-pointer"
                    >
                      browse
                    </label>
                  </p>
                  <p className="text-sm text-gray-400">
                    JPG, PNG, or WEBP format | Any size
                  </p>
                  <input
                    id="fileInput"
                    type="file"
                    accept="image/png, image/jpeg, image/webp"
                    className="hidden"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <TextField
                className="w-full rounded-2xl"
                placeholder="Or paste Image URL here..."
                {...register("image")}
              />
              <div className="w-full flex justify-end">
                <Button
                  variant="outlined"
                  color="error"
                  className="w-fit"
                  onClick={() => {
                    setUpdateImage(false);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </>
          )}

          {file && (
            <>
              <img
                src={URL.createObjectURL(file)}
                alt="Preview"
                className="h-[300px] object-cover rounded-xl shadow-md border border-gray-300"
              />
              <div className="w-full flex justify-center">
                <Button
                  onClick={() => setFile(null)}
                  variant="contained"
                  className="w-fit"
                >
                  Change Image
                </Button>
              </div>
            </>
          )}

          {!updateImage && (
            <>
              <img
                className="w-full h-[300px] object-cover border border-gray-300 rounded-xl"
                src={recipeData?.image}
                alt=""
              />
              <Button variant="contained" onClick={() => setUpdateImage(true)}>
                Update Image
              </Button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default UpdateRecipePopup;
