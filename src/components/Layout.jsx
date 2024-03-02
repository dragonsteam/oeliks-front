import { Grid, GridItem, Show } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import "../styles/App.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <>
      <GridItem boxShadow="md" margin={5} borderRadius={15}>
        <Navbar />
      </GridItem>
      <GridItem margin="auto" mt={50} width={{ base: "92%", lg: "60%" }}>
        <Outlet />
      </GridItem>
      <GridItem margin="auto" mt={50} width="100%">
        <Footer />
      </GridItem>
    </>
  );
};

export default Layout;
