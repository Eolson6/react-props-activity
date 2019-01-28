import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review.js'

class CommentsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        }
    }

    // Function called as the user input changes
    handleChange = (event) => {
        console.log('comments', event.target.value);
        this.setState({
            input: event.target.value,
            

        });
    }


    handleSubmit = (event) => {
        if (this.state.input != "") {
        const action = { type: 'UPDATE_COMMENTS', payload: this.state.input };
        this.props.dispatch(action);
        this.setState({
            input: '',
            submission: true,
        });
        
         this.props.history.push('/submitform')
    } else {
        alert('Please complete section')
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
            <form id="comments">
                <h1>Comments</h1>
                <input type="text" value={this.state.input} onChange={this.handleChange} />
                <button type = "button" onClick={this.handleSubmit}>Next</button>
            </form>
            
                <Review />
                <button onClick={this.submit}>submit</button>
               </div>
            
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(CommentsForm);