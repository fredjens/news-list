import React, { PropTypes } from 'react';

import styles from './styles.css';

const Header = (props) => (
    <header>
        <h1 className={styles.header}>{props.title}</h1>
    </header>
);

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
