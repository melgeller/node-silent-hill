const express = require ("express");
const dotenv = require ("dotenv");
dotenv.config()

const gamesRoutes = require("./src/api/routes/games.routes")
//const spinOffsRoutes = require("./src/api/routes/spinoffs.routes")

const {connect} = require("./src/utils/database.js")

const PORT =  process.env.PORT
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false}));

connect()

server.use("/games", gamesRoutes);
//server.use("/spinOffs", spinOffsRoutes)

server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
})
