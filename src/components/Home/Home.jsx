import { Box, Button, Text } from "@chakra-ui/react";

import useEntities from "../../hooks/useEntities";
import CoverLetter from "./CoverLetter";
import { SearchBar } from "./SearchBar";
import Sections from "./Sections";
import VipAds from "./VipAds";

const Home = () => {
  const {
    data: advertisements,
    error,
    isLoading,
    fetchNextPage,
  } = useEntities({
    keys: ["ads"],
    url: "/advertisements",
    staleTime: 3 * 60 * 1000,
    redirectOn401: true,
    infiniteQuery: true,
  });

  return (
    <Box>
      <CoverLetter />
      <SearchBar />
      <Sections />
      <VipAds data={isLoading ? [] : advertisements.pages} />
      <Button
        onClick={() => {
          fetchNextPage();
        }}
      >
        Load more
      </Button>
    </Box>
  );
};

export default Home;
