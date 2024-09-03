import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>{t("title")} | {t("about")}</title>
        </Helmet>
        <p>About</p>
      </div>
    </HelmetProvider>
  );
}

export default About;