import { initializeApp } from "firebase/app";

import {getDatabase} from "firebase/database";

function startFirebase(){
    const firebaseConfig = {
        apiKey: "AIzaSyARoOrqXOcoOPnnJitgQ8i2Y6daFx4PaFU",
        authDomain: "fluffycats--ii.firebaseapp.com",
        databaseURL:
            "https://fluffycats--ii-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "fluffycats--ii",
        storageBucket: "fluffycats--ii.appspot.com",
        messagingSenderId: "423619717496",
        appId: "1:423619717496:web:35bb077e1d462b398a408d",
        measurementId: "G-RL2LKVG71L",
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    return getDatabase(app);
}

export default startFirebase;
