import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Grid, GridItem, Heading } from "@chakra-ui/react";

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
      <Button
        mb={5}
        colorScheme="blue"
        onClick={() => {
          navigate("/");
        }}
      >
        {"<<"} Back
      </Button>
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
            <Heading fontSize={30}>Description</Heading>
            <Box>{ad.description}</Box>
          </GridItem>
          <GridItem pl="2" bg="orange.300" area={"side"}>
            Side
          </GridItem>
        </Grid>
      )}
    </Box>
  );
};

export default Post;
