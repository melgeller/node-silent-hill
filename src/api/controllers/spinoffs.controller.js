const Spin = require("../models/spinoffs.model");

const getAllSpins = async (req, res) => {
  try {
    const allSpins = await Spin.find();
    return res.status(200).json(allSpins);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getSpinByID = async (req, res) => {
  const id = req.params.id;
  try {
    const spinById = await Spin.findById(id);
    return res.status(200).json(spinById);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getSpinByTitle = async (req, res) => {
  const title = req.params.title;
  try {
    const spinByTitle = await Spin.find({ title: title });
    return res.status(200).json(spinByTitle);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postNewSpin = async (req, res) => {
  try {
    const newSpin = new Spin(req.body);
    const spinDB = await newSpin.save()
    return res.status(200).json(spinDB);
  } catch (error) {
    return res.status(500).json(error);
  }

};

const deleteSpin = async (req, res) => {
  try {
    const { id } = req.params;
    const spinBorrado = await Spin.findByIdAndDelete(id);
    return res.status(200).json(spinBorrado)

  } catch (error) {
    return res.status(500).json(error)
  }

};

const patchSpin = async (req, res) => {
  try {
    const { id } = req.params;
    const patchSpin = new Spin(req.body);
    patchSpin._id = id;
    const SpinDB = await Spin.findByIdAndUpdate(id, patchSpin)
    return res.status(200).json(SpinDB)

  } catch (error) {
    return res.status(500).json(error)
  }


}

module.exports = { getAllSpins, getSpinByID, getSpinByTitle, postNewSpin, deleteSpin, patchSpin };