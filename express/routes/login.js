var express = require('express');
var router = express.Router();
const auth = require("../auth.js");
const sessions = require("../controllers/session.controller");

router.post("/", auth.login);
router.post("/check", async (req, res) => {
    let isLoggedIn = await auth.isLoggedIn(req, res)
    if (isLoggedIn) {
        res.send(JSON.stringify({ isLoggedIn: true }))
    } else {
        res.send(JSON.stringify({ isLoggedIn: false }))
    }
});

router.post("/getId", async function (req, res, next) {
    console.log("POST /login/getId")
    var ses = await sessions.findByToken(req.body.token)
    // const user = await Users.findOne({ where: { token: req.body.token } })
    console.log(ses.userId)
    res.send(JSON.stringify({ id: ses.userId }))
})

module.exports = router;