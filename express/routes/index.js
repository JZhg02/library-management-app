var express = require('express');
var router = express.Router();

var books = [{
  id: 1,
  title: "Grokking Deep Learning",
  author: "Andrew W. Task",
  publishingHouse: "Manning Publications",
  publishingDate: "01/25/2019",
  image: "public/images/Grokking_Deep_Learning.jpg",
},

{
  id: 2,
  title: "Harry Potter: The Prequel",
  author: "J.K. Rowling",
  publishingHouse: "Hogwarts House Editions",
  publishingDate: "06/11/2008",
  image: "public/images/Harry_Potter_The_Prequel.jpg",
},

{
  id: 3,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J.K. Rowling",
  publishingHouse: "Bloomsbury",
  publishingDate: "07/02/1998",
  image: "public/images/Harry_Potter_and_the_Chamber_of_Secrets.jpg",
},

{
  id: 4,
  title: "Harry Potter and the Philosopher's Stone",
  author: "J.K. Rowling",
  publishingHouse: "Bloomsbury",
  publishingDate: "06/26/1997",
  image: "public/images/Harry_Potter_and_the_Philosopher's_Stone_Book_Cover.jpg",
},

{
  id: 5,
  title: "Harry Potter and the Prisoner of Azkaban",
  author: "J.K. Rowling",
  publishingHouse: "Bloomsbury",
  publishingDate: "07/08/1999",
  image: "public/images/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg",
},

{
  id: 6,
  title: "Ulysses",
  author: "James Joyce",
  publishingHouse: "Shakespeare and Company",
  publishingDate: "02/02/1922",
  image: "public/images/Ulysses.jpg",
},

{
  id: 7,
  title: "Don Quixote",
  author: "Miguel de Cervantes",
  publishingHouse: "Francisco de Robles",
  publishingDate: "01/01/1620",
  image: "public/images/Don_Quixote.jpg",
},
{
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishingHouse: "Charles Scribner's Sons",
  publishingDate: "05/10/1925",
  image: "public/images/The_Great_Gatsby.jpg"
}
]

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
  res.set('Cache-Control', 'max-age=7200') // stored in cache for 2hours
  res.send(JSON.stringify(books))
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



