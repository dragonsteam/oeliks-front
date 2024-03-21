import { useState, Fragment } from "react";
import { Grid, GridItem, Box, Text, Heading, Image } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import TimeAgo from "react-timeago";

import no_image from "../../assets/no-image.png";
import { baseUrl } from "../../services/api-client";

const VipAds = ({ data }) => {
  const navigate = useNavigate();
  const [t, i18n] = useTranslation("global");
  return (
    <Box mt={10}>
      {/* <Heading align="center" fontSize={30}>
        {t("home.vipads.header")}
      </Heading> */}
      <Grid
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        mt={15}
        gap={4}
      >
        {data.map((page, index) => {
          return (
            <Fragment key={index}>
              {page.results.map((ad, index) => {
                const image =
                  ad.pictures.length !== 0
                    ? baseUrl + ad.pictures[0].image
                    : no_image;
                return (
                  <GridItem
                    key={ad.id}
                    mt={5}
                    cursor="pointer"
                    onClick={() => {
                      navigate("/post/" + ad.id);
                    }}
                  >
                    <Box boxShadow="md" borderRadius={10}>
                      <Image
                        aspectRatio={16 / 9}
                        w="100%"
                        borderRadius={10}
                        objectFit="cover"
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
                      <Text fontSize="sm">
                        <TimeAgo date={ad.date_posted} />
                      </Text>
                    </Box>
                  </GridItem>
                );
              })}
            </Fragment>
          );
        })}
      </Grid>
    </Box>
  );
};

export default VipAds;
