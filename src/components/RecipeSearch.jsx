import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_RECIPES } from "../graphql/queries";
import { CurrentRecipe } from "./CurrentRecipe";

export const SearchForm = () => {
  const [searchText, setSearchText] = useState("");
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
  const onSearchChange = (e) => {
    console.log("input change");
    const newText = e.target.value;
    console.log(newText);
    setSearchText(newText);
    setCurrentRecipeIndex(0);
  };

  const upgradeRecipeCounterMinus = () => {
    if (currentRecipeIndex > 0) {
      setCurrentRecipeIndex(currentRecipeIndex - 1);
    }
  };

  const upgradeRecipeCounterPlus = () => {
    setCurrentRecipeIndex(currentRecipeIndex + 1);
  };

  const fingerprint = "woeifjoweijfwoeifjwoeifjwoeijfwlefjwe";
  const keywords = searchText.split(" ");
  const dependencies = [];
  const language = "Python";
  const parameters = "";
  const filename = "myfile.py";

  const { data, loading, error } = useQuery(GET_RECIPES, {
    variables: {
      fingerprint: fingerprint,
      keywords: keywords,
      dependencies: dependencies,
      language: language,
      parameters: parameters,
      filename: filename,
    },
    onCompleted: (graphData) => {
      console.log(graphData);
    },
  });

  return (
    <div>
      <form>
        <input type="text" onChange={onSearchChange} value={searchText}></input>
      </form>

      {!loading &&
        !error &&
        data &&
        data.getRecipesForClient &&
        data.getRecipesForClient.length > 0 && (
          <div>
            <div>
              <CurrentRecipe
                recipes={data.getRecipesForClient}
                currentRecipeIndex={currentRecipeIndex}
              />
            </div>
            <div>
              <div>
                <p>
                  result {currentRecipeIndex + 1}/
                  {data.getRecipesForClient.length}
                </p>
              </div>
              <div>
                <input
                  type="button"
                  value="previous"
                  onClick={upgradeRecipeCounterMinus}
                  disabled={currentRecipeIndex === 0}
                />
                <input
                  type="button"
                  value="next"
                  onClick={upgradeRecipeCounterPlus}
                  disabled={
                    currentRecipeIndex >= data.getRecipesForClient.length - 1
                  }
                />
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default SearchForm;
