import { useState } from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../footer/Footer';
import Home from '../../pages/Home';
import Products from '../../pages/Products';
import Contact from '../../pages/Contact';
import Cart from '../../pages/Cart';
import SelectedShoe from '../../components/SelectedShoe';
import CartContext from "../../context/CartContext";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import '../../assets/styles/header.css';


const Header = () => {
  const [context, setContext] = useState([]);

  return (
    <BrowserRouter>
      <CartContext.Provider value={[context, setContext]}>
        <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Products />} path="/products" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<Cart />} path="/cart" />
            <Route element={<SelectedShoe />} path="/products/:productId" />
          </Routes>
          <Footer />
      </CartContext.Provider> 
    </BrowserRouter>
  );
}
  
export default Header;
  