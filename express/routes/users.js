var express = require('express');
var router = express.Router();
const auth = require("../auth.js");
const { Sequelize, connection } = require("./../db.connection");
const users = require("../controllers/user.controller.js");
const BookTable = require("./../models/book.model")('books', connection, Sequelize);

// Login middleware
router.use(async (req, res, next) => {
  let isLoggedIn = await auth.isLoggedIn(req, res)

  // if logged in, proceed to route
  // else, say the access is denied
  if (isLoggedIn) {
    next()
  } else {
    res.status(403).send("Access denied")
  }
})

router.post('/books/:id', async function (req, res, next) {
  const tableName = "books" + req.params.id
  const BookTable = require("./../models/book.model")(tableName, connection, Sequelize)
  await BookTable.sync() 

  await BookTable.findAll()
    .then(books => {
      res.header('Content-Type', 'application/json');  // Specify file type
      res.send(JSON.stringify(books));
    })
    .catch(e => console.log("Error", e)
    )
})


module.exports = router;
