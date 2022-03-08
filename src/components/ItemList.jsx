import React from "react";

import Item from "./Item";

const ItemList = ({data}) => {
  return (
    <div className="container">
      <h3>LIST</h3>
      <div className="bordered-container">
        <p>
          El list existirá cuando esos datos consumidos podrián ser un array, o sea, podrian ser mas
          de uno.
        </p>
        <p>Es padre del componente Item.</p>
        {data.map((item) => (
          <Item key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
