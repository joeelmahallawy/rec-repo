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
 } from "@chakra-ui/react";
 import React, { useEffect, useState } from "react";
 import { HiSwitchHorizontal } from 'react-icons/hi';

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
      <IconButton 
        aria-label="Switch languages" 
        icon={<HiSwitchHorizontal/>} 
        size="lg"
        borderRadius="25px"/>
      <Select w="250px">
        <option value="mohawk">Mohawk</option>
        <option value="Ind 2">Indigenous 2</option>
        <option value="Ind 3">Indigenous 3</option>
      </Select>
    </Flex>
    <Flex justifyContent="space-around" m="50px">
      <Input placeholder="English word here..." w="250px"></Input>
      <Input placeholder="Translated word here..." isReadOnly={true} w="250px"></Input>
    </Flex>
    <Center>
      <Button>Translate!</Button>
    </Center>
    
    
    </>
  );

};

export default IndexPage;
