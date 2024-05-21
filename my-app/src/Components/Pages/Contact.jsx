import axios from 'axios';
import React, { useEffect, useState } from 'react';

const basUrl = "https://jsonplaceholder.typicode.com/posts/";

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
        <ul>
          {posts.map((pst) => (
            <li key={pst.id}>
              <div>{pst.id}</div>
              <div>{pst.title}</div>
              <div>{pst.body}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Contact;
