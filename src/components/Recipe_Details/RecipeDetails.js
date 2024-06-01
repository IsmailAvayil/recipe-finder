import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipeInformation } from "../../features/detailsSlice";
import { useDispatch, useSelector } from "react-redux";
import "./RecipeDetails.css";

function RecipeDetails() {
  const dispatch = useDispatch();

  const selectedRecipe = useSelector((state) => state.details.selectedRecipe);
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchRecipeInformation(id));
  }, [dispatch, id]);

  return (
    <div className="details-container">
      <div className="img-container">
        <img src={selectedRecipe.image} alt={selectedRecipe.title} />
      </div>
      <div className="recipe-details">
        <h2>{selectedRecipe.title}</h2>
        <p>
          <span>Cooking Time:</span>
          {selectedRecipe.readyInMinutes} minutes
        </p>
        <p>
          <span>Servings :</span>
          {selectedRecipe.servings}
        </p>
        <div>
          <span>Ingredients :</span>
          {selectedRecipe?.extendedIngredients?.map((ingredient, index) => (
            <div key={index}>
              <p>{ingredient.name}</p>
            </div>
          ))}
        </div>

        <p>
          <span>instructions : </span>
          {selectedRecipe.instructions}
        </p>
      </div>
    </div>
  );
}

export default RecipeDetails;
