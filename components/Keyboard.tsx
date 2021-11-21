import { Center } from "@chakra-ui/layout";
import { Slide } from "@chakra-ui/react";
import React, { Component } from "react";

import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const KeyboardComponent = ({ setquery, query, wordInput }: any) => {
  return (
    <Center color="black">
      <Keyboard
        onChange={(user) => {
          // console.log(user);
          setquery({ ...query, word: user });
        }}
      />
      {console.log(query)}
    </Center>
  );
};

export default KeyboardComponent;
