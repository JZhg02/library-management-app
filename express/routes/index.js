var express = require('express');
var router = express.Router();
const fs = require('fs');
const { Sequelize, connection } = require("./../db.connection");
const BookTable = require("./../models/book.model")(connection, Sequelize);

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
router.post("/post/book", async function (req, res, next) {
    console.log('POST /post/book')
    const books = await BookTable.findAll()
    console.log(books.length)
    req.body.id = books.length + 1
    BookTable.create(req.body)
})

// Working
router.post("/post/edit/:id", async function (req, res, next) {
    console.log('POST /post/edit/:' + req.params.id)
    await BookTable.update(
        req.body,
        {
            where: { id: req.params.id }
        }
    )
})

router.get('/books', async function (req, res, next) {
    const books = await BookTable.findAll()
    res.header('Content-Type', 'application/json');  // Specify file type
    res.send(JSON.stringify(books));
})

// Not used
// router.get('/book/:id', function (req, res, next) {

//     // get a book by his id in an array of books
//     var book = books.filter(b => {
//         return b.id === req.params.id
//     })

//     if (book == undefined) {
//         res.send("None")
//         res.status("500")
//         console.log("No book corresponding with this id")
//     }
//     else {
//         res.set('Cache-Control', 'max-age=3600') // stored in cache for 1 hour 
//         res.send(JSON.stringify(book))
//         res.status(200)
//     }
// })

module.exports = router;


