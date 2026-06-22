import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import { CartProvider } from "./Context/CartContext";

export default function App() {
  return (
    <BrowserRouter>
   <CartProvider>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
   </CartProvider>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
