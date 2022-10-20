const vehicleModel = require("../model/vehicleModel");


// =============================== Create api =====================================================//

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

// =============================== Get api =====================================================//

const getVehicle= async function (req, res) {
    try {
        let VehicleDetails = await vehicleModel.find();   //DB call
        res.send(VehicleDetails)
        } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}  


// =============================== Update api =====================================================//


const updatavehicle = async function(req,res){
    try{
        let vehicleId = req.params.vehicleId;
        let updataData = await vehicleModel.findByIdAndUpdate(vehicleId, req.body);   //DB call 
        return res.status(200).send({ status: true, message: "Success", data: updataData });
    }  catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

// =============================== Delete api =====================================================//

const  Deleteuser= async function (req, res) {
    try{
      let vehicleId = req.params.vehicleId;
      let updatedUser = await vehicleModel.findOneAndDelete(vehicleId, req.body);   // DB call
      res.send(updatedUser);
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
 };
  

module.exports = { createVehicle , getVehicle ,updatavehicle, Deleteuser }
