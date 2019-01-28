import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review.js'

class FeelingsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        }
    }

    // Function called as the user input changes
    handleChange = (event) => {
        console.log('feelings',event.target.value);
        this.setState({
            input: event.target.value,
            
        });
    }


    handleSubmit = (event) => {
        if (this.state.input != "") {
            const action = { type: 'UPDATE_FEELINGS_RATING', payload: this.state.input};
            this.props.dispatch(action);
            this.setState({
                input: '',
            });
            this.props.history.push('understandingform')
            } else {
                alert('Please complete section')
            }
    }

    render() {
        return (
            <div>
                <h1>How are you Feeling?</h1>
                <select onChange={this.handleChange} value={this.state.input}>
                {JSON.stringify(this.state.input)}
                <option value=''>Choose</option>
                <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button onClick={this.handleSubmit}>Next</button>
                <Review/>
                <button onClick={this.submit}>submit</button>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(FeelingsForm);