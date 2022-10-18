/* BEGIN db initialization */
const { Op } = require("sequelize");
const Sequelize = require("../db.connection");
const User = require("../models/user.model")(Sequelize.connection, Sequelize.Sequelize);
//const BookTable = require("../models/book.model")("books", Sequelize.connection, Sequelize.Sequelize);

/* END db initialization */

// Delete a record with a certain id
exports.delete = async (bookId, userId) => {

    const tableName = "books" + userId
    const BookTable = require("./../models/book.model")(tableName, Sequelize.connection, Sequelize.Sequelize)
    await BookTable.sync()

    BookTable.destroy({
        where: { id: bookId }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Book was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete book with id=${bookId}. Maybe book was not found!`
                });
            }
        })
        .catch(err => {
            //res.status(500).send({
            //    message: "Could not delete record with id=" + id
            //});
        });
};