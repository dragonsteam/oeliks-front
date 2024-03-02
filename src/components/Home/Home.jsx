import { Button } from "@chakra-ui/react";
import { SearchBar } from "./SearchBar";
import Sections from "./Sections";
import VipAds from "./VipAds";

const Home = () => {
  return (
    <>
      <SearchBar />
      <Sections />
      <VipAds />
    </>
  );
};

export default Home;
