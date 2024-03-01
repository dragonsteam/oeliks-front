import { Grid, GridItem, Box, Text, Heading } from "@chakra-ui/react";

const ads_data = [
  {
    name: "children",
    image_url: null,
  },
  {
    name: "property",
    image_url: null,
  },
  {
    name: "vehicles",
    image_url: null,
  },
  {
    name: "jobs",
    image_url: null,
  },
  {
    name: "pets",
    image_url: null,
  },
  {
    name: "home",
    image_url: null,
  },
  {
    name: "gadges",
    image_url: null,
  },
  {
    name: "business",
    image_url: null,
  },
  {
    name: "business",
    image_url: null,
  },
  {
    name: "business",
    image_url: null,
  },
];

const VipAds = () => {
  return (
    <Box mt={10}>
      <Heading align="center" fontSize={30}>
        VIP Advertisements
      </Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap={2} mt={5}>
        {ads_data.map((ad) => {
          return (
            <GridItem w="100%" bg="blue.500" borderRadius={10}>
              <Box w="100" h={200} bg="green.500" borderTopRadius={10}>
                image
              </Box>
              <Box>
                <Text align="center" mt={3}>
                  {ad.name}
                </Text>
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default VipAds;
