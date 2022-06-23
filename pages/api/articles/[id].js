import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../util/mongodb";


export default async function handler({ query: { id } }, res) {
  const { db } = await connectToDatabase();
     
  const data = await db.collection("article").find({ "_id" : ObjectId(id)}).toArray();
  
  if (data.length > 0) {
    res.status(200).json(data[0]);
  } else {
    res
      .status(400)
      .json({ message: `Article with the id of '${id}' is not found.` });
  }
}
