import { connectToDatabase } from "../../util/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  const data = await db.collection("article").find({}).toArray();
  console.log(data);
  res.status(200).json(data);
}
