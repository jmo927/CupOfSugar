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

    let newFavor = req.body;

    // newFavor.UserId = 1;

    //This should be updated to the User's actual ID
    if (!newFavor.userEmail) {
      newFavor.userEmail = "me@mine.com";
    }

    if (!newFavor.imageURL) {
      console.log("add an image");
      newFavor.imageURL = "./images/cupofSugar.png";
    } 

    console.log(newFavor.imageURL);


    db.Favor.create(newFavor).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  //Claim an Item
  app.put("/api/posts", function(req, res) {
    // db.Post.update(req.body,
    //   {
    //     where: {
    //       id: req.body.id
    //     }
    //   })
    //   .then(function(dbPost) {
    //     res.json(dbPost);
    //   });
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
