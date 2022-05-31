const express = require("express");
const upload = require('../middlewares/file')

const router = express.Router()

const {getAllGames, getGameByID, getGameByTitle, postNewGame, deleteGame, patchGame} = require ("../controllers/games.controller")

router.get("/", getAllGames);
router.get("/id/:id", getGameByID);
router.get("/title/:title", getGameByTitle);
router.post("/", upload.single('poster'), postNewGame);
router.delete("/:id", deleteGame);
router.patch("/:id", upload.single('poster'), patchGame)

module.exports = router;