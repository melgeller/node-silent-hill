const Game = require("../models/game.model");

const getAllGames = async (req, res) => {
  try {
    const allGames = await Game.find();
    return res.status(200).json(allGames);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getGameByID = async (req, res) => {
  const id = req.params.id;
  try {
    const gameById = await Game.findById(id);
    return res.status(200).json(gameById);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getGameByTitle = async (req, res) => {
  const title = req.params.title;
  try {
    const gameByTitle = await Game.find({ title: title });
    return res.status(200).json(gameByTitle);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postNewGame = async (req, res) => {
  try {
    const newGame = new Game(req.body);
    const gameDB = await newGame.save()
    return res.status(200).json(gameDB);
  } catch (error) {
    return res.status(500).json(error);
  }

};

const deleteGame = async (req, res) => {
  try {
    const { id } = req.params;
    const gameBorrado = await Game.findByIdAndDelete(id);
    return res.status(200).json(gameBorrado)

  } catch (error) {
    return res.status(500).json(error)
  }

};

const patchGame = async (req, res) => {
  try {
    const { id } = req.params;
    const patchGame = new Game(req.body);
    patchGame._id = id;
    const GameDB = await Game.findByIdAndUpdate(id, patchGame)
    return res.status(200).json(GameDB)

  } catch (error) {
    return res.status(500).json(error)
  }


}

module.exports = { getAllGames, getGameByID, getGameByTitle, postNewGame, deleteGame, patchGame };
