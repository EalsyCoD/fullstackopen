import patientData from '../data/patient.json';



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

const add = () => {
  return null;
};

export default {
  getEntries,
  add,
  getNonSensitive
};