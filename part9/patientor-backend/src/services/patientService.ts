import patientData from '../data/patient.json';

import { v1 as uuid } from 'uuid';

import { Patient, NonSensitivePatient } from '../../types';


const patients: Array<Patient> = patientData as Array<Patient>;


const getEntries = (): Array<Patient> => {
  return patients;
};

const getNonSensitive = (): NonSensitivePatient[] => {
  return patients.map(({id, name, dateOfBirth, gender, occupation}) =>({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addEntry = (data: Omit<Patient, 'id'>): Patient => {
  const id: string = uuid();
  const newEntry = { id, ...data };

  patients.push(newEntry);
  return newEntry;
};

const add = () => {
  return null;
};

export default {
  addEntry,
  getEntries,
  add,
  getNonSensitive
};