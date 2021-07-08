const controller = require("../controllers/seriesController")

const express = require("express")
const router = express.Router()

router.get("/", controller.home)
router.get("/todos", controller.getAll)
router.get("/:id", controller.getById)
router.get("/titulo", controller.getByTitle)
router.get("/genero", controller.getByGenre)

module.exports = router