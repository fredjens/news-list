import React, { PropTypes } from 'react';

const Source = (props) => {
    if (props.name === '') {
        return <span> from somewhere on internet</span>;
    }
    return (
        <span> from <a href={props.url}>source</a></span>
    );
};

Source.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default Source;
