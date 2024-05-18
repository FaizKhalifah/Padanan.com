import Padanan from "../model/padanan.js";

async function addPadanan(kata,padanan,pengertian){
    const newPadanan = new Padanan({
        kata:kata,
        padanan:padanan,
        pengertian:pengertian
    })
    await newPadanan.save();
    return;
}

async function deletePadanan(kata){
    const filter = {
        kata:kata
    }
    await Padanan.deleteOne(filter);
    return;
}

async function readPadanan(kata){
    const filter = {
        kata:kata
    }
    const padanan = await Padanan.findOne(filter);
    if(padanan){
        return padanan.padanan;
    }else{
        return "kata tersebut tidak ada padanannya";
    }
}

export default {
    addPadanan,deletePadanan,readPadanan
}