import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../util/mongodb";

export default async function handler({ query: { id } }, res) {
  const { db } = await connectToDatabase();
    var o_id = new ObjectId(id);
  const data = await db.collection("article").find({}).toArray();
  const filtered = data.filter((e) => e._id === o_id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res
      .status(400)
      .json({ message: `Article with the id of '${o_id}' is not found.` });
  }
}
