import React from 'react';
import { Grid } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import GithubCorner from './GithubCorner';

module.exports = React.createClass({
  render: function() {
    return (
      <div className={`page-${this.props.pageName}`}>
        <Grid>
          <Header active={this.props.pageName} />
          {this.props.children}
          <Footer />
          <GithubCorner href="https://github.com/skratchdot/colorify" />
        </Grid>
      </div>
    );
  }
});
