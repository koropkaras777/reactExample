import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/carts.css';

const Card = ({product}) => {
  return(
    <div key={product.id} className="carts-cart">
      <NavLink to={'/products/' + product.id} state={{ product: product }}>
        <div className="shoesImage">
          <img src={product.image} alt="Shoe Poster" />
        </div>
        <span className="carts-cart-title">{product.name}</span><br />
        <span className="carts-cart-price">{product.price}₴</span>
      </NavLink>
    </div>
  );
}

export default Card;