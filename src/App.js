import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, } from 'react-router-dom';
import Home from './Componments/Home';
import ProductDetails from './Componments/ProductDetails';
import Cart from './Componments/Cart';
import { useSelector, useDispatch } from "react-redux";


import { createContext } from 'react';


export const demoContex = createContext()
function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pro/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;



