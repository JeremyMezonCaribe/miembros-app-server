const express = require("express");
const cors = require("cors");
const app = express();

const db = require("./models");
const router = require("./routes/member.routes");

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.use(router);

// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });

const PORT = process.env.PORT || 6060;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
