import React from 'react';
import UserCard from './UserCard';
import PropTypes from 'prop-types'; 
import './UserCardList.css';

function UserCardList ({users}){
    const userList = users;
    if (userList.length>0){
        return(
            <ul className="user-list">
                {users.map(user =>
                    <li key={user.id}>
                        <UserCard user={user}/>
                        <hr></hr>
                    </li>)}
            </ul>
        );
    }
    return null;

}

UserCardList.propTypes = {users: PropTypes.array.isRequired};

export default UserCardList;