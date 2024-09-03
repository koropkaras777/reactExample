import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import '../assets/styles/carts.css';
import data from '../data.json';

const Carts = ({ item }) => {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    setProducts(data.shoes);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="carts-container">
      {
        products.map(product => (
          <div key={product.id} className="carts-cart">
            <NavLink to={'/products/' + product.id}>
              <div className="shoesImage">
                <img src={product.image} alt="Shoe Poster" />
              </div>
              <span className="carts-cart-title">{product.name}</span><br />
              <span className="carts-cart-price">{product.price}₴</span>
            </NavLink>
          </div>
        ))
      }
    </div>
  );
};

export default Carts;