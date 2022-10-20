const vehicleModel = require("../model/vehicleModel");
const vehicle = require("../model/vehicleModel");
const voilationModel = require("../model/voilationModel");

const createvoilation = async function (req, res){
    try {
        let requestBody = req.body
        let voilationSaved = await voilationModel.create(requestBody);
        res.status(201).send({ status: true, message: "user successfully created", data: voilationSaved });
    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
}

const getvoilation = async function (req, res) {
    try {
        let validCard = await voilationModel.find();
        res.send( validCard )
    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
}

const updatavoilation = async function(req,res){
    try{
        let voilationId = req.params.voilationId;
        let updatainformation = await voilationModel.findByIdAndUpdate(voilationId, req.body);
        return res.status(200).send({ status: true, message: "Success", data: updatainformation  });
    }  catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }

}

const  DeleteVoilation= async function (req, res) {
    try{
    let voilationId = req.params.voilationId;
    let updatedvoilation = await voilationModel.findByIdAndDelete(req.params.voilationId);
    res.send(updatedvoilation);
    }  catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
  };

module.exports = { createvoilation , getvoilation , updatavoilation ,  DeleteVoilation }


// let velicleUser = await vehicleModel.find(lincensePlateNumber)