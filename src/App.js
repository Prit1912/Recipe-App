import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

export default function App() {
  const app_id = "4eb24ed2";
  const app_key = "f6f366ae97b26398cae8c42d748f008f";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("tomato");

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <h1 className = "heading">Recipe App</h1>
      <form onSubmit={getSearch} className="search_form">
        <input
          className="search_bar"
          type=""
          value={search}
          onChange={updateSearch}
        />
        <button className="search_button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => {
          return (
            <Recipe
              kay={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          );
        })}
      </div>
    </div>
  );
}
