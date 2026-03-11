const router = require("express").Router()

router.get("/", (req, res) => {res.send("INDEX")})

router.use("/contacts", require("./contacts"))

module.exports = router