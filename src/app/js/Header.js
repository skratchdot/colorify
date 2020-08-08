import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Col, Nav } from 'react-bootstrap';

class Header extends Component {
  isLinkActive = (name) => {
    return this.props.active === name ? 'active' : '';
  }
  render() {
    return (
      <div>
        <Row className="header">
          <Col md={6}>
            <Link to="/colorify">
              <h1 className="title">
                Colorify &nbsp;
                <small>a collection of color tools</small>
              </h1>
            </Link>
          </Col>
          <Col md={6}>
            <Nav bsStyle="pills">
              <li key="home" className={this.isLinkActive('Home')}>
                <Link to="/colorify">Home</Link>
              </li>
              <li key="about" className={this.isLinkActive('About')}>
                <Link to="/colorify/about">About</Link>
              </li>
              <li key="stats" className={this.isLinkActive('Stats')}>
                <Link to="/colorify/stats">Stats</Link>
              </li>
              <li key="mixer" className={this.isLinkActive('Mixer')}>
                <Link to="/colorify/mixer">Mixer</Link>
              </li>
              <li key="math" className={this.isLinkActive('Math')}>
                <Link to="/colorify/math">Math</Link>
              </li>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="color-stripe" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
