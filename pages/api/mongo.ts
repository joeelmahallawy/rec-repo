import { NextApiRequest, NextApiResponse } from "next";
import { Collection, MongoClient } from "mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const url = `mongodb://mongo:${process.env.NEXT_PUBLIC_MONGODB_URL}@containers-us-west-9.railway.app:7108`;
    const client = new MongoClient(url);

    await client.connect();
    const db = client.db("test");
    if (!db) throw Error("Could not connect to database");
    const languages = db.collection("languages");

    if (req.method === "GET") {
      getWordFromDB(req, res, languages);
    }
    if (req.method === "POST") {
      postWordToDB(req, res, languages);
    }

    // res.status(200).json({ fullname: "lol" });
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
};
export default handler;

async function getWordFromDB(
  req: NextApiRequest,
  res: NextApiResponse,
  DB: Collection
) {
  const { translatefrom, translateto, word }: any = req.headers;
  const translatedText = await DB.findOne({ [translatefrom]: word });
  res.json({ translatedText });
}

async function postWordToDB(
  req: NextApiRequest,
  res: NextApiResponse,
  DB: Collection
) {
  const { translateFrom, translateTo, word, translatedWord } = JSON.parse(
    req.body
  );
  await DB.insertOne({
    [translateFrom]: word,
    [translateTo]: translatedWord,
  });
  res.json({});
}
