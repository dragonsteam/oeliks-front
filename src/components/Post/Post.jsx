import { useNavigate, useParams } from "react-router-dom";
import { Text, Box, Button, Grid, GridItem, Heading } from "@chakra-ui/react";

import useEntities from "../../hooks/useEntities";
import Pictures from "./Pictures";

const Post = () => {
  const navigate = useNavigate();
  const { id: post_id } = useParams();

  const {
    data: ad,
    error,
    isLoading,
    refetch,
  } = useEntities({
    keys: ["post", post_id],
    url: "/advertisements/" + post_id,
    staleTime: 3 * 60 * 1000,
  });

  return (
    <Box>
      {/* 
        main
            pictures
            description
            contact

        side
            price
            vendor
            address
      */}
      {!isLoading && (
        <Grid
          templateAreas={{
            base: `"main" "side"`,
            lg: `"main side"`,
          }}
          // gridTemplateRows={"50px 1fr 30px"}
          gridTemplateColumns={{ base: "1fr", lg: "0.7fr 0.3fr" }}
          gap={3}
          fontWeight="bold"
        >
          <GridItem area={"main"}>
            {ad.pictures.length ? <Pictures data={ad.pictures} /> : <></>}
            <Heading fontSize={25} mt={5}>
              {ad.title}
            </Heading>
            <Text fontSize={20} mt={3}>
              {ad.price} {ad.currency}
            </Text>
            <Heading fontSize={22} mt={10}>
              Description
            </Heading>
            <Box>{ad.description}</Box>
          </GridItem>
          <GridItem bg="orange.300" area={"side"}>
            <Box bg="green.300" mt={5}>
              <Box bg="blue.300" w="70px" h="70px" borderRadius={50}></Box>
            </Box>
            <Box bg="red.300" mt={10}>
              <Box bg="blue.300" w="100px" h="100px"></Box>
            </Box>
          </GridItem>
        </Grid>
      )}
    </Box>
  );
};

export default Post;
