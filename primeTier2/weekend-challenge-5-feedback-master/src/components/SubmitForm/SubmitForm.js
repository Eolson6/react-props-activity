import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review.js'

class SubmitForm extends Component {

    render() {
        return (
            <div>
                <h1>Submit Form</h1>
                <Review />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(SubmitForm);