import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const request = async (...args) => {
    const response = await apiFunc(...args);
    setError(!response.ok);
    setData(response.data);
    return response;
  };

  return { data, error, request };
};
