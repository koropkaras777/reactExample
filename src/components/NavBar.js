import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { ReactComponent as Brand } from '../assets/icons/icon.svg';
import { ReactComponent as Hamburger } from '../assets/icons/hamburger.svg';
import { ReactComponent as Basket } from '../assets/icons/basket.svg';
import { ReactComponent as UkraineFlag } from '../assets/icons/ukraine-flag.svg';
import { ReactComponent as UnitedKingdomFlag } from '../assets/icons/unitedkingdom-flag.svg';
import CartContext from "../context/CartContext";
import '../assets/styles/navbar.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [context, setContext] = useContext(CartContext);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const { i18n, t } = useTranslation();

  const onChangeLang = (e) => {
    let navUa = document.querySelector('.nav-elements-language-ua');
    let navUaR = document.querySelector('.nav-elements-language-ua-repeat');
    let navEn = document.querySelector('.nav-elements-language-en');
    let navEnR = document.querySelector('.nav-elements-language-en-repeat');

    if(e.target.value === 'uk') {
      navUa.style.fontWeight = 'bold';
      navUaR.style.fontWeight = 'bold';
      navEn.style.fontWeight = '200';
      navEnR.style.fontWeight = '200';
    } else if(e.target.value === 'en') {
      navUa.style.fontWeight = '200';
      navUaR.style.fontWeight = '200';
      navEn.style.fontWeight = 'bold';
      navEnR.style.fontWeight = 'bold';
    }

    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <NavLink to="/"><Brand /></NavLink>
        </div>
        <div className="navelements">
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              <li>
                <NavLink to="/">{t("home")}</NavLink>
              </li>
              <li>
                <NavLink to="/products">{t("products")}</NavLink>
              </li>
              <li>
                <NavLink to="/contact">{t("contact")}</NavLink>
              </li>
              <li>
                <div className='nav-elements-language' id='nel1'>
                  <button className='nav-elements-language-ua' value='uk' onClick={onChangeLang}>
                    UA&nbsp;
                    <UkraineFlag />
                  </button>
                  <button className='nav-elements-language-en' value='en' onClick={onChangeLang}>
                    EN&nbsp;
                    <UnitedKingdomFlag />
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div className="shopping">
            <NavLink to="/cart">
              <Basket />
              <div>
                {context.length}
              </div>
            </NavLink>
          </div>
          <div className='nav-elements-language' id='nel2'>
            <button className='nav-elements-language-ua-repeat' value='uk' onClick={onChangeLang}>
              UA&nbsp;
              <UkraineFlag />
            </button>
            <button className='nav-elements-language-en-repeat' value='en' onClick={onChangeLang}>
              EN&nbsp;
              <UnitedKingdomFlag />
            </button>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;