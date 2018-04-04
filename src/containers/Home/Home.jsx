import React, { Component } from 'react';
// import {withRouter} from 'react-router-dom'
import { getTest } from '../../services/home.js'
import { observer, inject } from 'mobx-react'

import './home.less'

// @withRouter
@inject('toastStore', 'homeStore')
@observer
class Home extends Component {
  constructor(props) {
    super(props);
    this.toastStore = this.props.toastStore
    this.homeStore = this.props.homeStore
  }
  componentDidMount() {
    this.getInfo()
  }
  async getInfo() {
    const res = await getTest()
    console.log(res)
  }
  push = () => {
    this.props.history.push("/blog")
  }
  msg = () => {
    this.toastStore.setMeaasge('测试')
  }

  // 爆炸效果
  explode = () => {
    const that = this;
    that.home.style.opacity = 0;
    that.home.style.transform = "scale(0)";

    that.homeStore.changeShow(true)

    let divWidth, divHeight, column;
    if (window.innerWidth > window.innerHeight) {
      column = 6;
      divWidth = window.innerWidth / 6 | 0;
      divHeight = (window.innerHeight - 110) / 5 | 0;
    } else {
      column = 5;
      divWidth = window.innerWidth / 5 | 0;
      divHeight = (window.innerHeight - 110) / 6 | 0;
    }

    that.xs = [];
    that.ys = [];
    that.zs = [];
    that.xvs = [];
    that.yvs = [];
    that.zvs = [];
    that.xa = 0;
    that.ya = 0.6;
    that.za = 0.2;
    for (var i = 0; i < 30; i++) {
      that.xs[i] = 0;
      that.ys[i] = 0;
      that.zs[i] = 0;
      let xFactor = 3 * (2 * divWidth * (i % column) - window.innerWidth + divWidth / 2) / window.innerWidth;
      let yFactor = (2 * divHeight * (i / column | 0) - window.innerHeight) / window.innerHeight;
      that.xvs[i] = (10 + Math.floor(Math.random() * 100)) * xFactor;
      that.yvs[i] = (10 + Math.floor(Math.random() * 100)) * yFactor;
      that.zvs[i] = -10 + Math.floor(Math.random() * 100);
    }

    that.updateAll();

    let onOff = setInterval(() => that.updateAll(), 50);
    setTimeout(function () {
      // that.home.style.display = 'none';
      that.homeStore.changeReset();
      that.home.style.opacity = 1;
      that.home.style.transform = "scale(1)";
      clearInterval(onOff);
    }, 1000)
  }

  updateAll() {
    const that = this;
    for (var i = 0; i < 30; i++) {
      that.xvs[i] += that.xa;
      that.yvs[i] += that.ya;
      that.zvs[i] += that.za;
      that.xs[i] += that.xvs[i];
      that.ys[i] += that.yvs[i];
      that.zs[i] -= that.zvs[i];
    }

    that.homeStore.changeXYZ(that.xs, that.ys, that.zs)
  }

  render() {
    const { xs, ys, zs, show } = this.homeStore
    let explodeDiv = [], divWidth, divHeight, column;
    if (window.innerWidth > window.innerHeight) {
      column = 6;
      divWidth = window.innerWidth / 6 | 0;
      divHeight = (window.innerHeight - 110) / 5 | 0;
    } else {
      column = 5;
      divWidth = window.innerWidth / 5 | 0;
      divHeight = (window.innerHeight - 110) / 6 | 0;
    }
    if (xs.length) {
      for (var i = 0; i < 30; i++) {
        explodeDiv.push(<div key={i} className="explode" style={{ width: divWidth + 'px', height: divHeight + 'px', left: divWidth * (i % column) + 'px', top: divHeight * (i / column | 0) + 'px', backgroundPositionX: -divWidth * (i % column) + 'px', backgroundPositionY: -divHeight * (i / column | 0) + 'px', transform: 'translate3d(' + xs[i] + 'px, ' + ys[i] + 'px, ' + zs[i] + 'px) rotateX(' + 5 * ys[i] + 'deg) rotateY(' + 5 * xs[i] + 'deg)' }}></div>)
      }
    }
    return (
      <div className="home">
        <div className="home-content" ref={ref => { this.home = ref }} onClick={this.explode}>
          {
            show ?
              null :
              <div>
                <h2>Welcome</h2>
                <p className="describe">My Friend</p>
              </div>
          }
        </div>
        {
          show ? explodeDiv : null
        }
      </div>
    );
  }
}

export default Home;
