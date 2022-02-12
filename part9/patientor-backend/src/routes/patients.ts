import express from 'express';
const router = express.Router();

import patients from '../services/patientService';
import { toPatientEntry } from '../utils/utils';

router.get('/', (_req, res) =>{
  res.send(patients.getEntries());
});

router.post('/', (req, res) => {
  const data = toPatientEntry(req.body);
  const newEntry = patients.addEntry(data);

  res.json(newEntry);
});

router.get('/:id', (req, res) => {
  const params = req.params;
  return res.send(patients.getIdEntries(params.id));
});

export default router;