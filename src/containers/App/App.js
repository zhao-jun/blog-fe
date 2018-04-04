import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import Home from '../../containers/Home/Home'
import Header from '../../components/Header/Header'
import Other from '../../containers/Other/Other'
import About from '../../components/About/About'
import Footer from '../../components/Footer/Footer'
import Toast from '../../components/Toast/Toast'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import './app.less'

@withRouter
class App extends Component {
  render() {
    const {location} = this.props
    return (
      <div className="App">
        <Header />
        <Toast />
        <TransitionGroup className="container">
          <CSSTransition
            key={location.pathname}
            classNames="transitionWrapper"
            timeout={800}>
            <section className="container-inner">
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/other" component={Other} />
                <Route path="/about" component={About} />
              </Switch>
              <Footer />
            </section>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default App;
