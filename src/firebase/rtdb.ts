import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getEnvVariables } from "../helpers";

const { API_KEY, AUTH_DOMAIN, DATA_BASE_URL } = getEnvVariables();

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATA_BASE_URL,
};

const app = initializeApp(firebaseConfig);
const rtdb = getDatabase(app);

export { rtdb };
