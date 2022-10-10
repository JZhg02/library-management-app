var express = require('express');
var router = express.Router();
const fs = require('fs');

var books = JSON.parse(fs.readFileSync('data/books.json', 'utf8'));

var employees = [
  {
    id: 1,
    name: "Jacques ZHANG",
    password: "12345678",
  },
  {
    id: 2,
    name: "Mehdi WASKAR",
    password: "12345678",
  },
  {
    id: 3,
    name: "Corentin PRADIE",
    password: "12345678",
  },
]

/*
5 Get request :
  - home ('/')
  - all books ('/books')
  - book by id ('/book/:id')
  - all employees ('/employees')
  - employee by id ('/employee/:id')
*/

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Libreasy' });
});

// GET all the books
router.get('/books', function (req, res, next) {
  res.header('Cache-Control', 'max-age=3600');     // Stored in cache for 1 hour
  res.header('Content-Type', 'application/json');  // Specify file type
  res.send(JSON.stringify(books));
})

// GET a book by id
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

// GET all employees
router.get('/employee'), function (req, res, next) {
  res.set('Cache-Control', 'max-age=1800')
  res.send(JSON.stringify(employees))
}

// GET an employee by id
router.get('/employee/:id', function (req, res, next) {

  // get an employe by his id in an array of employees
  var employee = employees.filter(emp => {
    return emp.id === req.params.id
  })

  if (employee == undefined) {
    res.send("None")
    res.status("500")
    console.log("No employee corresponding with this id")
  }
  else {
    // No cache for this request
    res.send(JSON.stringify(employee))
    res.status(200)
  }
})

module.exports = router;



