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
import AddWordModal from "../components/addWordModal";
import getTranslation from "../helpers/getTranslation";
import toggleLanguage from "../helpers/toggleLanguage";
import { Query } from "../interfaces/types";

const IndexPage = () => {
  const [postQuery, setPostQuery] = useState<Query>({
    translateFrom: "",
    translateTo: "",
    word: "",
    translatedWord: "",
  });
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
      <Box mt="5%">
        <Flex justifyContent="space-evenly">
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
        <Flex justifyContent="space-around" m="5%">
          <Input
            placeholder="Enter word here..."
            w="300px"
            mr="15%"
            onChange={(e) => {
              Setquery({ ...query, word: e.currentTarget.value });
            }}
          />

          <Input
            placeholder="Translated word here..."
            isReadOnly={true}
            w="300px"
            value={query?.translatedWord}
          />
        </Flex>
        <Center>
          <Button
            onClick={
              () => {
                getTranslation(query, Setquery, toast);
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
        <Center>
          <AddWordModal query={postQuery} setQuery={setPostQuery} />
        </Center>
      </Box>
    </Box>
  );
};

export default IndexPage;
