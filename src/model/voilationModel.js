const mongoose = require("mongoose");

const voilationSchema = new mongoose.Schema({
  lincensePlateNumber: {
    type: String,
    required: true,
    trim: true,
    },
      voilationType: {
        type: String,
        required: true,
        trim: true,
      },
      status: {
        type: String,
        required: true,
        enum: ["paid", "unpaid"],
        trim: true,
      },
      date: {
        type: String,
        required: true,
        trim : true
      }, 
      time: {
        type: String,
        required: true,
        trim: true
      },
      location: {
        type: String,
        required: true,
        trim: true
      },
      videoUrl:{
        type:String,
        required:true,
        trim:true
     },
});

module.exports = mongoose.model("voilation", voilationSchema);


//const ObjectId = mongoose.Schema.Types.ObjectId

// type: ObjectId,
// ref: 'vehicle',
// required: true