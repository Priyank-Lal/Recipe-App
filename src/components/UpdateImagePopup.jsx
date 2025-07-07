import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import imageCompression from "browser-image-compression";

import { AnimatePresence, motion } from "framer-motion";


const UpdateImagePopup = ({ onClose, onSave, existingImage }) => {
  const [file, setFile] = useState(null);
  const [imageURL, setImageURL] = useState("");
  const [imageReady, setImageReady] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
      setImageReady(true);
    }
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setImageReady(true);
    }
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleSave = async () => {
    let finalImage = "";

    if (file && typeof file !== "string") {
      const compressed = await imageCompression(file, {
        maxSizeMB: 0.4,
        maxWidthOrHeight: 800,
        useWebWorker: true,
      });
      finalImage = await toBase64(compressed);
    } else if (imageURL) {
      finalImage = imageURL;
    }

    if (finalImage) {
      onSave(finalImage);
    }

    onClose();
  };

  const handleReset = () => {
    setFile(null);
    setImageURL("");
    setImageReady(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden flex flex-col p-8"
        >
          {/* Content: Side-by-side layout */}
          <div className="flex gap-8 h-[50vh]">
            {/* Left: Current Image */}
            <div className="w-1/2 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Current Image
              </h3>
              <img
                loading="lazy"
                src={existingImage}
                alt="Current"
                className="rounded-xl w-full h-[400px] object-cover border border-gray-300 shadow"
              />
            </div>

            {/* Right: New or Upload Image */}
            <div className="w-1/2 flex flex-col">
              {!imageReady ? (
                <>
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">
                    Upload New Image
                  </h3>

                  <div
                    className="w-full h-[310px] bg-white rounded-2xl border-2 border-dashed border-gray-300 p-10 text-center shadow-md transition hover:shadow-lg flex flex-col justify-center items-center"
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

                  <TextField
                    className="w-full !mt-8"
                    placeholder="Or paste image URL..."
                    value={imageURL}
                    onChange={(e) => {
                      setImageURL(e.target.value);
                      setImageReady(!!e.target.value);
                    }}
                  />
                </>
              ) : (
                <>
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">
                    New Image
                  </h3>
                  <div className="flex flex-col gap-4">
                    <img
                      loading="lazy"
                      src={file ? URL.createObjectURL(file) : imageURL}
                      alt="Preview"
                      className="rounded-xl w-full h-[400px] object-cover border border-gray-300 shadow"
                    />
                    <Button
                      variant="outlined"
                      color="primary"
                      className="w-fit self-end"
                      onClick={handleReset}
                    >
                      Change Image
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Action Buttons: Bottom aligned OUTSIDE content area */}
          <div className="flex justify-start gap-4">
            <Button onClick={handleSave} variant="contained" color="success">
              Save Image
            </Button>
            <Button onClick={onClose} variant="outlined" color="error">
              Cancel
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default UpdateImagePopup;
