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
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { HiSwitchHorizontal } from "react-icons/hi";
import getTranslation from "../helpers/getTranslation";
import toggleLanguage from "../helpers/toggleLanguage";
import { Query } from "../interfaces/types";

const IndexPage = () => {
  const toast = useToast();
  const [query, Setquery] = useState<Query>({
    translateFrom: "English",
    translateTo: "Mohawk",
    word: "",
    translatedWord: "",
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
            isDisabled
            value={query?.translatedWord}
          />
        </Flex>
        <Center bg="black">
          <Button
            onClick={
              () => {
                getTranslation(query, Setquery, toast);
                console.log("updated query", query);
              }
              // TODO:TODO:
              // fetch("/api/mongo", {
              //   body: JSON.stringify({
              //     //
              //   }),
              // });
            }
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
