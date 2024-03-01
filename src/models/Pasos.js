import { Schema, model } from "mongoose";

const pasosSchema = new Schema({
    paso: String,
    descripcion: String
}, {
    timestamps: true,
    versionKey: false
});

export default model('Pasos', pasosSchema);
