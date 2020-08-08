import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Col, Well, Jumbotron } from 'react-bootstrap';
import Page from '../Page';

class Home extends Component {
  render() {
    return (
      <Page pageName="Home">
        <Jumbotron className="text-center">
          <h1 className="title">Colorify</h1>
          <p>
            Colorify is a website containing a collection of color based tools.
            It's also a command line tool, and a node.js library. To find out
            more, read the about page by clicking the "Learn More" button below.
            You can also start using the web-based tools by clicking one of the
            feature boxes at the bottom of the page.
          </p>
          <p>
            <Link to="/colorify/about" className="btn btn-primary">
              Learn More
            </Link>
          </p>
        </Jumbotron>
        <Row className="text-center">
          <Col md={4}>
            <Well>
              <h2 className="title">Stats</h2>
              <p className="feature">
                This app displays stats about a given color. It has a number of
                reactive color pickers and filters, as well as a search box and
                "random color" buttons.
              </p>
              <p>
                <Link to="/colorify/stats" className="btn btn-primary">
                  View Stats
                </Link>
              </p>
            </Well>
          </Col>
          <Col md={4}>
            <Well>
              <h2 className="title">Mixer</h2>
              <p className="feature">
                This app lets you choose two base colors, and displays a
                gradient between those two colors. It also allows you to "mix"
                the various RGB channels in different ways, to produce different
                gradients, scales, ranges, etc.
              </p>
              <p>
                <Link to="/colorify/mixer" className="btn btn-primary">
                  View Mixer
                </Link>
              </p>
            </Well>
          </Col>
          <Col md={4}>
            <Well>
              <h2 className="title">Math</h2>
              <p className="feature">
                This app lets you perform additive and subtractive mixing on two
                base colors. Select your colors, and see the results instantly.
              </p>
              <p>
                <Link to="/colorify/math" className="btn btn-primary">
                  View Math
                </Link>
              </p>
            </Well>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default Home;
