import { useEffect, useState, useCallback } from 'react';
import { API } from '../constants/API';

export const useFetch = (endpoint = '') => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  const getData = useCallback(async () => {
    try {
      const { data } = await API.get(`${endpoint}`);
      setData(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setError(true);
    }
  }, [endpoint]);

  useEffect(() => {
    getData();
  }, [endpoint, getData]);

  return [loading, data, error];
};
