import mongoose, { Schema } from "mongoose";

mongoose.connect('mongodb://localhost:27017/padanan');

const newPadanan = mongoose.Schema({
    kata:String,
    padanan:String,
    pengertian:String
})

const Padanan = mongoose.model("padanan",newPadanan);
export default Padanan;