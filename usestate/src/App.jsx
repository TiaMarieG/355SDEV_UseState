// Importing components
import RestaurantsContainer from "./components/RestaurantsContainer";

// Importing Data
import { restaurants } from "./data/data.js";

// Importing Hooks
import {useState} from "react";

// Importing CSS
import "./App.css";

function App() {
  return (
    <div className="App">
      <RestaurantsContainer />
    </div>
  );
}

export default App;
