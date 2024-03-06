import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Input, Grid, GridItem, Text } from "@chakra-ui/react";
import { MdCameraAlt, MdOutlineCameraAlt } from "react-icons/md";

const Pictures = () => {
  const [t, i18n] = useTranslation("global");

  const max_pictures = 8;
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < max_pictures; i++) {
      arr.push({
        name: undefined,
        url: undefined,
      });
      setPictures(arr);
    }
  }, []);

  return (
    <Box>
      <Text>pictures</Text>
      <input
        type="file"
        onChange={(e) => {
          console.log("pic", e);
        }}
      />
      <Grid templateColumns="repeat(4, 1fr)" gap={2} mt={2}>
        {pictures.map((pic, index) => {
          if (!pic.url)
            return (
              <GridItem
                key={index}
                w="100%"
                h={150}
                borderRadius={4}
                border="1px solid grey"
                boxShadow="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <MdCameraAlt size={40} />
              </GridItem>
            );
        })}
      </Grid>
    </Box>
  );
};

export default Pictures;
