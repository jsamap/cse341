const router = require("express").Router()

// router.get("/", (req, res) => {res.send("INDEX")})

router.use("/users", require("./users"))

module.exports = router