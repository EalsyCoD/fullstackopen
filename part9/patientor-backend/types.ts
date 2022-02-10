// export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;

export type NonSensitivePatient = Omit<Patient, 'ssn'>;

export type NonSensitiveDiagnose = Omit<Diagnose, 'latin'>;

// export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;

export enum Gender {
  male = 'male',
  female = 'female',
  other = 'other',
}

export enum Weather {
    Sunny = 'sunny',
    Rainy = 'rainy',
    Cloudy = 'cloudy',
    Stormy = 'stormy',
    Windy = 'windy',
  }
  
  export enum Visibility {
    Great = 'great',
    Good = 'good',
    Ok = 'ok',
    Poor = 'poor',
  }

// export interface DiaryEntry {
//     id: number;
//     date: string;
//     weather: Weather;
//     visibility: Visibility;
//     comment?: string;
// }

export interface Patient {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn?: string;
    gender: Gender;
    occupation: string;
}

export interface Diagnose {
    code: string;
    name: string;
    latin?:string
}