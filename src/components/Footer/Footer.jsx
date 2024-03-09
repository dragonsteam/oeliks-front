import { Box, HStack, Text, chakra } from "@chakra-ui/react";
import { FaGithub, FaTelegram } from "react-icons/fa";

const CFaTelegram = chakra(FaTelegram);

const Footer = () => {
  return (
    <Box boxShadow="outline" mt={200}>
      <HStack px={{ sm: 5, lg: 40 }} py={5} spacing={40}>
        <Text fontWeight="bold">© 2024 Dragons Team - NickPhilomath</Text>
        <HStack fontSize={30} spacing={7}>
          <a href="https://github.com/nickphilomath" target="_blank">
            <FaGithub cursor="pointer" />
          </a>
          <a href="https://t.me/nickphilomath" target="_blank">
            <CFaTelegram cursor="pointer" color="blue.500" />
          </a>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Footer;
