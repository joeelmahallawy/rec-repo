import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  IconButton,
  Text,
  Select,
  Input,
  Slide,
  ScaleFade,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { HiSwitchHorizontal } from "react-icons/hi";
import toggleLanguage from "../helpers/toggleLanguage";

const IndexPage = () => {
  const [currState, toggleCurrState] = useState(true);

  return (
    <>
      <Center bg="dodgerblue" h="275px">
        <Text color="white" fontSize={20}>
          Indigenous Translation
        </Text>
      </Center>
      <Flex justifyContent="space-around" m="50px">
        {toggleLanguage(currState)}
        <IconButton
          aria-label="Switch languages"
          icon={<HiSwitchHorizontal />}
          size="lg"
          borderRadius="25px"
          onClick={() => {
            toggleCurrState(!currState);
          }}
        />
        {toggleLanguage(!currState)}
      </Flex>
      <Flex justifyContent="space-around" m="50px">
        <Input placeholder="Enter word here..." w="250px"></Input>
        <Input
          placeholder="Translated word here..."
          isReadOnly={true}
          w="250px"
        ></Input>
      </Flex>
      <Center>
        <Button>Translate!</Button>
      </Center>
    </>
  );
};

export default IndexPage;
