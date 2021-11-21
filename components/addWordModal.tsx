import {
  ScaleFade,
  Divider,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  useToast,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/select";
import React from "react";
import { Query } from "../interfaces/types";

const AddWordModal = ({ query, setQuery }: any) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();
  const finalRef = React.useRef();

  return (
    <>
      <Button onClick={onOpen}>Add new word</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new word</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormLabel>From</FormLabel>
            <Select
              onChange={(e) => {
                setQuery({ ...query, translateFrom: e.currentTarget.value });
              }}
              placeholder="Please select an option"
              w="250px"
            >
              <option value="English">English</option>
              <option value="Mohawk">Mohawk</option>
              <option value="Cree">Cree</option>
              <option value="Ojibway">Ojibway</option>
            </Select>
            <FormControl mt={4}>
              <FormLabel>{query.translateFrom} word</FormLabel>
              <Input
                ref={initialRef}
                placeholder="English word..."
                onChange={(e) => {
                  setQuery({ ...query, word: e.currentTarget.value });
                }}
              />
            </FormControl>

            <FormControl mt={10}>
              <FormLabel>To</FormLabel>
              <Select
                onChange={(e) => {
                  setQuery({ ...query, translateTo: e.currentTarget.value });
                }}
                placeholder="Please select an option"
                w="250px"
              >
                <option value="Mohawk">Mohawk</option>
                <option value="English">English</option>
                <option value="Cree">Cree</option>
                <option value="Ojibway">Ojibway</option>
              </Select>
              <FormLabel mt={4}>Definition</FormLabel>
              <Input
                placeholder="Translates to..."
                onChange={(e) => {
                  setQuery({ ...query, translatedWord: e.currentTarget.value });
                }}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={async () => {
                const headerToSend = {
                  translateFrom: query.translateFrom,
                  translateTo: query.translateTo,
                  word: query.word,
                };
                const res = await fetch("/api/mongo", {
                  method: "GET",
                  headers: headerToSend,
                });
                const { translatedText } = await res.json();
                if (!translatedText) {
                  fetch("/api/mongo", {
                    method: "POST",
                    body: JSON.stringify(query),
                  });
                  setQuery({
                    translateFrom: "",
                    translateTo: "",
                    word: "",
                    translatedWord: "",
                  });
                  onClose();
                  return toast({
                    title: "Successfully added word!",
                    // description:
                    //   "We cannot define two different translations for the same word.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                  });
                } else {
                  return toast({
                    title: "Sorry, that word already exists!",
                    description:
                      "We cannot define two different translations for the same word.",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                  });
                }
              }}
            >
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddWordModal;
