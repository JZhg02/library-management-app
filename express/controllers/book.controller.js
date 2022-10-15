/* BEGIN db initialization */
const { Op } = require("sequelize");
const Sequelize = require("../db.connection");
const User = require("../models/user.model")(Sequelize.connection, Sequelize.Sequelize);
/* END db initialization */
