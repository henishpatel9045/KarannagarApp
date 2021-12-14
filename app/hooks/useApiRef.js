import { useState, useEffect } from "react";

export default (apiRef) => {
  const [usersList, setusersList] = useState([]);
  const setUser = async () => {
    const users = await apiRef();
    setusersList(users);
  };
  useEffect(() => {
    setUser();
  }, []);
  return usersList;
};
