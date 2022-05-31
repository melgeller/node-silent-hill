const express = require("express");
const upload = require('../middlewares/file')

const router = express.Router()

const {getAllSpins, getSpinByID, getSpinByTitle, postNewSpin, deleteSpin, patchSpin} = require ("../controllers/spinoffs.controller")

router.get("/", getAllSpins);
router.get("/id/:id", getSpinByID);
router.get("/title/:title", getSpinByTitle);
router.post("/", upload.single('poster'), postNewSpin);
router.delete("/:id", deleteSpin);
router.patch("/:id", upload.single('poster'), patchSpin)

module.exports = router;