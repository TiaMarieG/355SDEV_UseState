import { useState } from "react";
function Restaurant(props) {
  const [hours, setHours] = useState(false);
  const [menu, setMenu] = useState(false);

  // Function to handle what happens when the hours button is clicked
  // This function will toggle the hours state between true and false
  const handleHours = () => {
    setHours((prev) => !prev);
  };

  // Function to handle what happens when the menu button is clicked
  // This function will toggle the menu state between true and false
  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div className="restaurant">
      <img src={props.restaurant.image} alt={props.name} />
      <h2>{props.restaurant.name}</h2>
      <ul>
        <li>{props.restaurant.address}</li>
        <li>{props.restaurant.phone}</li>
        <li>{props.restaurant.cuisine}</li>
        <li>{props.restaurant.rating}</li>
      </ul>
      {/* Adding onClick event handlers to the buttons that will display the hours and menu of the restaurant when clicked */}
      <button onClick={handleHours}>Hours</button>
      <button onClick={handleMenu}>Menu</button>

    </div>
  );
}

export default Restaurant;

