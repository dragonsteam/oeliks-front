import { Box, Button, Text, Spinner } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";

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
    hasNextPage,
  } = useEntities({
    keys: ["ads"],
    url: "/advertisements",
    staleTime: 3 * 60 * 1000,
    redirectOn401: true,
    infiniteQuery: true,
  });

  const fetchetDataCount = advertisements
    ? advertisements.pages.reduce((total, page) => {
        return total + page.results.length;
      }, 0)
    : 0;

  return (
    <Box>
      <CoverLetter />
      <SearchBar />
      <Sections />
      <InfiniteScroll
        scrollableTarget="main-div"
        dataLength={fetchetDataCount}
        hasMore={hasNextPage}
        next={() => {
          fetchNextPage();
        }}
        loader={
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        }
        endMessage={
          <Text textAlign="center" mb="40px">
            <b>You have reached the bottom</b>
          </Text>
        }
        style={{ overflow: "unset" }}
      >
        <VipAds
          data={isLoading || !advertisements ? [] : advertisements.pages}
        />
      </InfiniteScroll>
      {error && (
        <Text color="tomato" fontWeight="bold" mb={20} align="center">
          {error.message}
        </Text>
      )}
    </Box>
  );
};

export default Home;
