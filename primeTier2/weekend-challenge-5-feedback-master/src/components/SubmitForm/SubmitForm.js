import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review.js'
import axios from 'axios';


class SubmitForm extends Component {

    

    handleSubmit = (event) => {
        console.log('in review handle submit');

        if (this.props.reduxState.submissionSucess = 'true') {


            this.props.history.push('submissionsuccess')
        }
    }

    submit = (event) => {
        console.log('in review handle submit');
        const userFeedback = {
            feeling: this.props.reduxState.feelingsFeedback,
            understanding: this.props.reduxState.understandingfeedback,
            support: this.props.reduxState.supportedFeedback,
            comments: this.props.reduxState.commentsFeedback
        };
        console.log(userFeedback);
        

        if (this.props.reduxState.submissionSucess = 'true') {
            axios ({
                method: 'POST',
                url: '/api/feedback',
                data: userFeedback
            }).then((response) => {
                this.props.history.push('submissionsuccess')
            }).catch((error)=> {
                alert('error in submission')
            })
            

            this.props.history.push('submissionsuccess')
        }
    }


    render() {
        return (
            <div>
                <form className="userInput">
                <h1>Submit Form</h1>
                <h2>Please hit submit if everything looks ok.</h2>
                </form>
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