import { useState } from "react";

export default useApiRef = (apiRef) => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const request = async () => {
    setloading(true);
    const dataObj = await apiRef();
    setloading(false);

    setData(dataObj);
  };
  return { data, loading, request };
};
