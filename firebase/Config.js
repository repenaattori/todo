import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_MSG_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_APP_ID
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const TODOS_REF = 'todos';
export const USERS_REF = 'users';

export const auth = initializeAuth(app,{
  persistence: getReactNativePersistence(AsyncStorage)
});