import React from 'react';
import PropTypes from 'prop-types';

const Repos = props => (
    <ul>
        {props.userData.map(repo => (
            <li key={repo.id}>
                <h3>{repo.title}</h3>
                <p>{repo.body}{repo.description}</p>
            </li>
        ))}
    </ul>
);
Repos.propTypes = {
    userData: PropTypes.array.isRequired,
};

export default Repos;
