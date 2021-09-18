import React from "react";
import { useCoffees } from "../../context/Coffee/CoffeeContext";
function Content() {
  const { coffees } = useCoffees();
  const ingredientsSplit = (arr = Array) => {
    return arr.map((item, key) => <span key={key}>{`${item} `}</span>);
  };
  return (
    <div>
      {coffees.map((coffee) => (
        <div key={`coffee_id_${coffee.id.toString()}`} className="mb-5">
          <h3 className="bold-text">{coffee.title}</h3>
          <p>{coffee.description}</p>
          <span className="small">
            <strong>Ingredients: </strong>
            {ingredientsSplit(coffee.ingredients)}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Content;
