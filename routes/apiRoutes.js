var db = require("../models");

module.exports = function(app) {

  // Ping Favors API
  app.get("/api/favors", function(req, res) {
    db.Favor.findAll()
      .then(function(result) {
        res.json(result);
      })
  });

  //Ping Users API
  app.get("/api/users", function(req, res) {
    db.User.findAll()
      .then(function(result) {
        res.json(result);
      })
  });

  // Create a new example
  app.post("/api/NewFavor", function(req, res) {

    console.log(req.body);
    let newFavor = req.body;
    newFavor.UserId = 1;

    db.Favor.create(newFavor).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
