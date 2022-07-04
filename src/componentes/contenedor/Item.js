import React from "react";
import './Item.css'


function Item({ item }) {
  return (
    <div className="item" >

      <h3>{item.title}</h3>
      <div className="container-img">
        <img src={item.pictureUrl} alt="" />
      </div>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <button>ver más detalles</button>
    </div>
  );
}

export default Item;