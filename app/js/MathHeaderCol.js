import React from 'react';
import { Col } from 'react-bootstrap';

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      rgbaString: 'rgba(255, 255, 255, 0)',
      label: '',
      hex: '#000000'
    };
  },
  render: function() {
    const start = this.props.rgbaString;
    const end = this.props.rgbaString.replace('1)', '0.3)');
    return (
      <Col xs={6}>
        <div
          style={{
            background: `linear-gradient(to top, ${start}, ${end})`,
            borderTopLeftRadius: '100px',
            borderTopRightRadius: '100px',
            height: '20px'
          }}
        >
          &nbsp;
        </div>
        <h3
          style={{
            textAlign: 'center',
            border: `13px solid ${this.props.hex}`,
            margin: 0
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
            marginBottom: '10px'
          }}
        >
          &nbsp;
        </div>
      </Col>
    );
  }
});
