var express = require('express');
var router = express.Router();
const users = require("../controllers/user.controller.js")
const auth = require("../auth.js")
const { Sequelize, connection } = require("./../db.connection");
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
  await BookTable.findAll()
    .then(books => {
      res.header('Content-Type', 'application/json');  // Specify file type
      res.send(JSON.stringify(books));
    })
    .catch(e => console.log("Error", e)
    )
  console.log('--------------')
  console.log("id : " + req.params.id)
  console.log("TODO access table from id")
  console.log('--------------')
})


module.exports = router;
