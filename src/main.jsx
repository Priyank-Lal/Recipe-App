import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import RecipeContext from "./context/RecipeContext.jsx";

createRoot(document.getElementById("root")).render(
  <RecipeContext>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </RecipeContext>
);
