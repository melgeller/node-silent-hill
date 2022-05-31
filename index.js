const express = require ("express");
const dotenv = require ("dotenv");
const cloudinary = require('cloudinary').v2
const cors = require("cors");
dotenv.config()

const gamesRoutes = require("./src/api/routes/games.routes")
const spinOffsRoutes = require("./src/api/routes/spinoffs.routes")

const {connect} = require("./src/utils/database.js")

const PORT =  process.env.PORT
const server = express();

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  server.use(cors({
    origin: "*",
    credentials: true
}))


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
})


server.use(express.json());
server.use(express.urlencoded({ extended: true}));

connect()

server.use("/games", gamesRoutes);
server.use("/spinOffs", spinOffsRoutes)

server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
})
