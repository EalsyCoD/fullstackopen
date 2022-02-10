import diagnoseData from '../data/diagnoses.json';



import { Diagnose, NonSensitiveDiagnose } from '../../types';


const diagnoses: Array<Diagnose> = diagnoseData as Array<Diagnose>;


const getEntries = (): Array<Diagnose> => {
  return diagnoses;
};

const getNonSensitive = (): NonSensitiveDiagnose[] => {
  return diagnoses.map(({code, name, latin}) =>({
    code,
    name,
    latin,
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