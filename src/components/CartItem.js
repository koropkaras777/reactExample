import { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import CartContext from "../context/CartContext";
import '../assets/styles/cart.css';

const CartItem = ({product}) => {
  const { t } = useTranslation();

  const [context, setContext] = useContext(CartContext);

  const handleRemoveItem = () => {
    setContext((p) => {
      return p.filter((item) => item !== product);
    });
  }

  return(
    <div key={product.product.id} className='cart-item'>
      <div className='cart-item-title'>
        <span>{product.product.name}</span>
        <span>{product.size} {t("size")}</span>
      </div>
      <div className='cart-item-price'>
        <span>{product.product.price}₴</span>
        <button className="remove-button" role="button" onClick={handleRemoveItem}>{t("remove")}</button>
      </div>
    </div>
  );
}

export default CartItem;