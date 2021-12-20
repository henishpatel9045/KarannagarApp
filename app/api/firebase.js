import { initializeApp } from "@firebase/app";
import {
  Timestamp,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
  addDoc,
} from "firebase/firestore";
import { useState } from "react";
import firebaseConfig from "../configs/firebaseConfig";
import staticAppData from "../configs/staticAppData";

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
      usersList.push({ ...snapshot.data(), docId: snapshot.id });
    });
    response = { data: usersList, error: false, size: users.size };
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
      pollsList.push({ ...snapshot.data(), docId: snapshot.id });
    });
    response = { data: pollsList, error: false, size: polls.size };
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
      anouncementsList.push({ ...snapshot.data(), docId: snapshot.id });
    });
    response = {
      data: anouncementsList,
      error: false,
      size: announcements.size,
    };
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
      emergenciesList.push({ ...snapshot.data(), docId: snapshot.id });
    });

    response = { data: emergenciesList, error: false, size: emergencies.size };
  } catch (e) {
    response = { data: emergenciesList, error: e };
  }
  return response;
};

const getStaticInfo = async () => {
  let devInfo = [];
  let response = {};
  try {
    const info = await getDocs(collection(db, "staticAppInfo"));
    info.forEach((snapshot) => {
      devInfo.push({ ...snapshot.data(), docId: snapshot.id });
    });
    response = { data: devInfo, error: false };
  } catch (e) {
    response = { data: devInfo, error: e };
  }
  return response;
};

let user = staticAppData.user;

const setUsers = async (user) => {
  try {
    const response = await setDoc(doc(db, "users", user.email), {
      ...user,
      dateCreated: Timestamp.fromMillis(Date.now()),
    });
    return true;
  } catch (error) {
    return error;
  }
};
const setAnnouncements = async (announcement) => {
  try {
    const docRef = await addDoc(collection(db, "announcements"), {
      ...announcement,
      dateCreated: Timestamp.fromDate(new Date()),
      sender: user,
    });
  } catch (error) {
    console.log(error);
  }
};
const setEmergencies = async (emergencie) => {
  try {
    const docRef = await addDoc(collection(db, "emergencies"), {
      ...emergencie,
      dateCreated: Timestamp.fromDate(new Date()),
      sender: user,
    });
  } catch (error) {
    console.log(error);
  }
};
const setPolls = async (poll) => {
  try {
    const docRef = await addDoc(collection(db, "polls"), {
      ...poll,
      dateCreated: Timestamp.fromDate(new Date()),
      sender: user,
    });
  } catch (error) {
    console.log(error);
  }
};

const isUserRegistered = async (email) => {
  let exists = false;
  const users = await getDocs(collection(db, "users"));
  users.forEach((user) => {
    if (user.id === email) {
      exists = true;
    }
  });
  return exists;
};

export {
  getUserRef,
  getUsers,
  getAnnouncements,
  getEmergencies,
  getStaticInfo,
  getPolls,
  setUsers,
  setAnnouncements,
  setEmergencies,
  setPolls,
  isUserRegistered,
};
