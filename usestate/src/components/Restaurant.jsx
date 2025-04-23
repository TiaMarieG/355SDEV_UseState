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

      {/* If hours is true, display the hours of the restaurant */}
      {hours && (
        <ul>
          {/* Had to look at solution to get this to work. I'm guessing we have to use Object.entries because the days/times are an object in the array */}
          {Object.entries(props.restaurant.hours).map(([day, time]) => (
            <li key={day}>
              {day}: {time}
            </li>
          ))}
        </ul>
      )}
        
      <button onClick={handleMenu}>Menu</button>
      {menu && (
        <ul>
          {/* This didn't need Object.entries. I'm guessing because array of objects to, the flip of hours */}
          {props.restaurant.menu.map((item, index) => (
            <li key={index}>
              {`${item.item}: $${item.price}`}
            </li>
          ))}      
        </ul>
      )}
    </div>
  );
}

export default Restaurant;

