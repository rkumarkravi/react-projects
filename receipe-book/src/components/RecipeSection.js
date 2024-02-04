// RecipeSection.js

import React from "react";
import { MdArrowCircleRight } from "react-icons/md";
import { Link } from "react-router-dom";

const RecipeSection = ({ title, recipes }) => {
  console.log("recipe print",recipes)
  return (
    <div className="mb-8">
      {(recipes && recipes.length>0) && <h2 className="text-3xl text-white font-bold mb-4">{title}</h2>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {(recipes && recipes.length>0) && recipes.map((recipe) => (
          <Link to={`/view-recipe/${recipe.id}`}  key={`${Math.random()*1000}`}>
          <div key={recipe.id} className="group bg-white relative p-4 rounded-md shadow-md cursor-pointer hover:bg-yellow-400 duration-200 ">
            {/* Display recipe details here */}
            <MdArrowCircleRight className="absolute top-2 right-2 text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <h3 className="text-lg font-semibold mb-2">{recipe.name}</h3>
            <p className="text-gray-600">{recipe.description}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecipeSection;
