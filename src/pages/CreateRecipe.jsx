import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  Skeleton,
  InputAdornment,
  IconButton,
  Tooltip,
} from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { motion } from "framer-motion";
import imageCompression from "browser-image-compression";
import { recipeContext } from "../context/RecipeContext";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Undo2 } from "lucide-react";


const CreateRecipe = () => {
  const [file, setFile] = useState(null);
  const [uploadImage, setUploadImage] = useState("");
  const navigateTo = useNavigate();
  const [customTaste, setCustomTaste] = useState(false);
  const [customCategory, setCustomCategory] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const { data, setData } = useContext(recipeContext);

const [isImageLoading, setIsImageLoading] = useState(true);
  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  const submitHandler = async (recipe) => {
    recipe.id = nanoid();

    // CASE 1: File input is a file object
    if (file && typeof file !== "string") {
      if (!file.type.startsWith("image/")) {
        toast.error("Please upload a valid image file.");
        return;
      }

      try {
        const compressed = await imageCompression(file, {
          maxSizeMB: 0.4,
          maxWidthOrHeight: 800,
          useWebWorker: true,
        });

        const base64 = await toBase64(compressed);
        if (base64.length > 1000000) {
          toast.warn("Image may be too large and could affect performance.");
        }

        recipe.image = base64;
      } catch (err) {
        toast.error("Image upload failed");
        console.error("Image compression error:", err);
        return;
      }
    }

    // CASE 2: File input is a pasted URL
    else if (typeof file === "string" && file.startsWith("http")) {
      try {
        const res = await fetch(file);
        const blob = await res.blob();

        const compressed = await imageCompression(blob, {
          maxSizeMB: 0.4,
          maxWidthOrHeight: 800,
          useWebWorker: true,
        });

        const base64 = await toBase64(compressed);
        if (base64.length > 1000000) {
          toast.warn("Image may be too large and could affect performance.");
        }

        recipe.image = base64;
      } catch (err) {
        toast.error("Failed to fetch or compress image from URL.");
        console.error("URL image compression error:", err);
        return;
      }
    }

    // CASE 3: No image provided
    else {
      toast.error("Please upload or paste an image.");
      return;
    }

    // Update local state and storage
    const updatedData = [...data, recipe];
    setData(updatedData);
    localStorage.setItem("Recipes", JSON.stringify(updatedData));

    toast.success("New Recipe Added!");
    navigateTo("/recipes");
    reset();
    setFile(null);
    setUploadImage("");
  };
  

  // 🔧 Helper function: File to Base64
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  return (
    <motion.section
      className="py-20 bg-gradient-to-t from-white to-emerald-40 min-h-screen"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Create Your Own Recipe 📝
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mt-2">
            Share your culinary creativity with the world!
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="grid grid-cols-2 lg:grid-cols-2 gap-12"
        >
          {/* Left: Inputs */}
          <div className="flex flex-col gap-5">
            <TextField
              color="success"
              label="Recipe Title"
              {...register("title")}
              required
            />
            <TextField
              color="success"
              label="Chef's Name"
              {...register("chef")}
              required
            />

            <TextField
              label="Description"
              multiline
              rows={3}
              color="success"
              {...register("description")}
              required
            />

            <TextField
              label="Ingredients"
              multiline
              rows={3}
              color="success"
              {...register("ingredients")}
              required
            />

            <TextField
              label="Instructions"
              multiline
              rows={3}
              color="success"
              {...register("instructions")}
              required
            />

            <TextField
              label="Time"
              color="success"
              {...register("time")}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">min</InputAdornment>
                ),
              }}
            />
            <TextField
              label="Servings"
              type="number"
              inputProps={{ min: 1 }}
              color="success"
              {...register("servings")}
              required
            />

            <TextField
              label="Cuisine"
              color="success"
              {...register("cuisine")}
            />

            <FormControl color="success" fullWidth>
              {customTaste ? (
                <div className="flex gap-2">
                  <TextField
                    label="Custom Taste"
                    value={uploadImage}
                    onChange={(e) => setUploadImage(e.target.value)}
                    fullWidth
                    color="success"
                  />
                  <Tooltip title="Use Existing Options">
                    <IconButton
                      onClick={() => setCustomTaste(false)}
                      color="success"
                    >
                      <Undo2 size={20} width={40} />
                    </IconButton>
                  </Tooltip>
                </div>
              ) : (
                <>
                  <InputLabel>Taste</InputLabel>

                  <Select
                    defaultValue=""
                    {...register("taste", { required: true })}
                    labelId="taste-label"
                    id="taste-select"
                    label="Taste"
                  >
                    {["Spicy", "Sweet", "Savory", "Tangy", "Bland"].map((t) => (
                      <MenuItem key={t} value={t}>
                        {t}
                      </MenuItem>
                    ))}
                    <MenuItem
                      value="custom"
                      onClick={() => setCustomTaste(true)}
                    >
                      Custom...
                    </MenuItem>
                  </Select>
                </>
              )}
            </FormControl>

            <FormControl color="success" fullWidth>
              {customCategory ? (
                <div className="flex gap-2">
                  <TextField
                    label="Custom Category"
                    value={uploadImage}
                    onChange={(e) => setUploadImage(e.target.value)}
                    fullWidth
                    color="success"
                  />
                  <Tooltip title="Use Existing Options">
                    <IconButton
                      onClick={() => setCustomCategory(false)}
                      color="success"
                    >
                      <Undo2 size={20} width={40} />
                    </IconButton>
                  </Tooltip>
                </div>
              ) : (
                <>
                  <InputLabel>Category</InputLabel>

                  <Select
                    defaultValue=""
                    {...register("category", { required: true })}
                    labelId="category-label"
                    id="category-select"
                    label="Category"
                  >
                    {[
                      "Breakfast",
                      "Lunch",
                      "Dinner",
                      "Snacks",
                      "Dessert",
                      "Vegan",
                      "Salad",
                    ].map((c) => (
                      <MenuItem key={c} value={c}>
                        {c}
                      </MenuItem>
                    ))}
                    <MenuItem
                      value="custom"
                      onClick={() => setCustomCategory(true)}
                    >
                      Custom...
                    </MenuItem>
                  </Select>
                </>
              )}
            </FormControl>
            <div className="flex gap-4 mt-6">
              <Button type="submit" variant="contained" color="success">
                Submit
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => {
                  reset();
                  setFile(null);
                  setUploadImage("");
                }}
              >
                Clear All
              </Button>
            </div>
          </div>

          {/* Right: Image Upload */}

          <div className="flex flex-col gap-6">
            {!file ? (
              <div
                className="w-full h-[480px] bg-white rounded-2xl border-2 border-dashed border-gray-300 p-10 text-center shadow-md transition hover:shadow-lg flex flex-col justify-center items-center"
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
              >
                <div className="bg-green-100 p-6 rounded-full mb-4">
                  <CloudUpload
                    className="text-green-600"
                    style={{ fontSize: 60 }}
                  />
                </div>
                <p className="text-lg font-medium text-gray-700">
                  Drag & drop food image here, or{" "}
                  <label
                    htmlFor="fileInput"
                    className="text-green-600 underline cursor-pointer"
                  >
                    browse
                  </label>
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Supports PNG, JPG, WEBP
                </p>
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleChange}
                />
              </div>
            ) : (
              <div className="flex flex-col gap-4 items-center w-full">
                {isImageLoading && (
                  <Skeleton
                    variant="rectangular"
                    width="100%"
                    height={480}
                    animation="wave"
                    className="rounded-xl"
                  />
                )}
                <img
                  src={
                    typeof file === "string" ? file : URL.createObjectURL(file)
                  }
                  alt="Preview"
                  className={`w-full h-[480px] object-cover rounded-xl border border-gray-300 shadow transition ${
                    isImageLoading ? "hidden" : "block"
                  }`}
                  onLoad={() => setIsImageLoading(false)}
                />
                <Button
                  onClick={() => {
                    setFile(null);
                    setUploadImage("");
                    setIsImageLoading(true); // Reset for next upload
                  }}
                  variant="contained"
                >
                  Change Image
                </Button>
              </div>
            )}

            {!file && (
              <div className="flex flex-col gap-3">
                <TextField
                  placeholder="...or paste image URL"
                  {...register("image")}
                  value={uploadImage}
                  onChange={(e) => setUploadImage(e.target.value)}
                  color="success"
                />
                <div className="flex justify-end">
                  <Button
                    variant="outlined"
                    color="success"
                    onClick={() => {
                      setFile(uploadImage);
                      setUploadImage("");
                      setIsImageLoading(true);
                    }}
                  >
                    Use Image
                  </Button>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default CreateRecipe;
