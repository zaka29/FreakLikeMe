import axios from 'axios';
// hooks.js
import {useState, useEffect} from 'react';
const baseUrl = 'http://www.agecold.ru:8888';

const useFetch = (url, seshId) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchUrl = async () => {
    const endpointUrl = baseUrl + url + `?sessionId=${seshId}`;
    console.log('use fetch -> ', endpointUrl);
    const response = await axios(endpointUrl);
    // const json = await response.json();
    setData(response.data.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
};
export {useFetch};
