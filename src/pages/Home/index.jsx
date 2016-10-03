import React, { PropTypes } from 'react';

import Header from '../../components/Header';
import List from '../../components/List';

import styles from './styles.css';

const Home = (props) => (
    <div className={styles.container}>
        <Header title="Post article 😜" />
        <form onSubmit={props.submit}>
            <input type="text" value={props.input} onChange={props.handleChange} placeholder="Post an article" />
        </form>
        <List articles={props.articles} />
    </div>
);

Home.propTypes = {
    articles: PropTypes.array.isRequired,
    input: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
};

export default Home;
