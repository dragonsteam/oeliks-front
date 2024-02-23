import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { LuSun, LuMoonStar } from "react-icons/lu"

// const CLuSun = chakra(LuSun);
// const CLuMoonStar = chakra(FaLLuMoonStarock);

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      {colorMode === 'dark' && (
        <LuSun size="27px" onClick={toggleColorMode} />
      )}
      {colorMode === 'light' && (
        <LuMoonStar size="27px" onClick={toggleColorMode} />
      )}
    </HStack>
  );
};

export default ColorModeSwitch;
