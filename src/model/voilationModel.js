const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId

const voilationSchema = new mongoose.Schema({
    lincensePlateNumber: {
        type: ObjectId,
        ref: 'vehicle',
        required: true
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