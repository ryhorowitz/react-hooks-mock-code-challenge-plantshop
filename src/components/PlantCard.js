import React, { useState } from "react";

function PlantCard( {id, name, image, price }) {
  const [inStock, setInStock] = useState(true)

  return (
    <li className="card" id={id}>
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary"
        onClick={() => {setInStock(!inStock)}}>In Stock</button>
      ) : (
        <button onClick={() => {setInStock(!inStock)}}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
