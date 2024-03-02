import { Select } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const LanguageSwitch = () => {
  const [t, i18n] = useTranslation("global");
  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <Select
      size="sm"
      defaultValue="en"
      onChange={(e) => {
        handleChangeLang(e.target.value);
      }}
    >
      <option value="en">EN</option>
      <option value="uz">UZ</option>
      <option value="ru">RU</option>
    </Select>
  );
};

export default LanguageSwitch;
