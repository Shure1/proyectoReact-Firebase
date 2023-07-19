// importa las funciones que necesite nuestro SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Configuracion de Firebase para la app web
const firebaseConfig = {
  apiKey: "AIzaSyAazToaRBZIq1dZqXWyFJnIz2QIfCp_POY",
  authDomain: "proyecto-coderhouse-8a9d0.firebaseapp.com",
  projectId: "proyecto-coderhouse-8a9d0",
  storageBucket: "proyecto-coderhouse-8a9d0.appspot.com",
  messagingSenderId: "558842814687",
  appId: "1:558842814687:web:12d1ff6ef6a9a5d129c96a"
};

// Iniciar Firebase
const app = initializeApp(firebaseConfig);

//se aplica la conexion a nuestra coleccion de firebase
export  const db = getFirestore(app)

