import React from 'react';
import { Link } from 'react-router';
import { Jumbotron } from 'react-bootstrap';
import Page from '../Page';

module.exports = React.createClass({
  render: function () {
    return (
      <Page pageName="NotFound">
        <Jumbotron className="text-center">
          <h1 className="title">Colorify</h1>
          <h2>404 - Not Found</h2>
          <p>
						Something terrible just happened.
						I can't find the page you're looking for.
          </p>
          <p>
						Head to the homepage by clicking the button below.
          </p>
          <p>
            <Link to="/colorify" className="btn btn-primary">Homepage</Link>
          </p>
        </Jumbotron>
      </Page>
    );
  }
});
