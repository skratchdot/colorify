import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import getPath from 'object-path-get';

export default React.createClass({
  getDefaultProps: function() {
    return {
      stats: {}
    };
  },
  render: function() {
    const spaces = getPath(this.props.stats, 'lib.colorConvert', {});
    const color = getPath(this.props.stats, 'lib.color', {});
    return (
      <Row>
        <Col md={6}>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Space</th>
                <th>Values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>RGB</th>
                <td>{spaces.rgb.join(', ')}</td>
              </tr>
              <tr>
                <th>HSL</th>
                <td>{spaces.hsl.join(', ')}</td>
              </tr>
              <tr>
                <th>HSV</th>
                <td>{spaces.hsv.join(', ')}</td>
              </tr>
              <tr>
                <th>HWB</th>
                <td>{spaces.hwb.join(', ')}</td>
              </tr>
              <tr>
                <th>CMYK</th>
                <td>{spaces.cmyk.join(', ')}</td>
              </tr>
              <tr>
                <th>XYZ</th>
                <td>{spaces.xyz.join(', ')}</td>
              </tr>
              <tr>
                <th>LAB</th>
                <td>{spaces.lab.join(', ')}</td>
              </tr>
              <tr>
                <th>LCH</th>
                <td>{spaces.lch.join(', ')}</td>
              </tr>
              <tr>
                <th>ANSI 16</th>
                <td>{spaces.ansi16}</td>
              </tr>
              <tr>
                <th>ANSI</th>
                <td>{spaces.ansi}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col md={6}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>CSS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{color.hexString}</td>
              </tr>
              <tr>
                <td>{color.rgbString}</td>
              </tr>
              <tr>
                <td>{color.rgbaString}</td>
              </tr>
              <tr>
                <td>{color.percentString}</td>
              </tr>
              <tr>
                <td>{color.hslString}</td>
              </tr>
              <tr>
                <td>{color.hslaString}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
});
