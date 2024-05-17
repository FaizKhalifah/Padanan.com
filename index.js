import express from "express";
import mongoose from "mongoose";

const app = express();
const connection = 'mongodb://localhost:27017/padanan';
mongoose.connect(connection).then((result)=>{
    app.listen(3000);
    console.log("Mendengar server 3000");
}
).catch((err) => console.log(err));

app.get('/',(req,res)=>{
    res.send("hello world");
});