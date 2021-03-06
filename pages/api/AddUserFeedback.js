import { connectToDatabase } from "../../middleware/ConnectMongo";

export default async (req, res) => {
  if (req.method == "POST") {
    try {
      const {db} = await connectToDatabase();
      const { body } = req;
      const {name,email, phone_number, feedback  } = body;
      const data = { name,email, phone_number, feedback};
      await db.collection("feedbacks").insertOne(data);
      res.send({ sucess: "Sent sucessfully"});
    } catch (error) {
      const response = {
        error: "300",
        message: "Something went Wrong",
      };
      res.send(JSON.stringify(response));
    }
  } else {
    const response = {
      error: "404",
      message: "Wrong method",
    };
    res.send(JSON.stringify(response));
  }
};
