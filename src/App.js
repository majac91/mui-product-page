import React, {useState} from 'react';
import './App.css';

import data from './data/data.json';
import CartCtx from "./context/CartContext";

import Header from "./components/Header/Header";
import ProductMain from "./components/ProductMain/ProductMain";

function App() {
  const [cartItems, setCartItems] = useState(data.cart.items);

  return (
    <CartCtx.Provider value={[cartItems, setCartItems]}>
      <Header/>
      <ProductMain/>
    </CartCtx.Provider>
  );
}

export default App;
