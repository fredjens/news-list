import React, { PropTypes } from 'react';

import Single from '.';

export default class SingleContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gif: {},
        };
    }

    componentWillMount() {
    }

    render() {
        return <Single gif={this.state.gif} />;
    }
}

SingleContainer.propTypes = {
    params: PropTypes.object,
};
