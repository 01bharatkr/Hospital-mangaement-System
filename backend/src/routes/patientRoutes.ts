import express from 'express';
import { Patient } from '../models/patient';
const router = express.Router();

router.post('/register', async (req, res) => {
  const patient = new Patient(req.body);
  await patient.save();
  res.status(201).send(patient);
});

router.get('/', async (req, res) => {
  const patients = await Patient.find();
  res.status(200).send(patients);
});

export default router;
