import React, { Component } from 'react';
// import {withRouter} from 'react-router-dom'

// @withRouter
class Home extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount () {
    console.log(this.props.history)
    // console.log(this.props.location)
  }
  push = () => {
    this.props.history.push("/")
  }

  render() {
    return (
      <div className="home">
        home
        <li onClick={this.push}>PUSH</li>
      </div>
    );
  }
}

export default Home;
