const mongoose = require("mongoose");
function Connection() {
  const mongoURI =
    "mongodb+srv://admin:7ALqepKHjOCgzs9o@cluster0.c07xxyr.mongodb.net/kps?retryWrites=true&w=majority";
  mongoose
    .connect(mongoURI)
    .then(() => console.log("connected"))
    .catch((err) => console.log(err));
}

module.exports = Connection;
