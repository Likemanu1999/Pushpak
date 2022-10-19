const express = require('express');
const router = express.Router();

const vehicleController= require('../Controllers/vehicleController')
const voilationController = require('../Controllers/voilationController')

router.get("/test-me", function (req, res) {
  res.send("My first ever api!")
})

//vehicle routes
router.post('/register', vehicleController.createVehicle)
// router.put('/users/:userId/cart', mid.mid1, cartController.updateCart)
router.get('/getvehicle/:vehicleId', vehicleController.getVehicle)
router.delete('/deletevehile/:userId',vehicleController.Deleteuser)

// voilation model
router.post('/request',voilationController.createvoilation)
router.get('/getrequest/:voilationId',voilationController.getvoilation)
router.delete('/deletedata/:voilationId',voilationController.DeleteVoilation)


module.exports = router