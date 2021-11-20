import { Center } from "@chakra-ui/layout";
import { ScaleFade, Button } from "@chakra-ui/react";
import { Select } from "@chakra-ui/select";
import React from "react";
import { Query } from "../interfaces/types";

export default function toggleLanguage(
  val: boolean,
  query: Query,
  setQuery: (args: object) => void
) {
  return val ? (
    <Center w="250px">
      <ScaleFade initialScale={0.1} in={val}>
        {/* <Button>{query.translateFrom}</Button> */}
        <Select
          onChange={(e) => {
            setQuery({ ...query, translateFrom: e.currentTarget.value });
          }}
          defaultValue="English"
          w="250px"
        >
          <option value="English">English</option>
          <option value="Mohawk">Mohawk</option>
          <option value="Cree">Cree</option>
          <option value="Ojibway">Ojibway</option>
        </Select>
      </ScaleFade>
    </Center>
  ) : (
    <ScaleFade initialScale={0.1} in={!val}>
      <Select
        onChange={(e) => {
          setQuery({ ...query, translateTo: e.currentTarget.value });
        }}
        defaultValue="Mohawk"
        w="250px"
      >
        <option value="Mohawk">Mohawk</option>
        <option value="English">English</option>
        <option value="Cree">Cree</option>
        <option value="Ojibway">Ojibway</option>
      </Select>
    </ScaleFade>
  );
}
