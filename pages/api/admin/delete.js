import { connectToDatabase } from "../../../util/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const articleId = req.query.articleId;
  const method = req.method;
  const headers = req.headers;
  let result;

  const apicheck = await db
    .collection("users")
    .findOne({ api_token: headers.api_token });

  if (headers.api_token == apicheck.api_token) {
    switch (method) {
      case "GET":
        res.status(405).end(`Method ${method} not allowed.`);
        break;

      case "POST":
        const { idx } = JSON.parse(req.body);
        console.log("deleting: ", idx);
        db.collection("article").deleteOne(
          { _id: ObjectId(idx) },
          function (err, res) {
            if (err) throw err;
            console.log("1 document deleted");
          }
        );
        break;

      case "DELETE":
        res.status(405).end(`Method ${method} not allowed.`);

        break;

      default:
        res.status(405).end(`Method ${method} not allowed.`);
    }
  } else {
    result = "Unauthorized";
  }

  res.status(200).json(result);
}
