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
  let response = {};
  let usersList = [];
  try {
    const users = await getDocs(collection(db, "users"));
    users.forEach((snapshot) => {
      usersList.push(snapshot.data());
    });
    response = { data: usersList, error: false };
  } catch (e) {
    response = { data: usersList, error: e };
  }
  return response;
};

const getPolls = async () => {
  let response = {};
  let pollsList = [];
  try {
    const polls = await getDocs(collection(db, "polls"));
    polls.forEach((snapshot) => {
      pollsList.push(snapshot.data());
    });
    response = { data: pollsList, error: false };
  } catch (e) {
    response = { data: pollsList, error: e };
  }
  return response;
};

const getAnnouncements = async () => {
  let anouncementsList = [];
  let response = {};
  try {
    const announcements = await getDocs(collection(db, "announcements"));
    announcements.forEach((snapshot) => {
      anouncementsList.push(snapshot.data());
    });
    response = { data: anouncementsList, error: false };
  } catch (e) {
    response = { data: anouncementsList, error: e };
  }
  return response;
};

const getEmergencies = async () => {
  let emergenciesList = [];
  let response = {};
  try {
    const emergencies = await getDocs(collection(db, "emergencies"));

    emergencies.forEach((snapshot) => {
      emergenciesList.push(snapshot.data());
    });
    if (!emergencies.ok()) {
      return console.log("Emergency Api Failed to get the data");
    }
    response = { date: emergenciesList, error: false };
  } catch (e) {
    response = { data: emergenciesList, error: e };
  }
  return response;
};

const setUsers = async (user) => {
  // await setDoc(doc(db, "users", user.uid), {...user, dateCreated: ""});
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
