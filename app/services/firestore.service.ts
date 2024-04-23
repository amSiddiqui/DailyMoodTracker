import { db } from "@/app/firebase.config";
import { MoodEntry } from "@/app/models/Mood";
import { Timestamp, addDoc, collection, getDocs, query, where } from "firebase/firestore";

const collectionName = "mood";

export const getMoods = async (): Promise<MoodEntry[]> => {
    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        })) as MoodEntry[];
    } catch (error) {
        console.log('Error getting documents: ', error);
        return [];
    }
};


export const getMood = async (date: Date): Promise<MoodEntry | undefined> => {
    console.log('Getting mood for date: ', date.toDateString());
    try {
        const q = query(collection(db, collectionName), where("date", "==", Timestamp.fromDate(date)));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            return undefined;
        }
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))[0] as MoodEntry;
    }
    catch (error) {
        console.log('Error getting document: ', error);
        return undefined;
    }
}

export const addMoods = async (mood: string, date: Date): Promise<string | undefined> => {
    try {
        const newEntry: Omit<MoodEntry, "id"> = {
            mood,
            date: Timestamp.fromDate(date)
        };
        const docRef = await addDoc(collection(db, collectionName), newEntry);
        return docRef.id;
    } catch (err) {
        console.log('Error adding document: ', err);
    }
};