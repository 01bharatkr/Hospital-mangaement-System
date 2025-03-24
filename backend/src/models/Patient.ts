import mongoose from "mongoose";

const patientSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    bloodGroup: String,
    disease : String,
    contact: String,
})

export const Patient = mongoose.model('Patient', patientSchema);