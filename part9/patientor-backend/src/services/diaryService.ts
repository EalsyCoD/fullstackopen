// import diaryData from '../data/diaries.json';



// import { NewDiaryEntry, NonSensitiveDiaryEntry, DiaryEntry} from '../../types';


// const addDiary = ( entry: NewDiaryEntry ): DiaryEntry => {
//     const newDiaryEntry = {
//       id: Math.max(...diaries.map(d => d.id)) + 1,
//       ...entry
//     };

// diaries.push(newDiaryEntry);
// return newDiaryEntry;
// };

// const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;


// const getEntries = (): Array<DiaryEntry> => {
//   return diaries;
// };

// const findById = (id: number): DiaryEntry | undefined => {
//   const entry = diaries.find(d => d.id === id);
//   return entry;
// };

// const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
//   return diaries.map(({id, date, weather, visibility}) =>({
//     id,
//     date,
//     weather,
//     visibility,
//   }));
// };



// const addEntry = () => {
//   return null;
// };

// export default {
//   getEntries,
//   addEntry,
//   getNonSensitiveEntries,
//   findById,
//   addDiary
// };