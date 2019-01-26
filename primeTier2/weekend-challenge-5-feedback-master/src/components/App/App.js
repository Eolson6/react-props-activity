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
import Review from '../Review/Review.js'


class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <Header/>
       
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
          
        </div>
      </Router>

     
    );
  }
}

export default App;
