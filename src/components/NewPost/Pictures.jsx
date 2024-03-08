import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Progress, Grid, GridItem, Text, Image } from "@chakra-ui/react";
import { MdCameraAlt, MdOutlineCameraAlt } from "react-icons/md";
import { baseUrl } from "../../services/api-client";
import useRequest from "../../hooks/useRequest";

const Pictures = () => {
  const [t, i18n] = useTranslation("global");
  const { post, isLoading } = useRequest({
    url: "/advertisements/images/new",
    // redirectOn401: true,
    // appendAuth: true,
  });

  const [pictures, setPictures] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInput = useRef(null);

  const handlePicChose = (e) => {
    const fd = new FormData();

    console.log("***", e.target.files[0]);

    fd.append("image", e.target.files[0], e.target.files[0].name);

    post({
      data: fd,
      callback: (data) => {
        console.log(data);
        setPictures([...pictures, data]);
        console.log(pictures);
      },
      uploadHandler: (e) => {
        console.log(
          "upload progress: ",
          Math.round((e.loaded / e.total) * 100) + " %"
        );
        setUploadProgress(Math.round((e.loaded / e.total) * 100));
      },
    });
  };

  return (
    <Box>
      <Text>pictures</Text>
      <input
        type="file"
        ref={fileInput}
        style={{ display: "none" }}
        onChange={(e) => {
          handlePicChose(e);
        }}
      />
      <Grid templateColumns="repeat(4, 1fr)" gap={2} mt={2}>
        {pictures.map((pic, index) => {
          if (!pic.url)
            return (
              <GridItem
                key={pic.id}
                w="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src={baseUrl + pic.image}
                  h={150}
                  borderRadius={4}
                  alt="ad-pic"
                />
              </GridItem>
            );
        })}
        <GridItem
          w="100%"
          h={150}
          borderRadius={4}
          border="1px solid grey"
          boxShadow="md"
          cursor="pointer"
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={() => {
            fileInput.current.click();
          }}
        >
          <MdCameraAlt size={40} />
        </GridItem>
      </Grid>
      {isLoading && (
        <Progress hasStripe value={uploadProgress} mt={5} borderRadius={5} />
      )}
    </Box>
  );
};

export default Pictures;
