const express = require("express");

const router = express.Router()

const {getAllSpins, getSpinByID, getSpinByTitle, postNewSpin, deleteSpin, patchSpin} = require ("../controllers/spinoffs.controller")

router.get("/", getAllSpins);
router.get("/id/:id", getSpinByID);
router.get("/title/:title", getSpinByTitle);
router.post("/", postNewSpin);
router.delete("/:id", deleteSpin);
router.patch("/:id", patchSpin)

module.exports = router;