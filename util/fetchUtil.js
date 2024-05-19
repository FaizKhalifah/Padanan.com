import padananController from "../controller/padananController.js";

async function fetchPadanan(req,res){
    const kata = req.body.kata;
    const padanan = await padananController.readPadanan(kata);
    res.json(padanan);
    return;
}

export default fetchPadanan;