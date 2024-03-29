
// useFetch.js
import { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/films");
      const newData = await response.json();
      setData(newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return [data, fetchData];  // Return fetchData as part of the hook result
};

export default UseFetch;