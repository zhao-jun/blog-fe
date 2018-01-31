import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Home from '../../containers/Home/Home'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import './app.less'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={Home}/>
        {/* <Route path="/blog" component={Home}/> */}
        <Footer />
      </div>
    );
  }
}

export default App;
