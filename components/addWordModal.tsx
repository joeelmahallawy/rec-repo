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
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/select";
import React from "react";
import { Query } from "../interfaces/types";

const AddWordModal = ({ query, setQuery }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();
  const finalRef = React.useRef();
  console.log("post query", query);

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
                fetch("/api/mongo", {
                  method: "POST",
                  body: JSON.stringify(query),
                });
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
