import express from "express";
import mongoose from "mongoose";
import padananRouter from "./route/padananRoute.js";
import bodyParser from "body-parser";

const app = express();
const connection = 'mongodb://localhost:27017/padanan';
mongoose.connect(connection).then((result)=>{
    app.listen(3000);
    console.log("Mendengar server 3000");
}
).catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(express.static('views/'));
app.set('view engine', 'ejs');
app.use(padananRouter);