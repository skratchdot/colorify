import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import StatsPage from './pages/Stats';
import MixerPage from './pages/Mixer';
import MathPage from './pages/Math';
import NotFoundPage from './pages/NotFound';

// setup app
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/colorify">
              <HomePage />
            </Route>
            <Route exact path="/colorify/about">
              <AboutPage />
            </Route>
            <Route exact path="/colorify/stats">
              <StatsPage />
            </Route>
            <Route exact path="/colorify/stats/:color">
              <StatsPage />
            </Route>
            <Route exact path="/colorify/mixer">
              <MixerPage />
            </Route>
            <Route exact path="/colorify/mixer/:color1">
              <MixerPage />
            </Route>
            <Route exact path="/colorify/mixer/:color1/:color2">
              <MixerPage />
            </Route>
            <Route exact path="/colorify/math">
              <MathPage />
            </Route>
            <Route exact path="/colorify/math/:color1">
              <MathPage />
            </Route>
            <Route exact path="/colorify/math/:color1/:color2">
              <MathPage />
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
