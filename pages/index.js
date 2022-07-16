import { Flex } from "@chakra-ui/react";
import MainCointainer from "../components/MainContainer";
import NavBar from "../components/NavBar";

export default function Home() {


  return (
    <>
      <Flex height="100vh" direction="column" justifyContent="space-between" alignItems="center">
        <NavBar />
        <Flex height={"100%"} width={"100%"} justifyContent={"center"} alignItems={"center"}>
          <MainCointainer />
        </Flex>
      </Flex>
    </>
  );
}
