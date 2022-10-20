const express = require('express');
const router = express.Router();

const vehicleController= require('../Controllers/vehicleController')
const voilationController = require('../Controllers/voilationController')
const mid = require("../middlerware/middleware")

//vehicle routes
router.post('/register',mid.middleware, vehicleController.createVehicle)
router.get('/getregister',mid.middleware, vehicleController.getVehicle)
router.put('/register/:vehicleId',mid.middleware, vehicleController.updatavehicle)
router.delete('/deletevehile/:vehicleId',mid.middleware, vehicleController.Deleteuser)

// voilation model
router.post('/request',mid.middleware, voilationController.createvoilation)
router.get('/getrequest',mid.middleware, voilationController.getvoilation)
router.put('/updatarequest/:voilationId',mid.middleware, voilationController.updatavoilation)
router.delete('/deletedata/:voilationId',mid.middleware, voilationController.DeleteVoilation)


module.exports = router