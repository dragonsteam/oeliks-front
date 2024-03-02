import { Box, HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import LanguageSwitch from "./LanguageSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding={5}>
      <Text fontWeight={600}>OELIKS</Text>
      <HStack spacing={5}>
        <LanguageSwitch />
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default Navbar;
