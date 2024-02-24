import { HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./common/ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding={5}>
      <Text fontWeight={600}>OELIKS</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
