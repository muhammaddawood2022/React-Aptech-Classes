import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/todos/') 
      .then(response => {
        setData(response.data); 
      })
      .catch(err => {
        setError('Failed to fetch ');
        console.error(err);
      });
  }, []);
  if (error) return <p>{error}</p>;
  return (
    <ul>
      {data.map(item => <li key={item.id}>{item.title}</li>)}
    </ul>
  );
}                        
export default DataList;