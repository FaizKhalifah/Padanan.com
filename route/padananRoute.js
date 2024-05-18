import padananController from "../controller/padananController.js";
import { Router } from "express";

const padananRouter = Router();

padananRouter.get("/",(req,res)=>{
    res.render('index');
})

export default padananRouter;