import mongoose from "mongoose"

const doctorSchema = new mongoose.Schema({
    name: String,
    age: Number,
    filed: String,
    specelized: String,
    exprience : Number,
})

export const Doctor = mongoose.model("Doctor", doctorSchema)