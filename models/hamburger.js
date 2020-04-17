const orm = require("../config/orm");

const hamburger = {
    all: function(cb) {
        orm.all("myburger", function(res) {
          cb(res);
        });
      },
      // The variables cols and vals are arrays.
      create: function(cols, vals, cb) {
        orm.create("myburger", cols, vals, function(res) {
          cb(res);
        });
      },
      update: function(objColVals, condition, cb) {
        orm.update("myburger", objColVals, condition, function(res) {
          cb(res);
        });
      }
};

// export to routes
module.exports = hamburger;