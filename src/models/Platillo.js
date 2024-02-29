import { Schema,model } from "mongoose";
import Pasos from "./Pasos";

const platilloSchema = new Schema({
    nombre: String,
    cantidad: Number,
    unidadMedida: String,
    pasos: [Pasos.schema], // Usar el esquema de pasos como un campo en el esquema de platillos
    imgURL: String
}, {
    timestamps: true,
    versionKey: false
});

export default model('Platillo', platilloSchema);
