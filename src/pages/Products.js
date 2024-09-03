import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from 'react';
import '../assets/styles/products.css';
import Search from '../components/Search';
import data from '../data.json';

const Products = () => {
  const { t } = useTranslation();

  const [products, setProducts] = useState([]);

  async function getProducts() {
    setProducts(data.shoes);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <HelmetProvider>
      <div className='products-container'>
        <Helmet>
          <title>{t("title")} | {t("products")}</title>
        </Helmet>
        <Search details={products}/>
      </div>
    </HelmetProvider>
  );
}

export default Products;