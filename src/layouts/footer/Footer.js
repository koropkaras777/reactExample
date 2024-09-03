import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import '../../assets/styles/footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-navelements'>
          <span className='footer-navelements-header'>{t("products")}</span>
          <NavLink to="/products">Air Force 1</NavLink>
          <NavLink to="/products">Air Max 1</NavLink>
          <NavLink to="/products">Air Jordan 1</NavLink>
          <NavLink to="/products">Air Max Bliss</NavLink>
        </div>
        <div className='footer-navelements'>
          <span className='footer-navelements-header'>{t("help")}</span>
          <NavLink to="/about">{t("about")}</NavLink>
          <NavLink to="/">{t("faqs")}</NavLink>
          <NavLink to="/">{t("howitworks")}</NavLink>
          <NavLink to="/">{t("privacypolicy")}</NavLink>
          <NavLink to="/">{t("paymentpolicy")}</NavLink>
        </div>
        <div className='footer-navelements'>
          <span className='footer-navelements-header'>{t("getintouch")}</span>
          <NavLink to="/contact">customer@shoeshop.com</NavLink>
          <NavLink to="/contact">+380987654321</NavLink>
        </div>
      </div>
    </div>
  );
}
  
export default Footer;