import React from 'react';
import './UserCard.css';

const UserCard = ({user}) => {
    return(
        <div className="container">
            <div className="user-card">
                <img src={user.avatar_url} alt="user avatar"/>
                <h3>{user.login} | </h3>
                <h4>Github Profile: </h4>
                <a href={user.html_url}>{user.html_url}</a>
            </div>
        </div>

    );
}

export default UserCard;