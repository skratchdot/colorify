import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import GithubCorner from './GithubCorner';

class Page extends Component {
  render() {
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
}

export default Page;
