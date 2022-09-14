    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyBTd-EXEOy10nMlSF0VzjyBsyiu7RtVuZM",
      authDomain: "layo-firebase.firebaseapp.com",
      databaseURL: "https://layo-firebase.firebaseio.com",
      projectId: "layo-firebase",
      storageBucket: "layo-firebase.appspot.com",
      messagingSenderId: "1064801737351",
      appId: "1:1064801737351:web:0432df29c8bf09aff33622"
    };
  
    // Initialize Firebase
    export const app = initializeApp(firebaseConfig);

    //export const db = getFirestore();

    /**
     * Save a New Task in Firestore
     * @param {string} title the title of the Task
     * @param {string} description the description of the Task
     */
    export const saveTask = (title, description) =>
      addDoc(collection(db, "tasks"), { title, description });

    export const onGetTasks = (callback) =>
      onSnapshot(collection(db, "tasks"), callback);

    /**
     *
     * @param {string} id Task ID
     */
    export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

    export const getTask = (id) => getDoc(doc(db, "tasks", id));

    export const updateTask = (id, newFields) =>
      updateDoc(doc(db, "tasks", id), newFields);

    export const getTasks = () => getDocs(collection(db, "tasks"));
