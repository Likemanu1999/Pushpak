const vehicleModel = require("../model/vehicleModel");
const vehicle = require("../model/vehicleModel");
const voilationModel = require("../model/voilationModel");

// =============================== Create api =====================================================//

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


// =============================== Get api =====================================================//
const getvoilation = async function (req, res) {
    try {
        let validCard = await voilationModel.find();  //DB Call get api
        res.send( validCard )
    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
}


// =============================== Update api =====================================================//

const updatavoilation = async function(req,res){
    try{
        let voilationId = req.params.voilationId;
        let updatainformation = await voilationModel.findByIdAndUpdate(voilationId, req.body);  // DB call
        return res.status(200).send({ status: true, message: "Success", data: updatainformation  });
    }  catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }

}

// =============================== Delete api =====================================================//

const  DeleteVoilation= async function (req, res) {
    try{
    let voilationId = req.params.voilationId;
    let updatedvoilation = await voilationModel.findByIdAndDelete(req.params.voilationId);   //DB Call
    res.send(updatedvoilation);
    }  catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
  };

module.exports = { createvoilation , getvoilation , updatavoilation ,  DeleteVoilation }


// let velicleUser = await vehicleModel.find(lincensePlateNumber)