// Inicializamos la configuracion que da FirebaseConsole
import { initializeApp } from 'firebase/app'; 
// Importamos getAuth Para la uatenticacion de usuarios.
import { getAuth } from 'firebase/auth';

// Configuracion del Proyecto 
const firebaseConfig = {
  apiKey: 'AlzaSyDLfd4m5coxTIAGMQf4WulWN--vNQAMY04',
  authDomain: 'drinksnow-34235.firebaseapp.com',
  projectId: 'drinksnow-34235',
  storageBucket: 'drinksnow-34235.appspot.com',
  messagingSenderId: '120073174751',
  appId: '1:120073174751:android:815cc63e6e51fd8e1a736a'
};

// Inicializamos Firebase 
const app = initializeApp(firebaseConfig);
// Creamos & Exportamos la instancia de autenticacion. 
export const auth = getAuth(app);