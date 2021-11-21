import { Center } from "@chakra-ui/layout";
import { Slide} from "@chakra-ui/react";
import React from "react";
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

const  KeyboardComponent = ()=>{
    return(
        <Center>
            <Slide>
                keyboard active
            </Slide>
        </Center>
    );
}

export default Keyboard;