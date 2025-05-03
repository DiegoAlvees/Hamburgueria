import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { useEffect } from "react";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

export default function App() {
  const [data, setData] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [flowCart, setFlowCart] = useState(false);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };


  useEffect(() => {
    fetch("/menu.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <Header />
      <Menu data={data} addToCart={addToCart}/>
      <div className={`display ${flowCart ? "block" : "hidden"}`}>
        <Cart cartItems={cartItems} setFlowCart={setFlowCart} />
      </div>
      <Footer setFlowCart={setFlowCart} cartItems={cartItems} />
    </div>
  );
}
