import { Schema,model } from "mongoose";
import Pasos from "./Pasos";
import Ingredientes from "./Ingredientes";


const platilloSchema = new Schema({
    nombre: String,
    cantidad: Number,
    ingredientes: [Ingredientes.schema], // Cambiar a ingredientes en minúscula
    pasos: [Pasos.schema],
    imgURL: String
}, {
    timestamps: true,
    versionKey: false
});


export default model('Platillo', platilloSchema);
