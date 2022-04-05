import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend,setFriend] = useState({});
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[])
    return (
        <div>
            <h1>My Friend Detail is here:{friendId}</h1>
            <h3>Name:{friend.name}</h3>
            <h4>Email:{friend.email}</h4>
            <h6>website:{friend.website}</h6>
        </div>
    );
};

export default FriendDetail;