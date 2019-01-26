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
        console.log(event.target.value);
        this.setState({
            input: event.target.value,
            
        });
    }

        handleSubmit=(event) => {
            const action = { type: 'UPDATE_FEELINGS_RATING', payload: this.state.input};
            this.props.dispatch(action);
            this.setState({
                input: '',
            });
            this.props.history.push('understandingform')
        } 

    render() {
        return (
            <div>
                <h1>How are you Feeling?</h1>
                <select onChange={this.handleChange} value={this.state.input}>
                {JSON.stringify(this.state.input)}
                <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button onClick={this.handleSubmit}>Next</button>
                <Review/>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(FeelingsForm);