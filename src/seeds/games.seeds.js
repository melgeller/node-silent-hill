const mongoose = require("mongoose");

const Game = require("../api/models/game.model");

const games = [
    {
        title:"Silent Hill 2",
        year:2001,
        poster:"https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co2vyg.jpg"
    },
    {
        title:"Silent Hill 3",
        year:2003,
        poster:"https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co3kol.jpg"
    },
    {
        title:"Silent Hill 4",
        year:2004,
        poster:"https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co2vyk.jpg"
    },
];

const gamesDocuments = games.map((game) => new Game(game));

mongoose.connect("mongodb://localhost:27017/games", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }).then(async () => {
        const allGames = await Game.find();
        if (allGames.length) {
            await Game.collection.drop();
            console.log("Games DB deleted");
        }
    }).catch((error) => console.log("Error deleting games", error))
    .then(async () => {
        await Game.insertMany(gamesDocuments);
        console.log("Games DB created");
    })
    .catch((error) => console.log("Error creating games", error))
    .finally(() => mongoose.disconnect())