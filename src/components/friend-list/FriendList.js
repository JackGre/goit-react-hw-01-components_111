import React from "react";
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
    return (
        <ul className={styles.list}>
            {friends.map(({ isOnline, avatar, name, id }) => {
                return (
                    <FriendListItem 
                    avatar={avatar}
                    isOnline={isOnline}
                    name={name}
                    key={id}
                    />
                )
            }
        )}
        </ul>
    );
};



FriendList.propTypes = {
    friends: PropTypes.array.isRequired
};

export default FriendList;