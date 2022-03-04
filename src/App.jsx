import {useState} from "react";
import "./App.css";

function App() {
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

  const [cart, setCart] = useState([]);

  const addToCart = (product, q) => {
    if (isDuplicate(product)) {
      // Hago copia del carrito (recordar NUNCA modificar states directamente, siempre con el setter), en el mismo paso lo filtro por el id que esta duplicado, hago lo mismo con la cantidad original de ese producto.
      const newCart = cart.filter((item) => item.id !== product.id);
      const oldQ = cart.find((item) => item.id === product.id).q;

      // Ahora uso el setter para actualizar el carrito con el nuevo producto y la nueva cantidad (que es la cantidad que habia antes mas la nueva que se agrega).
      setCart([...newCart, {...product, q: oldQ + q}]);
    } else {
      setCart([...cart, {...product, q}]);
    }
  };

  const isDuplicate = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <div className="container">
      <h2>OPERACIONES DE ARRAY SOBRE UN CARRITO</h2>
      <br />
      {PRODUCTS.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <button onClick={() => addToCart(product, 1)}>Agregar 1</button>
          <br />
          <br />
        </div>
      ))}
      <button onClick={emptyCart}>Vaciar carrito</button>
      <br /> <br />
      <br />
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div key={index}>
            <p>Producto: {item.name}</p>
            <p>Cantidad: {item.q}</p>
            <p>Total: {item.price * item.q}</p>
            <br />
            <br />
          </div>
        ))
      ) : (
        <p>Carrito vacío</p>
      )}
    </div>
  );
}

export default App;
