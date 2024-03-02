import { useNavigate } from "react-router-dom";
import { Box, HStack, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { LuUser } from "react-icons/lu";
import Logo from "./Logo";
import ColorModeSwitch from "./ColorModeSwitch";
import LanguageSwitch from "./LanguageSwitch";

const Navbar = () => {
  const navigate = useNavigate();
  const [t, i18n] = useTranslation("global");

  return (
    <HStack justifyContent="space-between" padding={5}>
      <Logo />
      <HStack spacing={5}>
        <LanguageSwitch />
        <HStack
          border="1px solid"
          px={3}
          py={1}
          borderRadius={5}
          cursor="pointer"
          onClick={() => {
            navigate("/new-post");
          }}
        >
          <LuUser size="22px" />
          <Text fontSize="md" fontWeight="bold">
            {t("navbar.profile")}
          </Text>
        </HStack>
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default Navbar;
