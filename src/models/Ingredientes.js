import { Schema, model } from "mongoose";

const ingredientesSchema = new Schema({
    nombre: String,
    cantidadPorcion: Number,
    unidadMedida: String

}, {
    timestamps: true,
    versionKey: false
});

export default model('Ingredientes', ingredientesSchema);
