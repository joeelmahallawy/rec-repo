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
import { Query } from "../interfaces/types";

const IndexPage = () => {
  const [query, Setquery] = useState<Query>({
    translateFrom: "English",
    translateTo: "Mohawk",
    word: "",
  });
  const [currState, toggleCurrState] = useState(true);

  return (
    <Box>
      <Center id="nav-bar" bg="dodgerblue" h="275px">
        <Text color="white" fontSize={20}>
          Indigenous Translation
        </Text>
      </Center>
      <Box bg="red" mt="5%">
        <Flex bg="blue" justifyContent="space-around">
          {toggleLanguage(currState, query, Setquery)}
          <IconButton
            aria-label="Switch languages"
            icon={<HiSwitchHorizontal />}
            size="lg"
            borderRadius="25px"
            onClick={() => {
              toggleCurrState(!currState);
            }}
          />
          {toggleLanguage(!currState, query, Setquery)}
        </Flex>
        <Flex bg="red" justifyContent="space-around" m="5%">
          <Input
            placeholder="Enter word here..."
            w="250px"
            onChange={(e) => {
              Setquery({ ...query, word: e.currentTarget.value });
              // console.log(e.currentTarget.value);
            }}
          />
          {console.log(query)}

          <Input
            placeholder="Translated word here..."
            isReadOnly={true}
            w="250px"
          ></Input>
        </Flex>
        <Center bg="black">
          <Button
            onClick={async () => {
              const headerToSend = {
                translateFrom: query.translateFrom,
                translateTo: query.translateTo,
                word: query.word,
              };
              const res = await fetch("/api/mongo", {
                method: "GET",
                headers: headerToSend,
              });
              const data = await res.text();
            }}
          >
            Translate!
          </Button>
        </Center>
        {/* TODO: TODO:*/}
      </Box>
    </Box>
  );
};

export default IndexPage;
