import React, { Component } from 'react';
import { Row, Col, Well } from 'react-bootstrap';
import Page from '../Page';
import { main, links } from '../Readme';

class About extends Component {
  render() {
    return (
      <Page pageName="About">
        <Row>
          <Col md={8}>
            <Well dangerouslySetInnerHTML={{ __html: main }} />
          </Col>
          <Col md={4}>
            <Well dangerouslySetInnerHTML={{ __html: links }} />
          </Col>
        </Row>
      </Page>
    );
  }
}

export default About;
