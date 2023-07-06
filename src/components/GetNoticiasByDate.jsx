import { useState, useEffect } from 'react';
import axios from "axios";
import FilterableNoticiaTable from './FilterableNoticiaTable';

function getNoticiasByDate(parmDate) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [noticias, setNoticias] = useState([]);
    const client = axios.create({
      baseURL: "https://work4love.net/serina-api/public/api/news/date/"
    });
    
    // GET with Axios
    useEffect(() => {
      const fetchNoticia = async () => {
          console.log('Get Noticias - parmDate = '+parmDate);
          let response = await client.get(parmDate);
          setNoticias(response.data);
          console.log('DEBUG:');
          console.log(response);
      };
      fetchNoticia();
     }, []);
     return (
      noticias
     );
  };

export default getNoticiasByDate;