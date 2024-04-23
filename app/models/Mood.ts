import firebase from "firebase/compat/app";

export interface MoodEntry {
    id?: string;
    mood: string;
    date: firebase.firestore.Timestamp;
}