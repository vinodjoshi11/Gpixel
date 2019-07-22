import React from 'react';
import PropTypes from 'prop-types';

import Repos from './Repos';

const User = props => {
    const { currentUserData, userRepos } = props;
    const { userData } = currentUserData;
    const { repos, isFetching } = userRepos;
    console.log(currentUserData);
    return (
        <div>
            <h1>{userData.id}</h1>
            <Repos userData={userData} />
        </div>
    );
};

User.propTypes = {
    currentUserData: PropTypes.object.isRequired,
    userRepos: PropTypes.object.isRequired,
};

export default User;
