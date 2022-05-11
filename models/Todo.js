const mongoose = require("mongoose");

const Todo = mongoose.model("todov1", {
  id: { type: Number },
  text: { type: String },
  isCompleted: { type: Boolean },
});

module.exports = { Todo };
