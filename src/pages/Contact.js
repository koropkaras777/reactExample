import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from "react-i18next";
import '../assets/styles/contacts.css';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <div className='contact-container'>
        <Helmet>
          <title>{t("title")} | {t("contact")}</title>
        </Helmet>
        <h2>{t("contact")}</h2>
        <div className='contact-item'>
          <span>Email</span>
          <span>customer@shoeshop.com</span>
        </div>
        <div className='contact-item'>
          <span>{t("phonenumber")}</span>
          <span>+380987654321</span>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Contact;