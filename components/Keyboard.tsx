import { Center } from "@chakra-ui/layout";
import { Slide } from "@chakra-ui/react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const KeyboardComponent = ({ setInput }: any) => {
  return (
    <Center>
      <Keyboard
        onChange={(user) => {
          setInput(user);
          console.log(user);
        }}
      />
    </Center>
  );
};

export default KeyboardComponent;
