import sha256 from "sha256";
import { connectToDatabase } from "../../../util/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const method = req.method;
  const body = JSON.parse(req.body);
  let result;

  switch (method) {
    case "POST":
      console.log(body);
      const { username, password } = body;
      const hashedpw = sha256(password);

      const user = await db
        .collection("users")
        .findOne({ username: username , password :hashedpw});

      if (!user) {
        res.status(200).json({ status: "Failed" });
      } else {
        
        res.status(200).json({ status: "Success" });
      }
      break;

    case "GET":
      res.status(405).end(`Method ${method} not allowed.`);
      break;

    case "DELETE":
      res.status(405).end(`Method ${method} not allowed.`);
      break;

    default:
      res.status(405).end(`Method ${method} not allowed.`);
      result = "Method is not allowed.";
  }
}
