const mongoose = require("mongoose");

const vehiclechema = new mongoose.Schema({
    lincensePlateNumber: {
        type: String,
        required: true,
        trim: true,
      },
      manufacturerName: {
        type: String,
        required: true,
        trim: true,
      },
      model: {
        type: String,
        required: true,
        trim: true,
        unique: true
      },
      fuleType: {
        type: String,
        required: true,
        enum: ["petrol", "desiel", "electric"],
        trim: true
      }, 
      ownerName: {
        type: String,
        required: true,
        trim: true
      },
      rc_status: {
        type: String,
        required: true,
        Boolean : ["Active", "Inactive"],
        trim: true,
      },
      vehicleColor: {
        type: String,
        required: true,
        trim: true
      },
      registrationDate: {
        type: String,
        required: true,
        // type: Date,
        // default:Date.now(),
        // required: true
      },
      insuranceUpto: {
        type: String,
        required: true,
      },
      fitnessUpto: {
        type: String,
        required: true,
      },
      roadTaxUpto: {
        type: String,
        required: true,
      },
});

module.exports = mongoose.model("vehicle", vehiclechema);