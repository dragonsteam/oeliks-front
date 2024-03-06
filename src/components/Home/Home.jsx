import { Button } from "@chakra-ui/react";

import useEntities from "../../hooks/useEntities";
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
    keys: ["vip-ads"],
    url: "/advertisements/vip",
    staleTime: 3 * 60 * 1000,
    redirectOn401: true,
    // appendAuth: true, // this is for everyone
  });

  return (
    <>
      <SearchBar />
      <Sections />
      <VipAds data={advertisements} />
    </>
  );
};

export default Home;
