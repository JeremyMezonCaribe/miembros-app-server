const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const URL_CONNECTION =
  "mongodb+srv://rafaelogando813:88Iwc8mKOsDDXlIi@cluster0.z86l93n.mongodb.net/Movil2?retryWrites=true&w=majority";

const db = {};
db.mongoose = mongoose;
db.url = URL_CONNECTION;
db.Members = require("./members.model.js")(mongoose);

module.exports = db;
