import { Grid, GridItem, Box, Text, Heading, Image } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import no_image from "../../assets/no-image.png";
import { baseUrl } from "../../services/api-client";

const VipAds = ({ data }) => {
  const [t, i18n] = useTranslation("global");
  return (
    <Box mt={10}>
      <Heading align="center" fontSize={30}>
        {t("home.vipads.header")}
      </Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap={2} mt={5}>
        {data &&
          data.map((ad, index) => {
            console.log(index, ad.pictures);
            const image =
              ad.pictures.length !== 0
                ? baseUrl + ad.pictures[0].image
                : no_image;
            return (
              <GridItem
                key={index}
                w="100%"
                boxShadow="md"
                borderBottomRadius={10}
              >
                <Box
                  w="100"
                  // h={180}
                  // objectFit='contain'
                  borderBottom="1px solid grey"
                >
                  <Image
                    w="100%"
                    h={180}
                    objectFit="cover"
                    borderTopRadius={10}
                    src={image}
                    alt="ad-pic"
                  />
                </Box>
                <Box p={2}>
                  <Text noOfLines={[1, 2]} maxWidth={250}>
                    {ad.title}
                  </Text>
                  <Text fontWeight="bold">
                    {ad.price} {ad.currency}
                  </Text>
                  <Text fontSize="sm">address, home, city</Text>
                  <Text fontSize="sm">{ad.date_posted}</Text>
                </Box>
              </GridItem>
            );
          })}
      </Grid>
    </Box>
  );
};

export default VipAds;
