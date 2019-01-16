import React, { Component } from 'react';

class FamousPeople extends Component {
  constructor() {
    super();
    this.state = {
      famousName: 'Christian Laettner',
      famousRole: 'basketball plauyer',
    };
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      famousName: event.target.value,
    });
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      famousRole: event.target.value
    });
  }

  render() {
    return (

      // <div className="App">
      //   <Header/>


      <div>
        <input onChange={this.handleChange}
          type="text" placeholder="name" />
        <input onChange={this.handleChange}
          type="text" placeholder="role" />
        <p>{this.state.famousName}  is famous for "{this.state.famousRole}."</p>
      </div>

      //  </div>

    );
  }
}

export default FamousPeople;