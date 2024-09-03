import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';
import '../assets/styles/search.css';
import { useTranslation } from "react-i18next";

const Search = ({ details }) => {
  const [searchField, setSearchField] = useState("");

  const { t } = useTranslation();

  const filteredProducts = details.filter(
    product => {
      return (
        product
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        product
        .brand
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  const searchList = () => {
    return (
      <Scroll>
        <SearchList filteredProducts={filteredProducts} />
      </Scroll>
    );
  }

  return (
    <div className="search-container">
      <input 
        type = "search" 
        placeholder = {t("search")} 
        onChange = {handleChange}
      />
      {searchList()}
    </div>
  );
}

export default Search;