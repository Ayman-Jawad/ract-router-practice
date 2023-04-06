import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FD = () => {
    const friend = useLoaderData();
    return (
        <div>
            <h1>special details</h1>
            <h4>Name: {friend.name}</h4>
            <p>Phone: {friend.phone}</p>
        </div>
    );
};

export default FD;