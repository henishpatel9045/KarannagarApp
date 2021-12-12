import { initializeApp } from "firebase/app";
import { collection, getDoc, getDocs, getFirestore } from "firebase/firestore";
import firebaseConfig from "../configs/firebaseConfig";

const getUserRef = async (ref) => {
  const snapshot = await getDoc(ref);
  return {
    uid: snapshot.data().uid,
    area: snapshot.data().area,
    designation: snapshot.data().designation,
    firstName: snapshot.data().firstName,
    lastName: snapshot.data().lastName,
    lastKnownLocation: snapshot.data().lastKnownLocation,
    lastLogin: snapshot.data().lastLogin,
    phoneNo: snapshot.data().phoneNo,
    totalAnnouncements: snapshot.data().totalAnnouncements,
    totalEmergencies: snapshot.data().totalEmergencies,
    totalContribution: snapshot.data().totalContribution,
  };
};

const getUsers = async (db) => {
  const users = await getDocs(collection(db, "users"));
  let usersList = [];
  users.forEach((snapshot) =>
    usersList.push({
      uid: snapshot.data().uid,
      area: snapshot.data().area,
      designation: snapshot.data().designation,
      firstName: snapshot.data().firstName,
      lastName: snapshot.data().lastName,
      lastKnownLocation: snapshot.data().lastKnownLocation,
      lastLogin: snapshot.data().lastLogin,
      phoneNo: snapshot.data().phoneNo,
      totalAnnouncements: snapshot.data().totalAnnouncements,
      totalEmergencies: snapshot.data().totalEmergencies,
      totalContribution: snapshot.data().totalContribution,
    })
  );
  return usersList;
};

const getPolls = async (db) => {
  const polls = await getDocs(collection(db, "polls"));
  let pollsList = [];
  polls.forEach((snapshot) =>
    pollsList.push({
      dateCreated: snapshot.data().dateCreated,
      endTime: snapshot.data().endTime,
      question: snapshot.data().question,
      options: snapshot.data().options,
      sender: getUserRef(snapshot.data().sender),
      receiver: snapshot.data().receiver,
      userResponded: snapshot.data().userResponded,
    })
  );
  return pollsList;
};

const getAnnouncements = async (db) => {
  const announcements = await getDocs(collection(db, "announcements"));
  let anouncementsList = [];
  announcements.forEach((snapshot) =>
    anouncementsList.push({
      dateCreated: snapshot.data().dateCreated,
      type: snapshot.data().type,
      title: snapshot.data().title,
      image: snapshot.data().image,
      message: snapshot.data().message,
      options: snapshot.data().options,
      sender: getUserRef(snapshot.data().sender),
      receiver: snapshot.data().receiver,
    })
  );
  return anouncementsList;
};

const getEmergencies = async (db) => {
  const emergencies = await getDocs(collection(db, "emergencies"));
  let emergenciesList = [];
  emergencies.forEach((snapshot) =>
    emergenciesList.push({
      dateCreated: snapshot.data().dateCreated,
      type: snapshot.data().type,
      sender: getUserRef(snapshot.data().sender),
      location: snapshot.data().location,
    })
  );
  return emergenciesList;
};

export { getUserRef, getUsers, getAnnouncements, getEmergencies, getPolls };
