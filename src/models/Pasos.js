import { Schema, model } from "mongoose";

const pasosSchema = new Schema({
    descripcion: String
}, {
    timestamps: true,
    versionKey: false
});

export default model('Pasos', pasosSchema);
