import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { collection, getDoc, getFirestore } from "firebase/firestore";
import firebaseConfig from "../configs/firebaseConfig";

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const user = collection(db, "users");

export default getUser = async () => {
  const usersSnapshot = await getDoc(user);
  if (usersSnapshot.exists) {
    usersSnapshot.forEach((doc) => console.log(`${doc.id} ==> ${doc.data()}`));
  } else {
    console.log("Error getting Promise.");
  }
};

// export default { getUser };
