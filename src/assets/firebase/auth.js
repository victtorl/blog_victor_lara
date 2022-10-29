import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBCKDzjjgKiMo3q8Tz0UB5kOkkGRXeyB74",
    authDomain: "proyectochidori-5971d.firebaseapp.com",
    projectId: "proyectochidori-5971d",
    storageBucket: "proyectochidori-5971d.appspot.com",
    messagingSenderId: "519002671038",
    appId: "1:519002671038:web:c2df6f75ccbd0c1867dbef",
  };
  
  const app = initializeApp(firebaseConfig);
  // const db = getFirestore(app)

  //iniciar sesion 
export const iniciaSesion = async (email, password) => {
  const auth = getAuth();

  let result = ''

  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user.auth._isInitialized;
      // console.log(userCredential.user.auth._isInitialized)
      alert('good!!')
      result = user
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('bad!!!')
    });

  return result

}

