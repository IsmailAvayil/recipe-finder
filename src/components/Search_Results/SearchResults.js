import React from "react";
import "./SearchResults.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavourites } from "../../features/savedSlice";

const SearchResults = () => {
  const dispatch = useDispatch();
  const { recipes, loading, errormsg } = useSelector((state) => state.search);

  const favoutiteRecipes = useSelector((state) => state.saved.favoutiteRecipes);

  const handleCart = (id) => {
    const favourite = recipes.find((recipe) => recipe.id === id);
    const foundObject = favoutiteRecipes.find(
      (favoutiteRecipe) => favourite.id === favoutiteRecipe.id
    );
    if (!foundObject && favoutiteRecipes.length < 5) {
      dispatch(addToFavourites(favourite));
    } else {
      alert("already exist in the favourite or favourite list is maximum");
    }
  };
  return (
    <div className="recipes-container">
      {loading && <div>Loading..............</div>}
      {!loading && errormsg ? (
        <div className="red-warning"> Error : {errormsg}</div>
      ) : null}

      {!loading && !errormsg && recipes.length > 0
        ? recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-container">
              <div className="image-container">
                <img src={recipe.image} alt={recipe.title} />
              </div>
              <h3>{recipe.title}</h3>
              <Link to={`/recipes/${recipe.id}`}>Details</Link>
              <button onClick={() => handleCart(recipe.id)}>
                Add to favourites
              </button>
            </div>
          ))
        : null}
    </div>
  );
};

export default SearchResults;
