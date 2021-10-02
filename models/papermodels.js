const mongoose = require('../connection');
const Schema = mongoose.Schema;
const schema = new Schema({
  user: { type: mongoose.Types.ObjectId, ref: "users" },
  title: String,
  max_marks: Number,
  course: String,
  description: String,
  created: Date,
  data: Object,
  answers: [{ type: mongoose.Types.ObjectId, ref: "answers" }]
})
const model = mongoose.model("questionpapers", schema)
module.exports = model;