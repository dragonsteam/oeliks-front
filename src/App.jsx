import { Grid, GridItem, Show } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import "./styles/App.css";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"aside nav" "aside main"` }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav" boxShadow="xl" margin={5} borderRadius={15}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem
          area="aside"
          pos="fixed"
          width="250px"
          height="100vh"
          paddingX={5}
          boxShadow="xl"
        >
          <Sidebar />
        </GridItem>
      </Show>
      <GridItem area="main" margin={7}>
        {children}
      </GridItem>
    </Grid>
  );
}

export default App
