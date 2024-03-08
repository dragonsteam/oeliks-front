import { Grid, GridItem, Box, Text, Heading, Image } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

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
            return (
              <GridItem
                key={index}
                w="100%"
                borderRadius={10}
                border="1px solid grey"
                boxShadow="md"
              >
                <Box
                  w="100"
                  h={200}
                  borderTopRadius={10}
                  borderBottom="1px solid grey"
                >
                  <Image
                    src="http://localhost:8000/media/ad/images/snapedit_1709880642958_Bbpii1R.jpeg"
                    alt="ad-pic"
                  />
                </Box>
                <Box p={2}>
                  <Text>{ad.title}</Text>
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
