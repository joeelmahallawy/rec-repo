import { toast, useToast } from "@chakra-ui/react";
import { Query } from "../interfaces/types";

export default async function getTranslation(
  query: Query,
  Setquery: (args: object) => void,
  toast: any
) {
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
    return toast({
      title: "Sorry, we don't support that word!",
      description: "Please check for the words that we do support.",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
    // TODO:TODO:TODO:
  } else
    Setquery({
      ...query,
      translatedWord: translatedText[query.translateTo],
    });
}
