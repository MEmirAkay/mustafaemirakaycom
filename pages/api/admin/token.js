import { connectToDatabase } from "../../../util/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const method = req.method;

  const body = req.body;
  
  let result;

  switch (method) {
    case "POST":
      
      const {login_token, api_token} = body;
        let check = false;
        
      const dbtokens = await db.collection("users").findOne({ login_token: JSON.parse(login_token), api_token: JSON.parse(api_token) });


        if(login_token == JSON.stringify(dbtokens.login_token) && api_token == JSON.stringify(dbtokens.api_token)){
            console.log("tokenler eşleşti")
            check = true;
        }else{
            console.log("tokenler eşleşmedi")
            check = false;
        }

      if (!check) {
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
