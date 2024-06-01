import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchForm from "./components/Search_Form/SearchForm";
import SavedRecipes from "./components/Saved_Recipes/SavedRecipes";
import RecipeDetails from "./components/Recipe_Details/RecipeDetails";
import SearchResults from "./components/Search_Results/SearchResults";

function App() {
  return (
    <div className="App">
      <header>
        <h1>TABETAI</h1>
      </header>

      <div className="App-body">
        <div className="router-page">
          <Router>
            <Routes>
              <Route exact path="/" element={<SearchForm />} />
              <Route path="/search_recipes" element={<SearchResults />} />
              <Route path="/recipes/:id" element={<RecipeDetails />} />
            </Routes>
          </Router>
        </div>
        <div className="favourites-content">
          <SavedRecipes />
        </div>
      </div>
    </div>
  );
}

export default App;
