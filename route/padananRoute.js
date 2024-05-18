import fetchPadanan from "../util/fetchUtil.js";
import { Router } from "express";

const padananRouter = Router();

padananRouter.get("/",(req,res)=>{
    res.render('index');
})

padananRouter.post("/readPadanan",fetchPadanan);

export default padananRouter;