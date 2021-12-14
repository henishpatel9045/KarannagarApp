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
  const users = await getDocs(collection(db, "users"));
  let usersList = [];
  users.forEach((snapshot) => {
    usersList.push(snapshot.data());
  });
  return usersList;
};

const getPolls = async () => {
  const polls = await getDocs(collection(db, "polls"));
  let pollsList = [];
  polls.forEach((snapshot) => {
    pollsList.push(snapshot.data());
  });
  return pollsList;
};

const getAnnouncements = async () => {
  const announcements = await getDocs(collection(db, "announcements"));
  let anouncementsList = [];
  announcements.forEach((snapshot) => {
    anouncementsList.push(snapshot.data());
  });
  return anouncementsList;
};

const getEmergencies = async () => {
  const emergencies = await getDocs(collection(db, "emergencies"));
  let emergenciesList = [];
  emergencies.forEach((snapshot) => {
    emergenciesList.push(snapshot.data());
  });
  return emergenciesList;
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
