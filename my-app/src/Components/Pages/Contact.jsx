import axios from 'axios';
import React, { useEffect, useState } from 'react';

const basUrl = "https://jsonplaceholder.typicode.com/posts/1";

const Contact = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(basUrl).then((result) => {
      // console.log(result);
      setPost(result.data);
    });
  }, []);

  return (
    <div>
      <div className="container">
        {post ? (
          <ul>
            <li>{post.id}</li>
            <li>{post.title}</li>
            <li>{post.body}</li>
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Contact;
