// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, listAll, getDownloadURL, getMetadata } from "firebase/storage";
import { store } from "../../redux/store";
import { collection, addDoc, getDocs, getFirestore, deleteDoc, updateDoc, doc } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCKDzjjgKiMo3q8Tz0UB5kOkkGRXeyB74",
  authDomain: "proyectochidori-5971d.firebaseapp.com",
  projectId: "proyectochidori-5971d",
  storageBucket: "proyectochidori-5971d.appspot.com",
  messagingSenderId: "519002671038",
  appId: "1:519002671038:web:c2df6f75ccbd0c1867dbef",
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Guardar post
export const guardarBlog = async (title, tags, date, urlimage,contenidos,codigo) => {
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      title: title,
      tags: tags,
      date: date,
      urlimage: urlimage,
      contenidos:contenidos,
      codigo
    });
    console.log("Document written with ID: ", docRef);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

//Leer todos los documentos de una coleccion uno a uno 
export const leerDatos = async () => {
  const querySnapshot = await getDocs(collection(db, "posts"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id);
  });
};

//Traer todos los elementos de una coleccion
export const getAllPostsFirebase = async () => {
  const querySnapshot = await getDocs(collection(db, "posts"));

  let datam = []
  querySnapshot.forEach((doc) => {
    datam.push(doc.data())
  });

  store.dispatch({
    type: '@getAllPosts',
    payload: datam
  })

}

// Obtener post por id
export const getPostporId = async () => {
  const querySnapshot = await getDocs(collection(db, "posts"));
  querySnapshot.forEach((doc) => {
    if (doc.id == 'B7o6wALnK5G1ecyUqeep') {
      console.log(doc.data());
    }
  });
}


// Editar o agregar un campo si no esxiste por id
export const editPostporId = async () => {

  const postRef = doc(db, "posts", "B7o6wALnK5G1ecyUqeep");
  await updateDoc(postRef, {
    title: 'el titulo esta editado bien chevere'
  });

}

//Remover post por id
export const deletePostById = async () => {
  await deleteDoc(doc(db, "posts", "B7o6wALnK5G1ecyUqeep"));
  console.log('post eleiminado??');
}

//Upload image
export const uploadImage = async (file, namefile) => {
  const storage = getStorage();
  const ImagesRef = ref(storage, `images/${namefile}`)

  return uploadBytes(ImagesRef, file)
    .then((snapshot) => console.log('Uploaded a blob or file!' + snapshot))
    .catch((e) => console.log(e))

}

//Obtener todos las urls de las imagenes
export const getAllLinksImagesStorage = () => {
  const storage = getStorage();
  let arrayimages = []
  const ImagesRefs = ref(storage, `images/`)
  listAll(ImagesRefs).then((res) => {
    res.items.map((u, i) => {
      getDownloadURL(u).then((urlimage) => {
        arrayimages.splice(i, 0, urlimage)
        store.dispatch({
          type: '@getAllImages',
          payload: arrayimages
        })
      })
    })
  })
}

//obtener la url del ultimo elemento subido
export const getLastImagesStorage = async (name) => {
  const storage = getStorage();
  const ImagesRefs = ref(storage, `images/${name}`)
  return getDownloadURL(ImagesRefs)
    .then((s) => s)
    .catch((e) => console.log('Error al traer datos'))
}

