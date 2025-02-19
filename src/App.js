import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from "react-i18next";
import Header from './layouts/header/Header.js';
import './assets/styles/app.css';

const App = () => {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <div className='app'>
        <Helmet>
          <title>{t("title")}</title>
        </Helmet>
        <Header />
      </div>
    </HelmetProvider>
  );
}

export default App;
