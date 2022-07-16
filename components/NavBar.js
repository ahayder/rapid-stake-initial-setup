import {
  Flex,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      bg={useColorModeValue("gray.100", "gray.400")}
      px={4}
      h={16}
      alignItems={"center"}
      justifyContent={"space-between"}
      width={"100%"}
    >
      <Image width={"10rem"} src="/logo.png" alt="Sahara Token Logo" />

      <Flex alignItems={"center"}>
        <Stack direction={"row"} spacing={7}>
          <Button
            fontWeight="700"
            px="20px"
            py="11px"
            bgColor="rapidYellow.900"
            borderRadius="20px"
            border="1px solid white"
            color="gray.800"
            cursor="pointer"
            ml="2"
            _hover={{ color: "gray.900" }}
          >
            Connect Wallet
          </Button>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}
