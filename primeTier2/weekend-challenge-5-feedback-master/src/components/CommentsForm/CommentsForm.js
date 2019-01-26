import React, { Component } from 'react';
import { connect } from 'react-redux';

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


    render() {
        return (
            <div>
                <h1>Comments</h1>
                <input type="text" value={this.state.input} onChange={this.handleChange} />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(CommentsForm);