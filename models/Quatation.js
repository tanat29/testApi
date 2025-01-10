const mongoose = require("mongoose");

const quatationSchema = new mongoose.Schema({
  dateTime: {
    type: Number,
  },
  dateTimeText: {
    type: String,
  },
  month: {
    type: String,
  },
  product: {
    type: Array,
  },
  shop: {
    type: String,
  },
  status: {
    type: String,
  },
  time: {
    type: String,
  },
  user_id: {
    type: String,
  },
  year: {
    type: String,
  },
});

module.exports = mongoose.model("Quatation", quatationSchema);
