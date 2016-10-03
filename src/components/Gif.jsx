import React, { PropTypes } from 'react';

const Gif = (props) => (
    <div className="single">
        <img src={props.url} alt={props.alt} />
    </div>
);

Gif.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Gif;
