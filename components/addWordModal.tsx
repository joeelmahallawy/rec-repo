import { Center } from "@chakra-ui/layout";
import {
  ScaleFade,
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
            <Select
              onChange={(e) => {
                setQuery({ ...query, translateTo: e.currentTarget.value });
              }}
              defaultValue="Mohawk"
              w="250px"
            >
              <option value="Mohawk">Mohawk</option>
              <option value="Cree">Cree</option>
              <option value="Ojibway">Ojibway</option>
            </Select>
            <FormControl mt={4}>
              <FormLabel>English word</FormLabel>
              <Input ref={initialRef} placeholder="English word..." />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Indigenous language translation</FormLabel>
              <Input placeholder="Translates to..." />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
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
