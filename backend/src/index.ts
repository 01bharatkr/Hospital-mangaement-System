import express from "express";
import bodyParser from "body-parser";
import patientRoutes from "./routes/patientRoutes";
import doctorRoutes from "./routes/doctorRoutes";


const app = express();
const PORT = process.env.PORT || 3000;

//use of middleware
app.use(bodyParser.json());

//middleware for the schema of the patient and doctors
app.use("/patients",patientRoutes);
app.use("/doctor", doctorRoutes);



app.listen(PORT, ()=>{
    console.log(`Swever is ruuing on the port ${PORT}`)
})