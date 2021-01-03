import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class MathHeaderCol extends Component {
  render() {
    const start = this.props.rgbString;
    const end = this.props.rgbString.replace('1)', '0.3)');
    return (
      <Col xs={6}>
        <div
          style={{
            background: `linear-gradient(to top, ${start}, ${end})`,
            borderTopLeftRadius: '100px',
            borderTopRightRadius: '100px',
            height: '20px',
          }}
        >
          &nbsp;
        </div>
        <h3
          style={{
            textAlign: 'center',
            border: `13px solid ${this.props.hex}`,
            margin: 0,
          }}
        >
          <span style={{ whiteSpace: 'nowrap' }}>{this.props.label}</span>
          <br />
          <span style={{ color: '#777' }}>{this.props.hex.toUpperCase()}</span>
        </h3>
        <div
          style={{
            background: `linear-gradient(to bottom, ${start}, ${end})`,
            borderBottomLeftRadius: '100px',
            borderBottomRightRadius: '100px',
            height: '20px',
            marginBottom: '10px',
          }}
        >
          &nbsp;
        </div>
      </Col>
    );
  }
}

MathHeaderCol.defaultProps = {
  rgbString: 'rgba(255, 255, 255, 0)',
  label: '',
  hex: '#000000',
};

export default MathHeaderCol;
