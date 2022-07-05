//This is a exercise

import React, {useState, useEffect} from 'react';
import axios from 'axios';

const URL = "https://jsonplaceholder.typicode.com/users";

const ListOfUsers = () =>{
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        const getList = async () =>{
            const {data} = await axios.get(URL,{})
            setUsers(data);
        };
        getList();
        
    }, []);

    const renderedUsers = users.map((user)=>{
        return <li key={user.id}>{user.name}</li>;
    });

    return (
        <ul>  
            {renderedUsers}
        </ul>
    )
}

export default ListOfUsers;