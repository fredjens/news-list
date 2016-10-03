import React, { PropTypes } from 'react';

import Gif from '../../components/Gif';
import Info from '../../components/Info';

const Single = (props) => (
    <div>
        <Info
            user={props.gif.user || {}}
            source={props.gif.source}
            sourceUrl={props.gif.source_post_url}
            time={props.gif.import_datetime}
        />
        <Gif url={props.gif.images.original.url} alt={props.gif.id} />
    </div>
);


Single.propTypes = {
    gif: PropTypes.object.isRequired,
};

export default Single;
