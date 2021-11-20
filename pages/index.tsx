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
 import { HiSwitchHorizontal } from 'react-icons/hi';

function getState(val:boolean){
  return(val ? 
  <Center w="250px">
    <ScaleFade initialScale={0.1} in={val}>
      <Button>English</Button>
    </ScaleFade> 
  </Center>
  :
  <ScaleFade initialScale={0.1} in={!val}>
    <Select w="250px">
      <option value="Mohawk">Mohawk</option>
      <option value="Cree">Cree</option>
      <option value="Ojibway">Ojibway</option>
    </Select>
  </ScaleFade>
  
  );
}

const IndexPage = () => {
  const [currState, toggleCurrState] = useState(true);

  return(
    <>
    <Center bg="dodgerblue" h="275px">
      <Text color="white" fontSize={20}>Indigenous Translation</Text>
    </Center>
    <Flex justifyContent="space-around" m="50px">
      {getState(currState)}
      <IconButton 
        aria-label="Switch languages" 
        icon={<HiSwitchHorizontal/>} 
        size="lg"
        borderRadius="25px"
        onClick={()=>{
          toggleCurrState(!currState);
        }}/>
      {getState(!currState)}
    </Flex>
    <Flex justifyContent="space-around" m="50px">
      <Input placeholder="Enter word here..." w="250px"></Input>
      <Input placeholder="Translated word here..." isReadOnly={true} w="250px"></Input>
    </Flex>
    <Center>
      <Button>Translate!</Button>
    </Center>
    
    
    </>
  );

};

export default IndexPage;

