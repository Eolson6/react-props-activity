import React, { Component } from 'react';
import { connect } from 'react-redux';

class SupportedForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
        }
    }

    render() {
        return (
            <div>
                <h1>Supported Form</h1>

                <select onChange={this.handleChange} value={this.state.input}>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                </select>
                <button onClick={this.handleSubmit}>Next</button>

            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(SupportedForm);