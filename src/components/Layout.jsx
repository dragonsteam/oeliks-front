import { Grid, GridItem, Show } from "@chakra-ui/react";
import "../styles/App.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <GridItem boxShadow="md" margin={5} borderRadius={15}>
        <Navbar />
      </GridItem>
      <GridItem margin="auto" mt={50} width={{ base: "92%", lg: "60%" }}>
        <Outlet />
      </GridItem>
    </>
  );
};

export default Layout;
