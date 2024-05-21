import React, { useEffect, useState } from 'react';

const About = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(result => {
        setPosts(result);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <ul>
          {
            posts.map((post, i) => (
              <div key={post.id}>
                <li>{post.id}</li>
                <li>{post.title}</li>
                <li>{post.body}</li>
              </div>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default About;
