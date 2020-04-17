const hamburger = require("../models/hamburger.js");
const express = require("express");

const router = express.Router();

router.get("/", function (req, res) {
    hamburger.all(function (data) {
        const hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", function(req, res) {
    hamburger.create([
      "name", "devour"
    ], [
      req.body.name, req.body.devour
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burger/:id", function(req, res) {
    let condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    hamburger.update({
      devour: req.body.devour
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

// Export routes for server.js to use.
module.exports = router;