import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

const List = (props) => {
    const list = props.articles.map((article, index) => {
        const postedDate = moment(article.postedDate).fromNow();
        return (
            <li key={index}>
                <a href={article.url}>
                    <img src={article.image} alt={article.title} />
                    <h2>{article.title}</h2>
                    <p>{article.intro}</p>
                    <span>{postedDate}</span>
                </a>
            </li>
        );
    });
    return (
        <ul className="list">
            {list}
        </ul>
    );
};

List.propTypes = {
    articles: PropTypes.array.isRequired,
};

export default List;
