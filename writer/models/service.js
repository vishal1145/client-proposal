import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
      service:{
        type:String,
        required:true
      }
  },

  {
    timestamps: true,  
  }
);

const service = mongoose.model("Service", serviceSchema);
export default service;
 
