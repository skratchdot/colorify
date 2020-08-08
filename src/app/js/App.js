import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import StatsPage from './pages/Stats';
import MixerPage from './pages/Mixer';
import MathPage from './pages/Math';
import NotFoundPage from './pages/NotFound';

// setup pages
const pages = {
  home: HomePage,
  about: AboutPage,
  stats: StatsPage,
  mixer: MixerPage,
  math: MathPage,
  notFound: NotFoundPage,
};

// setup app
class App extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

// create and render routes
const routes = (
  <Route component={App}>
    <Route path="/colorify" component={pages.home} />
    <Route path="/colorify/about" component={pages.about} />
    <Route path="/colorify/stats" component={pages.stats} />
    <Route path="/colorify/stats/:color" component={pages.stats} />
    <Route path="/colorify/mixer" component={pages.mixer} />
    <Route path="/colorify/mixer/:color1" component={pages.mixer} />
    <Route path="/colorify/mixer/:color1/:color2" component={pages.mixer} />
    <Route path="/colorify/math" component={pages.math} />
    <Route path="/colorify/math/:color1" component={pages.math} />
    <Route path="/colorify/math/:color1/:color2" component={pages.math} />
    <Route path="*" component={pages.notFound} />
  </Route>
);

ReactDOM.render(
  <Router history={createBrowserHistory()}>{routes}</Router>,
  document.getElementById('app')
);
