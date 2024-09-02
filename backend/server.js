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

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch(err => {
    console.log("cannot connect to db...", err);
    process.exit();
  });

//simple route
app.get("/", (req, res) => {
  res.json({ message: "hollowmatt app." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});