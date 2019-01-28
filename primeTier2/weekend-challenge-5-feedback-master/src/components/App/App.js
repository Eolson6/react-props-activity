import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import FeelingsForm from '../FeelingsForm/FeelingsForm.js';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm.js';
import SupportedForm from '../SupportedForm/SupportedForm.js';
import CommentsForm from '../CommentsForm/CommentsForm.js';
import SubmitForm from '../SubmitForm/SubmitForm.js';
import Header from '../Header/Header.js';
import Review from '../Review/Review.js';
import SubmissionSuccess from '../SubmissionSuccess/SubmissionSuccess.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submission: false
    }
  }

  handleSubmit = (event) => {
    const action = { type: 'UPDATE_COMMENTS', payload: this.state.input };
    this.props.dispatch(action);
    this.setState({
      input: '',
      submission: true,
    });
    // this.props.history.push('submitform')
  } 


  render() {
    return (
     
      <Router>
        <div>
          

          <Header/>
          {JSON.stringify(this.state)}
       
          <Link to="/feelingsform">Feelings Form</Link>
          <br></br>
          <Link to="/understandingform">Understanding Form</Link>
          <br></br>
          <Link to="/supportedform">Supported Form</Link>
          <br></br>
          <Link to="/commentsform">Comments Form</Link>
          <br></br>
          <Link to="/submitform">Submit Form</Link>
          
          

          {/* Routes */}
          
          <Route exact path="/app" component={App} />
          <Route exact path="/feelingsForm" component={FeelingsForm} />
          <Route exact path="/understandingform" component={UnderstandingForm} />
          <Route exact path="/supportedform" component={SupportedForm} />
          <Route exact path="/commentsform" component={CommentsForm} />
          <Route exact path="/submitform" component={SubmitForm} />
          <Route exact path="/submissionsuccess" component={SubmissionSuccess} />
          <Route exact path='/revew' component={Review} />
          
        </div>
      </Router>

     
    );
  }
}

export default App;
