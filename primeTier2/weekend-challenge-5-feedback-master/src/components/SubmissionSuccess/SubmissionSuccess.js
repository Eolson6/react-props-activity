import React, { Component } from 'react';
import { connect } from 'react-redux';

class SubmissionSuccess extends Component {

    render() {
        return (
            <div>
                <h1>success!</h1>

            </div>

        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(SubmissionSuccess);