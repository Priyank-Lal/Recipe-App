import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { CloudUpload, Upload } from "@mui/icons-material";
import { recipeContext } from "../context/RecipeContext";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateRecipe = () => {
  const [file, setFile] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [uploadImage, setUploadImage] = useState("");
  const navigateTo = useNavigate();

  const { register, handleSubmit, reset } = useForm();
  const { data, setData } = useContext(recipeContext);

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
  const sumbitHandler = (recipe) => {
    recipe.id = nanoid();
    // setData([...data, recipe]);
    const copyData = [...data]
    copyData.push(recipe)
    setData(copyData)
    localStorage.setItem('Recipes',JSON.stringify(copyData))
    toast.success("New Recipe Added!");
    navigateTo("/recipes");
    reset();
  };
  return (
    <>
      <div className="mx-auto">
        <div className="flex flex-col gap-1 w-full">
          <span className="text-3xl font-semibold text-green-700">
            Create Your Own
          </span>
          <span className="text-4xl font-normal">Recipe </span>
        </div>
        <div className="mt-8 ">
          <form className="flex gap-16" onSubmit={handleSubmit(sumbitHandler)}>
            <div className="grid grid-cols-1 gap-4 w-[55%]">
              <TextField
                className="w-full text-[#text-green-700]"
                color="success"
                id="outlined-basic"
                label="Recipe Title"
                variant="outlined"
                {...register("title")}
                required={false}
              />
              <TextField
                className="w-full text-[#text-green-700]"
                color="success"
                id="outlined-basic"
                label="Chef's Name"
                variant="outlined"
                {...register("chef")}
                required={false}
              />
              <div className="flex flex-col gap-1">
                <label className="text-lg text-gray-700">Description</label>
                <textarea
                  className="w-full border rounded after:text-red-300 h-32"
                  {...register("description")}
                  required={false}
                ></textarea>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-lg text-gray-700">
                  Write Ingredients
                </label>
                <textarea
                  className="w-full border rounded after:text-red-300 h-32"
                  {...register("ingredients")}
                  required={false}
                ></textarea>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-lg text-gray-700">
                  Write Instructions
                </label>
                <textarea
                  className="w-full border rounded after:text-red-300 h-32"
                  {...register("instructions")}
                  required={false}
                ></textarea>
              </div>
              <div className="w-full">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    id="demo-simple-select"
                    label="Category"
                    color="success"
                    {...register("category")}
                    value={selectedCategory}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value);
                    }}
                  >
                    <MenuItem value="Breakfast">Breakfast</MenuItem>
                    <MenuItem value="Lunch">Lunch</MenuItem>
                    <MenuItem value="Supper">Supper</MenuItem>
                    <MenuItem value="Dinner">Dinner</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="flex gap-4 mt-8">
                <Button color="success" variant="contained" type="submit">
                  Sub it
                </Button>
                <Button
                  color="error"
                  variant="outlined"
                  onClick={() => {
                    reset();
                  }}
                >
                  Clear All
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col min-h-[482px]">
                {!file && (
                  <>
                    {" "}
                    <div
                      className="w-full h-[482px] bg-white rounded-2xl border-2 border-dashed border-gray-300 p-10 text-center shadow-md transition hover:shadow-lg"
                      onDrop={handleDrop}
                      onDragOver={(e) => e.preventDefault()}
                    >
                      <div className="flex flex-col items-center justify-center gap-6 h-full">
                        <div className="bg-green-100 p-6 rounded-full">
                          <CloudUpload
                            className="text-green-600"
                            style={{ fontSize: 60 }}
                          />
                        </div>
                        <p className="text-2xl font-semibold text-gray-700">
                          Drop your Food Image here, or{" "}
                          <label
                            htmlFor="fileInput"
                            className="text-green-600 underline cursor-pointer"
                          >
                            browse
                          </label>
                        </p>
                        <p className="text-base text-gray-400">
                          Supports PNG, JPG & WEBP up to any size
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
                    <div className="flex flex-col gap-4 mt-4">
                      <TextField
                        className="w-full rounded-2xl"
                        placeholder="You can paste Image URL here..."
                        {...register("image")}
                        value={uploadImage}
                        onChange={(e) => {
                          setUploadImage(e.target.value);
                        }}
                      ></TextField>
                      <div className="w-full flex justify-end">
                        <Button
                          className="w-fit"
                          color="success"
                          variant="outlined"
                          onClick={() => {
                            setFile(uploadImage);
                            setUploadImage("");
                          }}
                        >
                          Submit
                        </Button>
                      </div>
                    </div>
                  </>
                )}

                {file && (
                  <>
                    <div className="w-full flex flex-col gap-6 justify-center items-center">
                      <img
                        src={
                          typeof file === "string"
                            ? file
                            : URL.createObjectURL(file)
                        }
                        alt="Preview"
                        className="h-[482px] w-[500px] object-cover rounded-xl shadow-md transition hover:shadow-xl border border-gray-300"
                      />
                      <Button
                        onClick={() => {
                          setFile(null);
                          setUploadImage("");
                        }}
                        variant="contained"
                        className="w-fit scale-105"
                      >
                        Change Image
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateRecipe;
