import { initializeApp } from "@firebase/app";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import firebaseConfig from "../configs/firebaseConfig";

const db = getFirestore(initializeApp(firebaseConfig));

const getUserRef = async (ref) => {
  const snapshot = await getDoc(ref);
  return snapshot.data();
};

const getUsers = async () => {
  let error = false;
  let usersList = [];
  try {
    const users = await getDocs(collection(db, "users"));
    users.forEach((snapshot) => {
      usersList.push(snapshot.data());
    });
  } catch (e) {
    error = e;
  }
  return { data: usersList, error: error };
};

const getPolls = async () => {
  let error = false;
  let pollsList = [];
  try {
    const polls = await getDocs(collection(db, "polls"));
    polls.forEach((snapshot) => {
      pollsList.push(snapshot.data());
    });
  } catch (e) {
    error = e;
  }
  return { data: pollsList, error: error };
};

const getAnnouncements = async () => {
  let error = false;
  let anouncementsList = [];
  try {
    const announcements = await getDocs(collection(db, "announcements"));
    announcements.forEach((snapshot) => {
      anouncementsList.push(snapshot.data());
    });
  } catch (e) {
    error = e;
  }
  return { data: anouncementsList, error: error };
};

const getEmergencies = async () => {
  let emergenciesList = [];
  let error = false;
  try {
    const emergencies = await getDocs(collection(db, "emergencies"));
    emergencies.forEach((snapshot) => {
      emergenciesList.push(snapshot.data());
    });
  } catch (e) {
    error = e;
  }
  return { data: emergenciesList, error: error };
};

const setUsers = async (user) => {
  await setDoc(doc(db, "users", user.uid), user);
};
const setAnnouncements = async (announcement) => {
  await setDoc(doc(db, "announcements", announcement.uid), announcement);
};
const setEmergencies = async (emergencie) => {
  await setDoc(doc(db, "emergencies", emergencie.uid), emergencie);
};
const setPolls = async (poll) => {
  await setDoc(doc(db, "polls", poll.uid), poll);
};

export {
  getUserRef,
  getUsers,
  getAnnouncements,
  getEmergencies,
  getPolls,
  setUsers,
};
