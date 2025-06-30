import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeLink = (e) => {
    if (e.isActive) return "text-green-700";
    else return "";
  };
  // #32aa27

  return (
    <>
      <div className="w-full flex gap-10 text-lg justify-center mb-16">
        <NavLink className={activeLink} to="/">
          Home
        </NavLink>
        <NavLink className={activeLink} to="/recipes">
          Recipes
        </NavLink>
        <NavLink className={activeLink} to="/Favourites">
          Favourites
        </NavLink>
        <NavLink className={activeLink} to="/createRecipe">
          Create Recipe
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
