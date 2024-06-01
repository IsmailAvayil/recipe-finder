import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./SavedRecipes.css";
import { removeFromFavourites } from "../../features/savedSlice";

function SavedRecipes() {
  const dispatch = useDispatch();
  const favoutiteRecipes = useSelector((state) => state.saved.favoutiteRecipes);
  const removeFavourites = (id) => {
    const newFavList = favoutiteRecipes.filter(
      (favoutiteRecipe) => favoutiteRecipe.id !== id
    );
    dispatch(removeFromFavourites(newFavList));
  };
  return (
    <div className="container">
      <h2>Saved Recipes : {favoutiteRecipes.length} out of 5 </h2>
      {favoutiteRecipes.length === 0 ? (
        <div>Empty</div>
      ) : (
        favoutiteRecipes.map((favoutiteRecipe) => (
          <div key={favoutiteRecipe.id} className="fav-container">
            <div className="fav-img-container">
              <img src={favoutiteRecipe.image} alt={favoutiteRecipe.title} />
            </div>
            <h6>{favoutiteRecipe.title}</h6>
            <button onClick={() => removeFavourites(favoutiteRecipe.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default SavedRecipes;
