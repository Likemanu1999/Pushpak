const vehicleModel = require("../model/vehicleModel");

const createVehicle = async function (req, res){
    try {
        let data= req.body
        let savedData= await vehicleModel.create(data)
        res.status(201).send({ status: true, message: "user successfully created", data: savedData });
    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
}

const getVehicle= async function (req, res) {
    try {
        let vehicleId = req.params.vehicleId;
        let VehicleDetails = await vehicleModel.findById(vehicleId);
        return res.status(200).send({ status: true, message: "Success", data: VehicleDetails });
        // let voilationId = req.params.voilationId;
        // let validCard = await voilationModel.findById(voilationId);
        // res.status(200).send({ status: true, message: "Success", data: validCard })
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}  
const  Deleteuser= async function (req, res) {
      let vehicleId = req.params.vehicleId;
      let updatedUser = await vehicleModel.findOneAndUpdate({ _id: vehicleId},{new:true});
      res.send({ status: true, data: updatedUser });
    };
  

module.exports = { createVehicle , getVehicle , Deleteuser }
