import React, { PropTypes } from 'react';
import isEmpty from 'lodash/isEmpty';

const User = (props) => {
    if (isEmpty(props.user)) {
        return <span> by anonymous</span>;
    }
    return (
        <span> by
            <img className="avatar" src={props.user.avatar_url} alt={props.user.username} />
            <a href={props.user.profile_url}>{props.user.username}</a>
        </span>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
};

export default User;
