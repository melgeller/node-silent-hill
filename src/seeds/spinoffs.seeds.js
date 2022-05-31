const mongoose = require("mongoose");

const Spin = require("../api/models/spinoffs.model");

const spins = [
    {
        title:"Silent Hill Origins",
        year:2007,
        poster:"https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co2vyq.jpg"
    },
    {
        title:"Silent Hill Shattered Memories",
        year:2009,
        poster:"https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co2vyp.jpg"
    },
];

const spinsDocuments = spins.map((spin) => new Spin(spin));

mongoose.connect("mongodb+srv://melgeller:warcraft3atlas@cluster0.0z38a6c.mongodb.net/games?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }).then(async () => {
        const allSpins = await Spin.find();
        if (allSpins.length) {
            await Spin.collection.drop();
            console.log("Spin Offs DB deleted");
        }
    }).catch((error) => console.log("Error deleting games", error))
    .then(async () => {
        await Spin.insertMany(spinsDocuments);
        console.log("Spin Offs DB created");
    })
    .catch((error) => console.log("Error creating games", error))
    .finally(() => mongoose.disconnect())