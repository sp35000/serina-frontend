import { useState, useEffect } from 'react';
import axios from "axios";

function getNoticiasByDate(parmDate) {
  const [noticias, setNoticias] = useState([]);
  const client = axios.create({
    baseURL: "https://work4love.net/serina-api/public/api/news/date/"
  });
  // GET with Axios
  try {
    useEffect(() => {
    const fetchNoticias = async () => {
       let response = await client.get(parmDate);
       setNoticias(response.data);
       console.log('fetchNoticias:'+response.data);
      }
      fetchNoticias();
    }, [parmDate]);
    return (
    noticias
    );
  } catch (error) {
    console.log(error);      
  }
};
export default getNoticiasByDate;