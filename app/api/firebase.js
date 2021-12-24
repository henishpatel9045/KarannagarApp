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
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { useState } from "react";
import firebaseConfig from "../configs/firebaseConfig";
import staticAppData from "../configs/staticAppData";

const db = getFirestore(initializeApp(firebaseConfig));

// GET Methods

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
    onSnapshot(collection(db, "announcements"), (announcements) => {
      anouncementsList.length = 0;
      announcements.forEach((snapshot) => {
        if (snapshot.exists()) {
          anouncementsList.push({ ...snapshot?.data(), docId: snapshot.id });
          anouncementsList.sort((a, b) => {
            return b.dateCreated.toMillis() - a.dateCreated.toMillis();
          });
        }
      });
    });

    response = {
      data: anouncementsList,
      error: false,
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
    onSnapshot(collection(db, "emergencies"), (emergencies) => {
      emergenciesList.length = 0;
      emergencies.forEach((snapshot) => {
        if (snapshot.exists()) {
          emergenciesList.push({ ...snapshot?.data(), docId: snapshot.id });
          emergenciesList.sort((a, b) => {
            return b.dateCreated.toMillis() - a.dateCreated.toMillis();
          });
        }
      });
    });

    response = { data: emergenciesList, error: false };
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
const getUserGenerations = async (email) => {
  let userAnnouncements = [];
  let userEmergency = [];
  let userPolls = [];
  try {
    const data1 = await getDocs(collection(db, "announcements"));
    data1.forEach((snapshot) => {
      if (snapshot.data().sender.uid === email) {
        userAnnouncements.push({ data: snapshot.data(), id: snapshot.id });
      }
    });
    const data2 = await getDocs(collection(db, "emergencies"));
    data2.forEach((snapshot) => {
      if (snapshot.data().sender.uid === email) {
        userEmergency.push({ data: snapshot.data(), id: snapshot.id });
      }
    });
    const data3 = await getDocs(collection(db, "polls"));
    data3.forEach((snapshot) => {
      if (snapshot.data().sender.uid === email) {
        userPolls.push({ data: snapshot.data(), id: snapshot.id });
      }
    });
    return {
      data: {
        announcements: userAnnouncements,
        emergencies: userEmergency,
        polls: userPolls,
      },
      error: false,
    };
  } catch (error) {
    return {
      data: {
        announcements: userAnnouncements,
        emergencies: userEmergency,
        polls: userPolls,
      },
      error: error,
    };
  }
};

// SET Methods

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
      dateCreated: Timestamp.fromMillis(Date.now()),
    });
  } catch (error) {
    console.log(error);
  }
};
const setEmergencies = async (emergencie) => {
  try {
    const docRef = await addDoc(collection(db, "emergencies"), {
      ...emergencie,
      dateCreated: Timestamp.fromMillis(Date.now()),
    });
  } catch (error) {
    console.log(error);
  }
};
const setPolls = async (poll) => {
  try {
    const docRef = await addDoc(collection(db, "polls"), {
      ...poll,
      dateCreated: Timestamp.fromMillis(Date.now()),
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

// DELETE Methods

const deleteUser = async (id) => {
  try {
    await deleteDoc(doc(db, "users", id));
    return true;
  } catch (error) {
    console.log("Error while deleting user. ", error);
    return error;
  }
};
const deleteAnnouncements = async (id) => {
  try {
    await deleteDoc(doc(db, "announcements", id));
    return true;
  } catch (error) {
    console.log("Error while deleting announcements. ", error);
    return error;
  }
};
const deleteEmergency = async (id) => {
  try {
    await deleteDoc(doc(db, "emergencies", id));
    return true;
  } catch (error) {
    console.log("Error while deleting emergencies. ", error);
    return error;
  }
};
const deletePoll = async (id) => {
  try {
    await deleteDoc(doc(db, "polls", id));
    return true;
  } catch (error) {
    console.log("Error while deleting poll. ", error);
    return error;
  }
};

export {
  getUserRef,
  getUsers,
  getAnnouncements,
  getEmergencies,
  getStaticInfo,
  getPolls,
  getUserGenerations,
  setUsers,
  setAnnouncements,
  setEmergencies,
  setPolls,
  isUserRegistered,
  deleteUser,
  deleteAnnouncements,
  deleteEmergency,
  deletePoll,
};
