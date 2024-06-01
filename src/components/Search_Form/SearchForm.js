import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRecipes } from "../../features/searchSlice";
import { useNavigate } from "react-router-dom";
import "./SearchForm.css";

function SearchForm() {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const [ingredients, setIngredients] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    inputRef.current.focus();
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchRecipes(ingredients));
    navigate("/search_recipes/");
  };

  return (
    <div className="form-container">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Enter ingredients..."
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
