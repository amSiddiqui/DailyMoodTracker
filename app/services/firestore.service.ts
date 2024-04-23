"use server";
import { db } from "@/app/firebase.config";
import { MoodEntry } from "@/app/models/Mood";
import { Timestamp, addDoc, collection, getDocs, query, where, doc, setDoc } from "firebase/firestore";

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
    date.setHours(0, 0, 0, 0);
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


export const saveMoodSA = async (formData: FormData): Promise<void> => {
    try {
        const mood = formData.get('mood') as string;
        const date = new Date(formData.get('date') as string);
        date.setHours(0, 0, 0, 0);
        await addMood(mood, date);
    } catch (error) {
        console.log('Error saving mood: ', error);
    }
}

export const addMood = async (mood: string, date: Date): Promise<void> => {
    try {
        date.setHours(0, 0, 0, 0);
        const existingMood = await getMood(date);
        if (existingMood && existingMood.id){
            await setDoc(doc(db, collectionName, existingMood.id), { mood, date: Timestamp.fromDate(date) });
        } else {
            await addDoc(collection(db, collectionName), { mood, date: Timestamp.fromDate(date) });
        }
    } catch (error) {
        console.log("Error adding or updating document: ", error);
    }
};