import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Progress,
  Text,
  Select,
  Input,
 } from "@chakra-ui/react";
 import React, { useEffect, useState } from "react";

const IndexPage = () => {
  return(
    <>
    <Center bg="dodgerblue" h="275px">
      <Text color="white" fontSize={20}>Indigenous Translation</Text>
    </Center>
    <Flex justifyContent="space-around" m="50px">
      <Center w="250px">
        <Text>English</Text>
      </Center>
      <Select w="250px">
        <option value="Ind 1">Indigenous 1</option>
        <option value="Ind 2">Indigenous 2</option>
        <option value="Ind 3">Indigenous 3</option>
      </Select>
    </Flex>
    <Flex justifyContent="space-around" m="50px">
      <Input placeholder="English word here..." w="250px"></Input>
      <Input placeholder="Indigenous word here..." isReadOnly={true} w="250px"></Input>
    </Flex>
    <Center>
      <Button>Translate!</Button>
    </Center>
    
    
    </>
  );

};

export default IndexPage;
