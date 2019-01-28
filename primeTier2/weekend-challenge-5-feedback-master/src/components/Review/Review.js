import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';


class Review extends Component {

    // handleSubmit =(event) => {
        
        
        // const userFeedback = {
        //                     feeling: this.props.reduxState.feelingsFeedback,
        //                     understanding: this.props.reduxState.understandingfeedback,
        //                     support: this.props.reduxState.supportedFeedback,
        //                     comments: this.props.reduxState.commentsFeedback
        //                 };
    //         console.log('userfeedback', userFeedback);
            
    //     Axios({
    //         method: 'POST',
    //         url: '/api/feedback',
    //         data: {
    //             feeling: this.props.reduxState.feelingsFeedback,
    //             understanding: this.props.reduxState.understandingfeedback,
    //             support: this.props.reduxState.supportedFeedback,
    //             comments: this.props.reduxState.commentsFeedback
    //         }
    //     }).then((response) => {
    //         // this.props.history.push('/submissionsucess');
    //     }).catch((error)=> {
    //         alert('error in post', error)
    //     });

    //     }

       
        





    render () {
        return (
        <div>
            <h1>Review Feedback</h1>
                <h1>Feelings:{this.props.reduxState.feelingsFeedback}</h1>
                <h1>Understanding:{this.props.reduxState.understandingfeedback}</h1>
                <h1>Supported:{this.props.reduxState.supportedFeedback}</h1>
                <h1>Comments:{this.props.reduxState.commentsFeedback}</h1>
                
                {JSON.stringify(this.props.submission)}
        </div>

        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Review);
