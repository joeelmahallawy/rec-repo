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
import Legend from "../components/Legend";
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

  return (
    <Box>
      <Center
        justifyContent="space-between"
        id="nav-bar"
        bg="dodgerblue"

        // h="20vh"
      >
        {/* <Box bg="red" w="100%"> */}
        <Heading textAlign="right" w="135%" color="white" fontSize={20}>
          Indigenous Translation
        </Heading>
        {/* </Box> */}
        <Flex justifyContent="flex-end" w="100%">
          <Legend />
        </Flex>
      </Center>
      <Box>
        <Center justifyContent="space-between" m="0 auto" mt="5%" w="70%">
          <Box w="400px" p={5} justifyContent="space-around">
            <ScaleFade initialScale={0.1} in={true}>
              <Select
                onChange={(e) => {
                  Setquery({ ...query, translateFrom: e.currentTarget.value });
                }}
                defaultValue="English"
              >
                {console.log(query)}
                <option value="English">English</option>
                <option value="Mohawk">Mohawk</option>
                <option value="Cree">Cree</option>
                <option value="Ojibway">Ojibway</option>
              </Select>
            </ScaleFade>
            <Input
              placeholder="Enter word here..."
              // w="300px"
              // mr="15%"
              onChange={(e) => {
                Setquery({ ...query, word: e.currentTarget.value });
              }}
            />
            {/*  */}
          </Box>
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
          <Box w="400px">
            <ScaleFade initialScale={0.1} in={true}>
              <Select
                onChange={(e) => {
                  Setquery({ ...query, translateTo: e.currentTarget.value });
                }}
                defaultValue="Mohawk"
                // w="250px"
              >
                <option value="Mohawk">Mohawk</option>
                <option value="English">English</option>
                <option value="Cree">Cree</option>
                <option value="Ojibway">Ojibway</option>
              </Select>
            </ScaleFade>
            <Input
              placeholder="Translated word here..."
              isReadOnly={true}
              value={query?.translatedWord}
            />
          </Box>
        </Center>
        {/*  */}
        <Center mt={10} flexDir="column">
          <AddWordModal query={postQuery} setQuery={setPostQuery} />
        </Center>
      </Box>
    </Box>
  );
};

export default IndexPage;
