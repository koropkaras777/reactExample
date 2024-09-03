import { useContext, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from "react-i18next";
import CartContext from "../context/CartContext";
import CartItem from '../components/CartItem';
import '../assets/styles/cart.css';

const Cart = () => {
  const { t } = useTranslation();
  const [context, setContext] = useContext(CartContext);

  const filtered = context.map(product => <CartItem key={product} product={product} />); 

  return (
    <HelmetProvider>
      <div className='cart-container'>
        <Helmet>
          <title>{t("title")} | {t("cart")}</title>
        </Helmet>
        <span className='cart-container-title'>{t("cart")}</span>
        {filtered}
        <button className="order-button" role="button">{t("order")}</button> 
      </div>
    </HelmetProvider>
  );
}

export default Cart;