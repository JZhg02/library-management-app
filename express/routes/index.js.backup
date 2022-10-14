var express = require('express');
var router = express.Router();
const fs = require('fs');

var books = JSON.parse(fs.readFileSync('data/books.json', 'utf8'));

// var employees = [
//   {
//     id: 1,
//     name: "Jacques ZHANG",
//     password: "12345678",
//   },
//   {
//     id: 2,
//     name: "Mehdi WASKAR",
//     password: "12345678",
//   },
//   {
//     id: 3,
//     name: "Corentin PRADIE",
//     password: "12345678",
//   },
// ]

// Working
router.post("/post/book", function (req, res, next) {
  console.log('POST /post/book')
  // Working !(uncomment the next two line to write in books.json)
  req.body.id = books.length + 1
  // books.push(req.body)
  // fs.writeFileSync("./data/books.json", JSON.stringify(books, null, 4))
})

// Working
router.post("/post/edit/:id", function (req, res, next) {
  console.log('POST /post/edit/:' + req.params.id)

  // get the book in DB with corresponding id
  const bookFromDb = books.find(book => book.id == req.params.id)

  // get index of  the book
  var index = books.findIndex((book) => { return bookFromDb == book })

  // replace the book by the request's body
  books[index] = req.body
  fs.writeFileSync("./data/books.json", JSON.stringify(books, null, 4))
})

router.get('/', function (req, res, next) {
  console.log("here")
});

router.get('/books', function (req, res, next) {
  // res.header('Cache-Control', 'max-age=1');     // Stored in cache for 1 hour
  res.header('Content-Type', 'application/json');  // Specify file type
  res.send(JSON.stringify(books));
})

// Not used
router.get('/book/:id', function (req, res, next) {

  // get a book by his id in an array of books
  var book = books.filter(b => {
    return b.id === req.params.id
  })

  if (book == undefined) {
    res.send("None")
    res.status("500")
    console.log("No book corresponding with this id")
  }
  else {
    res.set('Cache-Control', 'max-age=3600') // stored in cache for 1 hour 
    res.send(JSON.stringify(book))
    res.status(200)
  }
})

module.exports = router;



