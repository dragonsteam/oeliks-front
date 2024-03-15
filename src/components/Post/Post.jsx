import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Grid, GridItem } from "@chakra-ui/react";

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
      <Grid
        templateAreas={{
          base: `"main" "side"`,
          lg: `"main side"`,
        }}
        // gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={{ base: "1fr", lg: "0.7fr 0.3fr" }}
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem bg="orange.300" area={"main"}>
          <Pictures data={ad ? ad.pictures : []} />
          main
        </GridItem>
        <GridItem pl="2" bg="pink.300" area={"side"}>
          Side
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Post;
