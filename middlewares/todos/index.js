var express = require("express");
var router = express.Router();

const { Todo } = require("../../models/Todo");
const ObjectId = require("mongoose").Types.ObjectId;

router.get("/", (req, res) => {
  Todo.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in retreiving Todo " + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.get("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).send("No record with given id : ${req.params.id}");
  }

  Todo.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in retrieing value" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.put("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).send("No record with given id : ${req.params.id}");
  }

  var todo = {
    text: req.body.text,
    isCompleted: false,
  };
console.log(req.params.id, req.body, todo)

  Todo.findByIdAndUpdate(
    req.params.id,
    { $set: todo },
    { new: true },
    (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log(
          "Error in update value" + JSON.stringify(err, undefined, 2)
        );
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).send("No record with given id : ${req.params.id}");
  }

  Todo.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in retrieing value" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.post("/", (req, res) => {
  const { text } = req.body;
  console.log("data: ", req.body);
  if (!text) {
    res.send("Invalid text");
  }
  const todo = new Todo({
    text: text,
    isCompleted: false,
  });

  todo.save((err, data) => {
    if (!err) {
      console.log(data);
    //   res.writeHead(200, { "Content-Type": "application/json" });
    //   res.write(JSON.stringify(data));
    //   res.end();
    res.send(data)
      //   res.end(data);
    } else {
      console.log("Error in save " + JSON.stringify(err, undefined, 2));
    }
  });
});

module.exports = router;
