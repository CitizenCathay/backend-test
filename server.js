require("dotenv").config();
const apiKey = process.env.API_KEY;
const express = require("express");
const port = 3000;

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/info/:dynamic", (req, res) => {
  const { key } = req.query;
  const { dynamic } = req.params;
  console.log(dynamic, key);
  res.status(200).json({ info: "Server is running" });
});

app.post("/", (req, res) => {
  const { parcel } = req.body;
  console.log(parcel);
  if (!parcel) {
    return res.status(400).send({ status: "Failed" });
  }
  res.status(200).send({ status: "received" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
