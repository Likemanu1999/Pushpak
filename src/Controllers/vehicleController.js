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
        let VehicleDetails = await vehicleModel.find();
        res.send(VehicleDetails)
        } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}  

const updatavehicle = async function(req,res){
    try{
        let vehicleId = req.params.vehicleId;
        let updataData = await vehicleModel.findByIdAndUpdate(vehicleId, req.body);
        return res.status(200).send({ status: true, message: "Success", data: updataData });
    }  catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }

}
const  Deleteuser= async function (req, res) {
    try{
      let vehicleId = req.params.vehicleId;
      let updatedUser = await vehicleModel.findOneAndDelete(vehicleId, req.body);
      res.send(updatedUser);
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
 };
  

module.exports = { createVehicle , getVehicle ,updatavehicle, Deleteuser }
