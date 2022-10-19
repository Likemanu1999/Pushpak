const vehicleModel = require("../model/vehicleModel");
const vehicle = require("../model/vehicleModel");
const voilationModel = require("../model/voilationModel");

const createvoilation = async function (req, res){
    try {
        let requestBody = req.body
        let velicleUser = await vehicleModel.findOne({ _id: requestBody.vehicleId })
        let voilationSaved = await voilationModel.create(requestBody);
        res.status(201).send({ status: true, message: "user successfully created", data: voilationSaved });
    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
}

const getvoilation = async function (req, res) {
    try {
        let voilationId = req.params.voilationId;
        let validCard = await voilationModel.findById(voilationId);
        res.status(200).send({ status: true, message: "Success", data: validCard })
    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
}
const  DeleteVoilation= async function (req, res) {
    // let voilationId = req.params.voilationId;
    // let updatedvoilation = await voilationModel.findOneAndUpdate({ _id: voilationId},{new:true});
    // res.send({ status: true, data: updatedvoilation });
  };

module.exports = { createvoilation , getvoilation , DeleteVoilation }