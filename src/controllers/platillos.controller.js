import Platillo from "../models/Platillo";

export const getProducts = async (req,res) => {
    const platillos = await Platillo.find();
    res.json(platillos);
}

export const getProduct = (req,res) => {
    
}

export const createProducts = async (req,res) => {

    const {nombre,cantidad,unidadMedida, pasos, imgURL} = req.body;
    const newPlatillo = new Platillo({nombre,cantidad,unidadMedida, pasos, imgURL});
    const platilloSave = await newPlatillo.save();

    res.status(201).json(platilloSave);

    console.log(req.body);
}

export const updateProduct = (req,res) => {
    
}

export const deleteProduct = (req,res) => {
    
}

