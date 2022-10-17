var express = require('express');
var router = express.Router();
const { Sequelize, connection } = require("./../db.connection");
const BookTable = require("./../models/book.model")('books', connection, Sequelize);

// Working
router.post("/post/book", async function (req, res, next) {
    console.log('POST /post/book')

    maxId('books').then(maxId => {
        req.body.id = maxId + 1
        BookTable.create(req.body)
    }).catch(e => console.log("Error", e))
})

// Working
router.post("/post/edit/:id", async function (req, res, next) {
    console.log('POST /post/edit/:' + req.params.id)
    await BookTable.update(
        req.body,
        {
            where: { id: req.params.id }
        }
    ).catch(e => console.log("Error", e))
})

router.get('/books', async function (req, res, next) {
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
    return maxId[0][0]['MAX(id)']
}

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


