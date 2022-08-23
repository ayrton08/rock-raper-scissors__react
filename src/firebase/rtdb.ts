import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "4CK5jSCRxGzytltFSNAGGcujqxjPHJpylKK14LG3",
  authDomain: "apx-dwf-m6-5b96e.firebaseapp.com",
  databaseURL: "https://apx-dwf-m6-5b96e-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const rtdb = getDatabase(app);

export { rtdb };
