import { Box, Text } from "@chakra-ui/react";

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
    refetch,
  } = useEntities({
    keys: ["ads"],
    url: "/advertisements",
    staleTime: 3 * 60 * 1000,
    redirectOn401: true,
    // appendAuth: true, // this is for everyone
  });

  return (
    <Box>
      <CoverLetter />
      <SearchBar />
      <Sections />
      <VipAds data={isLoading ? { results: [] } : advertisements} />
    </Box>
  );
};

export default Home;
