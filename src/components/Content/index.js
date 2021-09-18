import React from "react";
import { useCoffees } from "../../context/Coffee/CoffeeContext";
function Content() {
  const { coffees } = useCoffees();
  const arraySplit = (arr = Array) => {
    return arr.map((i, key) => <span key={key}>{`${i} `}</span>);
  };
  return (
    <div>
      {coffees.map((coffee, index) => (
        <div key={`coffee_id_${index}`} className="mb-5">
          <h3 className="bold-text">{coffee.title}</h3>
          <p className="bold-text">{coffee.description}</p>
          <span className="small">
            <strong>Ingredients: </strong>
            {arraySplit(coffee.ingredients)}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Content;
