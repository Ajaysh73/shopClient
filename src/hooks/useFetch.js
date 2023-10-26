import { useEffect, useState } from 'react';
import { makeRequest } from '../makeRequest';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log(url);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        console.log('in fetch');
        const res = await makeRequest.get(url);
        console.log(res.data);
        setData(res.data.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);
  console.log(data);
  return { data, loading, error };
};

export default useFetch;
