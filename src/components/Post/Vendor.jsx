import { useState } from "react";
import {
  useBreakpointValue,
  Box,
  Button,
  ButtonGroup,
  Text,
  HStack,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { RiUser3Line } from "react-icons/ri";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";
import { HiOutlineShare, HiOutlineFlag } from "react-icons/hi";

const Vendor = () => {
  const isSmallDevice = useBreakpointValue({ base: true, sm: true, lg: false });
  const [isSubscribed, setSubscribed] = useState(false);
  const [likeStatus, setLikeStatus] = useState(undefined);

  const handleLike = () => {
    setLikeStatus(likeStatus === "like" ? undefined : "like");
  };
  const handleDisLike = () => {
    setLikeStatus(likeStatus === "dislike" ? undefined : "dislike");
  };

  const getButtons = () => {
    return (
      <HStack spacing={3}>
        <ButtonGroup isAttached variant="outline">
          <Button
            leftIcon={
              likeStatus === "like" ? (
                <AiFillLike size="20px" />
              ) : (
                <AiOutlineLike size="20px" />
              )
            }
            onClick={handleLike}
          >
            2.7k
          </Button>
          <Button
            leftIcon={
              likeStatus === "dislike" ? (
                <AiFillDislike size="20px" />
              ) : (
                <AiOutlineDislike size="20px" />
              )
            }
            onClick={handleDisLike}
          >
            13
          </Button>
        </ButtonGroup>
        <Button variant="outline" leftIcon={<HiOutlineShare />}>
          Share
        </Button>
        <Button variant="outline" leftIcon={<HiOutlineFlag />}>
          Report
        </Button>
      </HStack>
    );
  };

  return (
    <Box mt="30px">
      <HStack justifyContent="space-between">
        <HStack>
          <Box
            // bg="blue.300"
            // color="blackAlpha.700"
            w="80px"
            h="80px"
            borderRadius={50}
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="1px solid grey"
            cursor="pointer"
          >
            <RiUser3Line size="40px" />
          </Box>
          <VStack mr="40px">
            <Text fontSize={24} fontWeight="bold" cursor="pointer">
              John Doe
            </Text>
            <Text fontWeight="600">34k subscribers</Text>
          </VStack>
          {!isSubscribed ? (
            <Button
              colorScheme="blue"
              onClick={() => {
                setSubscribed(true);
              }}
            >
              Subscribe
            </Button>
          ) : (
            <Button colorScheme="blue" variant="outline">
              Subscribed
            </Button>
          )}
        </HStack>
        {!isSmallDevice && getButtons()}
      </HStack>
      <Box mt="15px">{isSmallDevice && getButtons()}</Box>
    </Box>
  );
};

export default Vendor;
