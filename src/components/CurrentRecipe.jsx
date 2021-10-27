import React from "react";

export const CurrentRecipe = ({ recipes, currentRecipeIndex }) => {
  console.log(recipes);
  return (
    <div>
      {recipes && recipes[currentRecipeIndex] && (
        <p>{recipes[currentRecipeIndex].description}</p>
      )}
    </div>
  );
};

export default CurrentRecipe;
