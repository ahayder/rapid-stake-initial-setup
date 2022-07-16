import { Flex, useColorModeValue, Tabs, TabList, TabPanels, Tab, TabPanel, Button, Heading } from "@chakra-ui/react";
import UnStake from "./Tabs/UnStake";
import Stake from "./Tabs/Stake";
import Stats from "./Stats";

const MainCointainer = () => {
  return (
    <Flex direction={"column"} px={4} alignItems={"center"} justifyContent={"space-between"} width={["100%", "80%", "55%", "50%", "40%"]}>
      <Heading mb="5">Stake Your RPT Token</Heading>
      <Flex direction={"column"} width={"100%"}>
        <Button mb={"3"} size={"lg"} bg={useColorModeValue("gray.900", "gray.400")} color={useColorModeValue("white", "gray.900")}>
          Approve your RPT Token to Rapid Stake
        </Button>
        <Stats/>
      </Flex>
      <Tabs variant="unstyled" width={"100%"} align="center" size="lg">
        <TabList bg={useColorModeValue("gray.100", "gray.400")} borderRadius={"md"}>
          <Tab borderRadius={"md"} _selected={{ color: "gray.900", bg: "rapidYellow.900" }} width={"100%"} fontWeight={"bold"}>
            Stake
          </Tab>
          <Tab borderRadius={"md"} _selected={{ color: "gray.900", bg: "rapidYellow.900" }} width={"100%"} fontWeight={"bold"}>
            Un Stake
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel px={"0"}>
            <Stake/>
          </TabPanel>
          <TabPanel px={"0"}>
            <UnStake/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default MainCointainer;
