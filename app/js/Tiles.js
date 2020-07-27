import React from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import onecolor from 'onecolor';

export default React.createClass({
  handleColorChange: function(e) {
    if (this.props.onColorChange) {
      this.props.onColorChange(onecolor(e.target.style.backgroundColor));
    }
  },
  render: function() {
    const tiles = [];
    for (let i = 0; i < this.props.scheme.length; i++) {
      let hex;
      let color;
      hex = color = this.props.scheme[i];
      if (this.props.alpha < 1) {
        color = onecolor(hex)
          .alpha(this.props.alpha)
          .cssa();
      }
      const style = {
        width: `${100 / this.props.scheme.length}%`,
        backgroundColor: color
      };
      const tooltip = (
        <Tooltip>
          <strong>{hex}</strong>
        </Tooltip>
      );
      tiles.push(
        <OverlayTrigger key={i} placement="top" overlay={tooltip}>
          <div
            key={i}
            style={style}
            className="tile"
            onClick={this.handleColorChange}
          >
            &nbsp;
          </div>
        </OverlayTrigger>
      );
    }
    return <div className="tile-container">{tiles}</div>;
  }
});
