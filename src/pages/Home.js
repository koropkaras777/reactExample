import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from "react-i18next";
import { ReactComponent as Truck } from '../assets/icons/truck.svg';
import { ReactComponent as Safety } from '../assets/icons/safety.svg';
import { ReactComponent as HandLove } from '../assets/icons/handlove.svg';
import ShoePoster from '../assets/images/shoeexample.webp';
import '../assets/styles/home.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <div className='home-container'>
        <Helmet>
          <title>{t("title")}</title>
        </Helmet>
        <div className='newcollection-element'>
          <div className='newcollection-element-about'>
            <span>{t("newcollections")}</span>
            <span>{t("newarrival")}</span>
            <span>{t("discoverstylish")}</span>
          </div>
          <div className='newcollection-element-image'>
            <img src={ShoePoster} alt="Shoe Poster" />
          </div>
        </div>
        <div className='newcollection-element-score'>
          <div className='newcollection-element-score-container'>
            <span>20+</span>
            <span>{t("brands")}</span>
          </div>
          <div className='newcollection-element-score-container'>
            <span>10+</span>
            <span>{t("shops")}</span>
          </div>
          <div className='newcollection-element-score-container'>
            <span>250k+</span>
            <span>{t("customers")}</span>
          </div>
        </div>
        <div className='newcollection-element-advantages'>
          <div className='newcollection-element-advantages-container'>
            <div>
              <Truck/>
            </div>
            <span>{t("freeshipping")}</span>
            <span>{t("enjoyseamless")}</span>
          </div>
          <div className='newcollection-element-advantages-container'>
            <div>
              <Safety/>
            </div>
            <span>{t("securepayment")}</span>
            <span>{t("experienceworry")}</span>
          </div>
          <div className='newcollection-element-advantages-container'>
            <div>
              <HandLove/>
            </div>
            <span>{t("loveto")}</span>
            <span>{t("ourdedicated")}</span>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Home;