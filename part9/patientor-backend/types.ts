
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export type PublicPatient = Omit<Patient, 'ssn' | 'entries' >;

export enum Gender {
  male = 'male',
  female = 'female',
  other = 'other',
}

export interface Entry {}


export interface Patient {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn?: string;
    gender: Gender;
    occupation: string;
    entries: Entry[];
}

export interface Diagnose {
    code: string;
    name: string;
    latin?:string
}