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

    res.status(200).json({ fullname: "lol" });
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
  const { data, translatedLangauge } = JSON.parse(req.body);
  const translatedText = await DB.findOne({});
}
