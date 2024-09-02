const express = require("express");
const cors = require("cors");

const app = express();

var corsOpts = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOpts));

//parse requests of type 'application/json'
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//simple route
app.get("/", (req, res) => {
  res.json({ message: "hollowmatt app." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});