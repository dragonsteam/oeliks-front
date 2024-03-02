import { useTranslation } from "react-i18next";
import { Button } from "@chakra-ui/react";
import { SearchBar } from "./SearchBar";
import Sections from "./Sections";
import VipAds from "./VipAds";

const Home = () => {
  const [t, i18n] = useTranslation("global");
  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <>
      <SearchBar />
      <Sections />
      <VipAds />
      <p>{t("header.message")}</p>
      <Button
        onClick={() => {
          handleChangeLang("en");
        }}
      >
        EN
      </Button>
      <Button
        onClick={() => {
          handleChangeLang("uz");
        }}
      >
        UZ
      </Button>
    </>
  );
};

export default Home;
