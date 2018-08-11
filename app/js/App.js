import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

// setup pages
const pages = {
  home: require('./pages/Home'),
  about: require('./pages/About'),
  stats: require('./pages/Stats'),
  mixer: require('./pages/Mixer'),
  math: require('./pages/Math'),
  notFound: require('./pages/NotFound')
};

// setup app
const App = React.createClass({
  render() {
    return <div>{this.props.children}</div>;
  }
});

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
