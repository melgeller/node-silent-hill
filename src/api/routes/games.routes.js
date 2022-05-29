const express = require("express");

const router = express.Router()

const {getAllGames, getGameByID, getGameByTitle, postNewGame, deleteGame, patchGame} = require ("../controllers/games.controller")

router.get("/", getAllGames);
router.get("/id/:id", getGameByID);
router.get("/title/:title", getGameByTitle);
router.post("/", postNewGame);
router.delete("/:id", deleteGame);
router.patch("/:id", patchGame)

module.exports = router;