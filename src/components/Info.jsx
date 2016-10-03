import React, { PropTypes } from 'react';
import moment from 'moment';

import User from './User';
import Source from './Source';

const Info = (props) => {
    const time = moment(props.time).fromNow();

    return (
        <div className="info">
            Posted <strong>{time}</strong>
            <User user={props.user} />
            <Source url={props.sourceUrl} name={props.source} />
        </div>
    );
};

Info.propTypes = {
    user: PropTypes.object.isRequired,
    source: PropTypes.string.isRequired,
    sourceUrl: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
};

export default Info;
