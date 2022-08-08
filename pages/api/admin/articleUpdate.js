import { connectToDatabase } from "../../../util/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const method = req.method;
  const headers = req.headers;
  let result;
  console.log("adasd");
  console.log(headers.api_token);

  const apicheck = await db
    .collection("users")
    .findOne({ api_token: headers.api_token });
    console.log(apicheck);
  if (headers.api_token == apicheck.api_token) {
    switch (method) {
      case "GET":
        const data = await db.collection("article").find({}).toArray();
        result = data;
        break;

      case "POST":
        const { id, header, content, pictureurl } = JSON.parse(req.body);

        db.collection("article").updateOne(
          { _id: ObjectId(id) },
          {
            $set: {
              header: header,
              content: content,
              pictureurl: pictureurl,
            },
          },
          { upsert: true },
          function (err, res) {
            if (err) throw err;
            console.log("1 document updated");
          }
        );

        break;

      case "DELETE":
        const { idx } = JSON.parse(req.body);
        db.collection("article").deleteOne({ _id: ObjectId(idx) });
        console.log("1 document deleted");
        break;

      default:
        res.status(405).end(`Method ${method} not allowed.`);
    }
  } else {
    result = "Unauthorized";
  }

  res.status(200).json(result);
}
