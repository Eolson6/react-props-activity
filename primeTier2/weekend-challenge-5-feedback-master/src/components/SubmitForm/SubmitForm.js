import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review.js'



class SubmitForm extends Component {

    handleSubmit = (event) => {
        console.log('in review handle submit');

        if (this.props.reduxState.submissionSucess = 'true') {


            this.props.history.push('submissionsuccess')
        }
    }

    submit = (event) => {
        console.log('in review handle submit');

        if (this.props.reduxState.submissionSucess = 'true') {


            this.props.history.push('submissionsuccess')
        }
    }


    render() {
        return (
            <div>
                <h1>Submit Form</h1>
                <Review handleSubmit={this.props.handleSubmit} />
                <button onClick={this.submit}>submit</button>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(SubmitForm);