import { connectToDatabase } from "../../../util/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const articleId = req.query.articleId;
  const method = req.method;
  let result;

  switch (method) {
    case "GET":
      const data = await db.collection("article").find({}).toArray();
      result = data;
      break;

    case "POST":
      const { author, date, header, content, pictureurl } = JSON.parse(req.body);
      console.log(author);
      db.collection("article").insertOne(
        {
          name: author,
          date: date,
          header: header,
          content: content,
          pictureurl: pictureurl,
        },
        function (err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          
        }
      );

      break;

    case "DELETE":
          db.collection("article").deleteOne({"_id" : ObjectId(articleId) })

      break;

    default:
      res.status(405).end(`Method ${method} not allowed.`);
  }
  res.status(200).json(result);
}
