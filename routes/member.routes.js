const MemberController = require("../controller/Members.controller");

var router = require("express").Router();

// Create a new member
router.post("/members", MemberController.create);

// Retrieve all members
router.get("/members", MemberController.findAll);

// Retrieve a single Member with id
router.get("/members/:id", MemberController.findOne);

// Update a Tutorial with id
router.put("/members/:id", MemberController.update);

//   // Delete a Tutorial with id
router.delete("/members/:id", MemberController.delete);

// Retrieve all members
//   router.get("/published", tutorials.findAllPublished);

//   // Delete all Tutorials
//   router.delete("/", tutorials.deleteAll);

//   app.use("/api/tutorials", router);

module.exports = router;
