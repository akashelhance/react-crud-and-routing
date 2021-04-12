import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from "react-router-dom";

const Home = () => {
    const [users, setusers] = useState([]);

    useEffect(() => {
        console.log("Hello")
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get('http://localhost:3003/users')
        console.log("hello from load ussser")
        setusers(result.data)
    }
    return (
        <div className="container">


            <h1> Home PAge</h1>

            <table className="table border shadow">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action Taken</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link class="btn btn-primary mr-2">
                                    View
                                 </Link>
                                <Link
                                    class="btn btn-outline-primary mr-2"
                                    
                                >
                                    Edit
                                 </Link>
                                <Link
                                    class="btn btn-danger"
                                  
                                >
                                    Delete
                                  </Link>
                            </td>
                        </tr>
                    ))}



                </tbody>
            </table>


        </div>
    )
}

export default Home
