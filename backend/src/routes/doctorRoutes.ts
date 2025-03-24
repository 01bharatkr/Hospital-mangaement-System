import expres from "express";
import { Doctor} from "../models/doctor";

// now registering the doctor endpoint 
const router = expres.Router();

router.post("/register", async(req, res)=>{
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).send(doctor);
});

router.get("/", async (req, res) =>{
    const doctors = await Doctor.find();
    res.status(200).send(doctors);
});

export default router;