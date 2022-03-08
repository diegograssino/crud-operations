import React, {useEffect, useState} from "react";

import ItemList from "./ItemList";

const ItemListContainer = () => {
  const PRODUCTS = [
    {
      id: 1,
      name: "Product 1",
      price: 10,
    },
    {
      id: 2,
      name: "Product 2",
      price: 10,
    },
    {
      id: 3,
      name: "Product 3",
      price: 10,
    },
  ];

  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    setTimeout(() => {
      setData(PRODUCTS);
      setIsLoaded(true);
    }, 2000);
  }, []);

  return (
    <div className="container">
      <h3>CONTAINER</h3>
      <div className="bordered-container">
        <p>El container tendra la función de consumir datos y manejar los loaders.</p>
        <p>En este caso lo mostramos graficamente pero no tiene contenido visual normalmente.</p>
        <p>Es padre del componente List.</p>
        {isLoaded ? <ItemList data={data} /> : <div className="container">Cargando...</div>}
      </div>
    </div>
  );
};

export default ItemListContainer;
