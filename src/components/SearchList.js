import React from 'react';
import Card from './Card';
import '../assets/styles/carts.css';

const SearchList = ({ filteredProducts }) => {
  const filtered = filteredProducts.map(product => <Card key={product.id} product={product} />); 
  return (
    <div className="carts-container"> 
      {filtered}
    </div>
  );
}

export default SearchList;