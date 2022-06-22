import { connectToDatabase } from "../../../util/mongodb";

export default async function handler(res, res) {
  const { db } = await connectToDatabase();
  const data = await db.collection("article").find({}).toArray();
 res.status(200).json(data)
}
