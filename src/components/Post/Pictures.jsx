import { Box, Button, HStack, Image } from "@chakra-ui/react";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { baseUrl } from "../../services/api-client";

const Pictures = ({ data }) => {
  const [activePic, setActivePic] = useState(0);
  return (
    <Box bg="red.300" p={3} position="relative">
      {data.map((pic, index) => {
        return (
          <Box
            key={pic.id}
            display={index === activePic ? "block" : "none"}
            // position="absolute"
          >
            <Image
              src={baseUrl + pic.image}
              w="100%"
              aspectRatio={16 / 9}
              objectFit="cover"
              borderRadius={5}
              alt="ad-pic"
            />
          </Box>
        );
      })}
      <Box position="absolute" top={0} left={0} w="100%" h="100%" p={3}>
        <HStack justifyContent="space-between" h="100%">
          <Button variant="ghost" w={50} h="100%">
            <FaAngleLeft size={30} />
          </Button>
          <Button w={50} h="100%">
            <FaAngleRight size={30} />
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default Pictures;
