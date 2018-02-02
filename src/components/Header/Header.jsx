import React, { Component } from  'react';
import {NavLink} from 'react-router-dom';

import './header.less';
// import avatar from '../../styles/avatar.png';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animationShow:null,
            userHide:null
        }
    }
    componentWillMount(){
        // this.props.getUserInfo();
    }
    isShow(){
        this.setState({
            animationShow : this.state.animationShow === 'activeShow' ? 'activeHide' : 'activeShow',
            userHide : this.state.userHide ? null : 'userHide'
        })
        this.nav.style.height = this.nav.style.height === '410px'? '0':'410px';
        this.cover.style.display=this.cover.style.display ==='block'?'none':'block';
    }
    isHide(){
        this.setState({
            animationShow :  'activeHide' ,
            userHide : null
        })
        this.cover.style.display='none';
        this.nav.style.height='0';
    }
    // alert(){
    //     const {_alert} = this.props;
    //     _alert('请先登录');
    // }
    render() {
      const {userHide} = this.state
      return (
        <header>
          <div className='wrap clearfix'>
            <h1 className={this.state.animationShow}><NavLink to='/' activeClassName='active' className='link'>blog</NavLink></h1>
            <nav>
              <div className='nav-app'>
                  <ul className='nav'  ref={ref=>{this.nav=ref}} onClick={()=>this.isHide()}>
                      <li className='nav-item'><NavLink exact to='/' activeClassName='active' className='link'>首页</NavLink></li>
                      <li className='nav-item'><NavLink to='/blog' activeClassName='active' className='link'>博客</NavLink></li>
                      {/* {
                          loginBoxData.name == 'admin' ?
                              <li className='nav-item'><NavLink to='/create' activeClassName='active' className='link'>发表Blog</NavLink></li>:
                              null
                      } */}
                      <li className='nav-item'><NavLink to='/other' activeClassName='active' className='link'>其他</NavLink></li>
                      <li className='nav-item'><NavLink to='/about' activeClassName='active' className='link'>关于</NavLink></li>
                      {/* {
                          !loginBoxData.isLogin ?
                              <li className='nav-item nav-item-only clearfix'>
                                  <span className='link link-item-left' onClick={()=>modBoxAction('regShow')}>注册</span>
                                  <span className='link link-item-right' onClick={()=>modBoxAction('loginShow')}>登录</span>
                              </li>
                              :
                              <li className='nav-item nav-item-only'>
                                  <span className='link' onClick={()=>loginSubmit('loginOut')}>退出</span>
                              </li>
                      } */}
                  </ul>
                  <div className='nav-cover'  ref={ref=>{this.cover=ref}} onClick={()=>this.isHide()}></div>
              </div>
            </nav>
            {/* mobile */}
            <div className='icon-category' onClick={()=>this.isShow()}>
              <span className={userHide ?'nav-Btn-line nav-Btn-one':'nav-Btn-line'}></span>
              <span className={userHide ?'nav-Btn-line nav-Btn-two':'nav-Btn-line'}></span>
              <span className={userHide ?'nav-Btn-line nav-Btn-three':'nav-Btn-line'}></span>
            </div>
          </div>
        </header>
      )
    }
};

export default Header;
