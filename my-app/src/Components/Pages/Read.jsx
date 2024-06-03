import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Read = () => {
  const [posts, setPosts] = useState([]);

  // Fetch API data
  const getData = () => {
    axios.get("http://localhost:3000/users")
      .then((result) => {
        setPosts(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // Delete function
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`)
      .then(() => {
        getData();
      });
  };

  // Store data to localStorage
  const setDataToStorage = (id, userName, userEmail) => {
    localStorage.setItem('id', id);
    localStorage.setItem('userName', userName);
    localStorage.setItem('userEmail', userEmail);
  };

  return (
    <>
      <div className='container'>
        <h1 className='text-center my-4'>Read Form With React js</h1>
        <div className='row'>
          <div className='col-lg-12 me-auto ms-auto'>
            <Link to="/create">
              <button className='btn btn-primary my-4'>Create New Data</button>
            </Link>
            <table className="table">
              <thead className="table-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">User Name</th>
                  <th scope="col">User Age</th>
                  <th scope="col">User Email</th>
                  <th scope="col" className='text-center'>Action</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((pst,i) => (
                  <tr key={i}>
                    <th scope="row">{pst.id}</th>
                    <td>{pst.userName}</td>
                    <td>{pst.userAge}</td>
                    <td>{pst.userEmail}</td>
                    <td className='text-center'>
                      <div className='btn-wrap'>
                        <button
                          className='btn btn-outline-danger'
                          onClick={() => { if (window.confirm("Are you sure delete data ??")) { handleDelete(pst.id) } }}
                        >
                          Delete
                        </button>
                        <Link to="/edit">
                          <button
                            className='btn btn-outline-success ms-3'
                            onClick={() => setDataToStorage(pst.id, pst.userName, pst.userEmail)}
                          >
                            Edit
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Read;
