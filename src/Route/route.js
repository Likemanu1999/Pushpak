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
// router.get('/users/:userId/cart', mid.mid1, cartController.getCart)
// router.delete('/users/:userId/cart', mid.mid1, cartController.deleteCart)


routers.all("/*", function (req, res) {
    res.status(404).send({ status: false, msg: "The api you requested is not available" });
  });

module.exports = router