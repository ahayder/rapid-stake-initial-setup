import React from "react";
import { Flex, Button, useColorModeValue, Text } from "@chakra-ui/react";

const UnStake = () => {

  return (
    <Flex direction={"column"}>
      <Flex bg={"rapidYellow.900"} p="5" direction={"column"} borderRadius={"md"}>
        <Text fontSize={"xl"} fontWeight="bold">
          My Staked RPT
        </Text>
        <Button type="small" variant={"link"}>Click to show my balance</Button>
      </Flex>

      <Button mt={"3"} size={"lg"} bg={useColorModeValue("gray.900", "gray.400")} color={useColorModeValue("white", "gray.900")}>
        Un Stake
      </Button>
    </Flex>
  );
};

export default UnStake;
