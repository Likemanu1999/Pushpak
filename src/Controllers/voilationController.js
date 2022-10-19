const vehicle = require("../model/vehicleModel")
const voilation = require("../model/voilationModel")

const createvoilation = async function (req, res){
    try {
        let userSaved = await vehicleModel.create(requestBody);
        res.status(201).send({ status: true, message: "user successfully created", data: userSaved });
    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
}
module.exports = { createvoilation }