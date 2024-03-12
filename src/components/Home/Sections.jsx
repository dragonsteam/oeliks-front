import { useTranslation } from "react-i18next";
import { Grid, GridItem, Box, Text, Heading } from "@chakra-ui/react";

const sections_data = [
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
];

const Sections = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <Box mt={10}>
      <Heading align="center" fontSize={30}>
        {t("home.sections.header")}
      </Heading>
      <Grid
        templateColumns={{
          lg: "repeat(8, 1fr)",
          md: "repeat(6, 1fr)",
          sm: "repeat(4, 1fr)",
        }}
        gap={6}
        mt={5}
      >
        {sections_data.map((section, index) => {
          return (
            <GridItem
              key={index}
              w="100%"
              display="flex"
              justifyContent="center"
            >
              <Box>
                <Box w="20" h="20" bg="blue.500" rounded={50}></Box>
                <Text align="center" mt={3}>
                  {section.name}
                </Text>
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Sections;
