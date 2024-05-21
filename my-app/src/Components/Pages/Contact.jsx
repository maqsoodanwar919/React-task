import axios from 'axios';
import React, { useEffect, useState } from 'react';

const basUrl = "https://jsonplaceholder.typicode.com/users";

const Contact = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(basUrl).then((result) => {
      setPosts(result.data);
    });
  }, []);

  return (
    <div>
      <div className="container">
          {/* single-item-show */}
          {/* <div>{posts.id}</div>
          <div>{posts.title}</div>
          <div>{posts.body}</div> */} 
          {/* loop map function */}

        <ul>
          {posts.map((pst) => (
            <li key={pst.id}>
              <div>{pst.id}</div>
              <div>{pst.name}</div>
              <div>{pst.username}</div>
              <div>{pst.email}</div> 
              <div>{pst.address.street}</div>  
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Contact;
