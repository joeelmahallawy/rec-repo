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
    <>
      <Center bg="dodgerblue" h="275px">
        <Text color="white" fontSize={20}>
          Indigenous Translation
        </Text>
      </Center>
      <Flex justifyContent="space-around" m="50px">
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
      <Flex justifyContent="space-around" m="50px">
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
      <Center>
        <Button
          onClick={async () => {
            const res = await fetch("/api/mongo", {
              headers: {
                //
              },
            });
          }}
        >
          Translate!
        </Button>
      </Center>
    </>
  );
};

export default IndexPage;
