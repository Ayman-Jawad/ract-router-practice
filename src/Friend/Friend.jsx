import React from 'react';
import './Friend.css'

const Friend = ({friend}) => {
console.log(friend);
const {email, name, id, phone} = friend; 

    return (
        <div className='friend'>
            <h4>{name}</h4>
            <p>Email Address: {email}</p>
            <p>Phone Number: {phone}</p>
        </div>
    );
};

export default Friend;