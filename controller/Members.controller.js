const db = require("../models");
const Members = db.Members;

// Create and Save a new Member
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Member
  const member = new Members({
    name: req.body.name,
    description: req.body.description,
    position: req.body.position,
    imageUrl: req.body.imageUrl,
  });

  // Save Member in the database
  member
    .save(member)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Member.",
      });
    });
};

// Retrieve all Members from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name
    ? { name: { $regex: new RegExp(name), $options: "i" } }
    : {};

  Members.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Members.",
      });
    });
};

// Find a single Member with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Members.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Member with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Member with id=" + id });
    });
};

// Update a Member by the id in the request
exports.update = (req, res) => {

  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Members.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Member with id=${id}. Maybe Tutorial was not found!`
        });
      } else res.send({ message: "Member was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};

// Delete a Member with the specified id in the request
exports.delete = (req, res) => {

  const id = req.params.id;
  Members.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Member with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "Member was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Member with id=" + id
      });
    });
};

// Delete all Member from the database.
exports.deleteAll = (req, res) => {};

// Find all published Members
exports.findAllPublished = (req, res) => {};
