var express = require('express');
var router = express.Router();
const users = require("../controllers/user.controller.js")
const auth = require("../auth.js")
const { Sequelize, connection } = require("./../db.connection");
const bookController = require("./../controllers/book.controller")

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

router.post("/post/book", async function (req, res, next) {
  console.log('POST /post/book')
  const tableName = "books" + req.body.userId
  const BookTable = require("./../models/book.model")(tableName, connection, Sequelize)
  await BookTable.sync()

  maxId(tableName).then(maxId => {
    req.body.bookId = maxId + 1
    BookTable.create({
      id: req.body.bookId,
      title: req.body.title,
      author: req.body.author,
      publishingHouse: req.body.publishingHouse,
      publishingDate: req.body.publishingDate,
      available: req.body.available,
      loaned: req.body.loaned,
      image: req.body.image,
    })
    console.log("Creating new book (id: " + (maxId + 1) + ") in " + tableName)
  }).catch(e => console.log("Error", e))
})

router.post("/post/edit/", async function (req, res, next) {
  console.log('POST /post/edit/')

  const tableName = "books" + req.body.userId
  const BookTable = require("./../models/book.model")(tableName, connection, Sequelize)
  await BookTable.sync()

  await BookTable.update({
    id: req.body.bookId,
    title: req.body.title,
    author: req.body.author,
    publishingHouse: req.body.publishingHouse,
    publishingDate: req.body.publishingDate,
    available: req.body.available,
    loaned: req.body.loaned,
    image: req.body.image,
  },
    {
      where: { id: req.body.bookId }
    }).catch(e => console.log("Error", e))
  console.log("Editing book (id: " + req.body.bookId + ") in " + tableName)
})

router.post("/post/delete", async function (req, res, next) {
  bookController.delete(req.body.id, req.body.userId)
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

async function maxId(tableName) {
  const maxId = await connection.query("SELECT MAX(id) FROM " + tableName)
  var res = maxId[0][0]['MAX(id)']
  if (res == null)
    return 1;
  return res
}

module.exports = router;
