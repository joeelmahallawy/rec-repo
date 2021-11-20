import { Center } from "@chakra-ui/layout";
import { ScaleFade, Button } from "@chakra-ui/react";
import { Select } from "@chakra-ui/select";
import React from "react";

export default function toggleLanguage(val: boolean) {
  return val ? (
    <Center w="250px">
      <ScaleFade initialScale={0.1} in={val}>
        <Button>English</Button>
      </ScaleFade>
    </Center>
  ) : (
    <ScaleFade initialScale={0.1} in={!val}>
      <Select w="250px">
        <option value="Mohawk">Mohawk</option>
        <option value="Cree">Cree</option>
        <option value="Ojibway">Ojibway</option>
      </Select>
    </ScaleFade>
  );
}
