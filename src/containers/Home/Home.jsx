import React, { Component } from 'react';
// import {withRouter} from 'react-router-dom'
import {getTest} from '../../services/home.js'
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
  componentDidMount () {
    this.getInfo()
  }
  async getInfo () {
    // const res = await getTest()
    // console.log(res)
  }
  push = () => {
    this.props.history.push("/blog")
  }
  msg = () => {
    this.toastStore.setMeaasge('测试')
  }

  explode(){
    var that = this;
    this.home.style.opacity = 0;
    this.home.style.transform="scale(0)";

    this.homeStore.changeShow(true)

    let divWidth,divHeight,column;
    if(window.innerWidth>window.innerHeight){
        column = 6;
        divWidth = window.innerWidth/6|0;
        divHeight = (window.innerHeight-110)/5|0;
    } else {
        column = 5;
        divWidth = window.innerWidth/5|0;
        divHeight = (window.innerHeight-110)/6|0;
    }

    this.xs = [];
    this.ys = [];
    this.zs = [];
    this.xvs = [];
    this.yvs = [];
    this.zvs = [];
    this.xa = 0;
    this.ya = 0.6;
    this.za = 0.2;
    for (var i = 0; i< 30;i++){
        this.xs[i] = 0;
        this.ys[i] = 0;
        this.zs[i] = 0;
        //[-1,1]
        var xFactor = 3 * (2 * divWidth*(i%column) - window.innerWidth + divWidth/2) / window.innerWidth;
        var yFactor = (2 * divHeight*(i/column|0) - window.innerHeight  ) / window.innerHeight;
        this.xvs[i] = (10 + Math.floor(Math.random() * 100)) * xFactor;
        this.yvs[i] = (10 + Math.floor(Math.random() * 100)) * yFactor;
        this.zvs[i] = -10 + Math.floor(Math.random() * 100);
    }


    function updateAll () {
        for(var i = 0;i < 30;i++){
            that.xvs[i] += that.xa;
            that.yvs[i] += that.ya;
            that.zvs[i] += that.za;
            that.xs[i] += that.xvs[i];
            that.ys[i] += that.yvs[i];
            that.zs[i] -= that.zvs[i];
        }

        that.homeStore.changeXYZ(that.xs, that.ys, that.zs)
    }
    updateAll();

    let onOff = setInterval(()=>updateAll(),50);
    setTimeout(function () {
        // that.home.style.display = 'none';
        that.homeStore.changeReset();
        that.home.style.opacity = 1;
        that.home.style.transform="scale(1)";
        clearInterval(onOff);
    },1000)
  }

  render() {
    const {xs, ys, zs, show} = this.homeStore
    let explodeDiv=[], divWidth, divHeight, column;
    if(window.innerWidth>window.innerHeight){
        column = 6;
        divWidth = window.innerWidth/6|0;
        divHeight = (window.innerHeight-110)/5|0;
    } else {
        column = 5;
        divWidth = window.innerWidth/5|0;
        divHeight = (window.innerHeight-110)/6|0;
    }
    if (xs.length) {
      for (var i = 0; i< 30;i++){
        explodeDiv.push(<div key={i} className="explode" style={{width:divWidth+'px',height:divHeight+'px',left:divWidth*(i%column)+'px',top:divHeight*(i/column|0)+'px',backgroundPositionX:-divWidth*(i%column)+'px',backgroundPositionY:-divHeight*(i/column|0)+'px', transform:'translate3d(' + xs[i] + 'px, ' + ys[i] + 'px, ' + zs[i] + 'px) rotateX(' +5* ys[i] + 'deg) rotateY(' +  5* xs[i] + 'deg)'}}></div>)
      }
    }
    return (
      <div className="homeWrap">
        <div className="home" ref={ref=>{this.home=ref}} onClick={()=>this.explode()}>
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
