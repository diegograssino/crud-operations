import React from "react";

const Item = ({data}) => {
  return (
    <div className="container">
      <h3>ITEM</h3>
      <div className="bordered-container">
        <p>
          El item es cada uno de los elementos del list, al dejarlo aislado, es mas reutilizable.
        </p>
        <br />
        <p>{data.name}</p>
        <p>{data.price}</p>
      </div>
    </div>
  );
};

export default Item;
