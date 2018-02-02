import React, { Component } from 'react';
// import {withRouter} from 'react-router-dom'
import {getTest} from '../../services/home.js'
import { observer, inject } from 'mobx-react'

// @withRouter
@inject('toast')
@observer
class Home extends Component {
  constructor(props) {
    super(props);
    this.toast = this.props.toast
  }

  componentDidMount () {
    this.getInfo()
  }
  async getInfo () {
    const res = await getTest()
    console.log(res)
  }
  push = () => {
    this.props.history.push("/blog")
  }

  msg = () => {
    this.toast.setMeaasge('测试')
  }

  render() {
    return (
      <div className="home">
        <li onClick={this.push}>push</li>
        <li onClick={this.msg}>msg</li>
      </div>
    );
  }
}

export default Home;
