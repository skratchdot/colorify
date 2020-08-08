import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Nav } from 'react-bootstrap';

class Header extends Component {
  isLinkActive = (name) => {
    return this.props.active === name ? 'active' : '';
  };
  render() {
    const { active } = this.props;
    const HeaderLink = ({ to, pageName }) => {
      const className = active === pageName ? 'active' : '';
      return (
        <li className={className}>
          <Link to={to}>{pageName}</Link>
        </li>
      );
    };
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
              <HeaderLink to="/colorify" pageName="Home" />
              <HeaderLink to="/colorify/about" pageName="About" />
              <HeaderLink to="/colorify/stats" pageName="Stats" />
              <HeaderLink to="/colorify/mixer" pageName="Mixer" />
              <HeaderLink to="/colorify/math" pageName="Math" />
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
