// Importing components
import RestaurantsContainer from "./components/RestaurantsContainer";

// Importing Data
import { restaurants } from "./data/data.js";

// Importing Hooks
import {useState} from "react";

// Importing CSS
import "./App.css";

function App() {

  // Destructuring useState to create a state variable and a function to update it
  // Using the spread operator (...) to take the content of the data array and put it into a new array
  const [restaurantState, setRestaurantState] = useState([...restaurants]);

  return (
    <div className="App">
      {/* Passing down the restaurantState from useState to the RestaurantsContainer component - This is the component that will be affected by the state change */}
      <RestaurantsContainer restaurants={restaurantState}/>
    </div>
  );
}

export default App;
