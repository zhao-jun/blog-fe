import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Home from '../../containers/Home/Home'
import Header from '../../components/Header/Header'
import Other from '../../containers/Other/Other'
import Footer from '../../components/Footer/Footer'
import Toast from '../../components/Toast/Toast'

import './app.less'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Toast />
        <Route exact path="/" component={Home}/>
        <Route path="/other" component={Other}/>
        <Footer />
      </div>
    );
  }
}

export default App;
