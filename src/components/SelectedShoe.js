import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from "react-i18next";
import CartContext from "../context/CartContext";
import '../assets/styles/selectedshoe.css';

const SelectedShoe = () => {
  let location = useLocation();
  let product = location.state.product;

  const [context, setContext] = useContext(CartContext);
  const [addedIn, setAddedIn] = useState(false);

  const handleAddedIn = () => {
    if(addedIn === false) {
      let selectedSize = document.querySelector('#inputsize').value;

      if(selectedSize) {
        let selectedProduct = { "product" : product, "size" : selectedSize, };
        setContext(p => [...p, selectedProduct]);

        setAddedIn(true);
      } 
    }
  }  

  const { t } = useTranslation();
  const sizesOfShoe = (product.availableSize).map(size => <option key={size} value={size}/>)

  return(
    <HelmetProvider>
      <div className="shoe-container">
        <Helmet>
          <title>{product.name}</title>
        </Helmet>
        <div className="shoe-poster">
          <img src={product.image} alt="Shoe Poster"/>
        </div>
        <div className="shoe-information">
          <h2>{product.name}</h2>
          <div className="shoe-information-elem">
            <p>{t("brand")}</p>
            <h3>{product.brand}</h3>
          </div>
          <div className="shoe-information-elem">
            <p>{t("typeofshoe")}</p>
            <h3>{t(product.type)}</h3>
          </div>
          <div className="shoe-information-elem">
            <p>{t("sex")}</p>
            <h3>{t(product.sex)}</h3>
          </div>
          <div className="shoe-information-elem">
            <p>{t("isavailable")}</p>
            <h3>{ product.isAvailable ? t("yes") : t("no") }</h3>
          </div>
          <div className="shoe-information-elem">
            <p>{t("availablesize")}</p>
            <input className="input-sizes" list="sizes" id="inputsize" required/>
            <datalist id="sizes">
              {sizesOfShoe}
            </datalist>
          </div>
          <div className="product-price">
            <h2>{product.price}₴</h2>
            { product.isAvailable ? 
            <button className="product-button" role="button" onClick={handleAddedIn}>{ addedIn ? t("added") : t("addtocart") }</button> 
            :
            <button className="product-button" role="button">{ t("onavai") }</button> 
            }
          </div>       
        </div>
      </div>
    </HelmetProvider>
    
  );
}

export default SelectedShoe;