const router = require("express").Router()

router.use("/", require("./swagger"))

router.get("/", (req, res) => {
    //#swagger.tags=["INDEX"]
    res.send("INDEX")
})

router.use("/contacts", require("./contacts"))

module.exports = router