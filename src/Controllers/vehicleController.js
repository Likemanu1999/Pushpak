const vehicleModel = require("../model/vehicleModel");
const vehicle = require("../model/vehicleModel")


const createVehicle = async function (req, res){
    try {
        let data= req.body
        let savedData= await UserModel.create(data)
        res.status(201).send({ status: true, message: "user successfully created", data: savedData });
    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
}

const getVehicle= async function (req, res) {
    try{
       let allUsers= await vehicleModel.find()
       res.status(201).send({ status: true, message: "user successfully created", data: allUsers });
    }
    catch (error){
        res.status(500).send({ status: false, message: error.message });
    }
}

module.exports = { createVehicle , getVehicle }
