var db = require("../models");

module.exports = function(app) {
  //login route
  app.get("/login", function(req, res) {
    res.render("login");
  });
  //post an item route
  app.get("/post", function(req, res) {
    res.render("post");
  });
  //get an item route
  app.get("/get", function(req, res) {
    res.render("get");
  });
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
