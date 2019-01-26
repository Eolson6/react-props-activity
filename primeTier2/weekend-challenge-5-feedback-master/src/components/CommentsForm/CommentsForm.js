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
        console.log(event.target.value);
        this.setState({
            input: event.target.value,

        });
    }

    handleSubmit = (event) => {
        const action = { type: 'UPDATE_COMMENTS', payload: this.state.input };
        this.props.dispatch(action);
        this.setState({
            input: '',
        });
        this.props.history.push('understandingform')
    } 


    render() {
        return (
            <div>
                <h1>Comments</h1>
                <input type="text" value={this.state.input} onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Next</button>
                <Review />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(CommentsForm);