import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getEnvVariables } from "../helpers";

interface Firebase {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
}

const { VITE_API_KEY, VITE_DATA_BASE_URL, VITE_AUTH_DOMAIN } =
  getEnvVariables();

const firebaseConfig: Firebase = {
  apiKey: VITE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  databaseURL: VITE_DATA_BASE_URL,
};

const app = initializeApp(firebaseConfig);
const rtdb = getDatabase(app);

export { rtdb };
