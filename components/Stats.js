import { Flex, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup, Spacer } from "@chakra-ui/react";

const Stats = () => {
  return (
    <Flex justifyContent={"space-between"} width="100%" mb={"10"}>
      <Stat>
        <StatLabel>Stakers</StatLabel>
        <StatNumber>{0}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Total Staked</StatLabel>
        <StatNumber>{0}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Total Withdrawn</StatLabel>
        <StatNumber>{0}</StatNumber>
      </Stat>
    </Flex>
  );
};

export default Stats;
