/* BEGIN db initialization */
const { Op } = require("sequelize");
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');
const Sequelize = require("../db.connection");
const Session = require("../models/session.model")(Sequelize.connection, Sequelize.Sequelize);
/* END db initialization */


// Create session for user
exports.create = async (id) => {
    const obj = {
        token: uuidv4(),
        validUntil: moment().add(25, 'minutes').format(),
        userId: id
    };
    let result = {};


    // Save in the database
    await Session.create(obj)
        .then(data => result = data)
        .catch(e => {
            console.log("error", e);
        });

    return result;
};

// Get session by user id
exports.findByUserId = async (id) => {
    let condition = id ? { userId: { [Op.eq]: id } } : null;
    let result = {};


    await Session.findOne({ where: condition })
        .then(data => result = data)
        .catch(e => {
            console.log("Error", e);
        });

    return result;
};

// Get session by token
exports.findByToken = async (token) => {
    let condition = token ? { token: { [Op.eq]: token } } : null;
    let result = {};


    await Session.findOne({ where: condition })
        .then(data => result = data)
        .catch(e => {
            console.log("Error", e);
        });

    return result;
};

// Delete a token with a certain id
exports.delete = (token) => {
    let result;


    Session.destroy({
        'where': {
            'token': token
        }
    })
        .then(num => result = num)
        .catch(err => result = err);

    return result;
};

// exports.delete = (id) => {
//     Session.destroy({
//         where: {
//             id: id
//         }
//     })
//         .then(num => {
//             if (num == 1) {
//                 res.send({
//                     message: "Record was deleted successfully!"
//                 });
//             } else {
//                 res.send({
//                     message: `Cannot delete record with id=${id}. Maybe record was not found!`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Could not delete record with id=" + id
//             });
//         });
// };