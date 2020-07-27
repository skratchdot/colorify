import React from 'react';
import CirclePoint from './CirclePoint';
import onecolor from 'onecolor';
const diameter = 290;
const radius = diameter / 2;

// b/c react v0.10 doesn't support all svg tags/attributes
const imagePattern = `
	<pattern x="0" y="0" height="16" width="16" id="image" patternUnits="userSpaceOnUse">
	<image x="0" y="0" height="16" width="16" xlink:href="/colorify/img/alpha-background.png"></image>
	</pattern>`;

export default React.createClass({
  componentDidMount: function() {
    document.addEventListener('mousedown', this.onMouseDown);
    document.addEventListener('mouseup', this.onMouseUp);
    document.addEventListener('mousemove', this.onMouseMove);
  },
  componentWillUnmount: function() {
    document.removeEventListener('mousedown', this.onMouseDown);
    document.removeEventListener('mouseup', this.onMouseUp);
    document.removeEventListener('mousemove', this.onMouseMove);
  },
  down: 0,
  handleChange: function(e) {
    let newColor;
    if (typeof this.props.onColorChange === 'function') {
      // http://www.engineeringtoolbox.com/converting-cartesian-polar-coordinates-d_1347.html
      const x = e.layerX - radius;
      const y = radius - e.layerY;
      let r = Math.pow(Math.pow(x, 2) + Math.pow(y, 2), 0.5);
      let theta = (Math.atan(y / x) * 360) / 2 / Math.PI;
      if (x >= 0 && y >= 0) {
        // eslint-disable-next-line
        theta = theta;
      } else if (x < 0 && y >= 0) {
        theta = 180 + theta;
      } else if (x < 0 && y < 0) {
        theta = 180 + theta;
      } else if (x > 0 && y < 0) {
        theta = 360 + theta;
      }
      if (isNaN(theta)) {
        theta = 0;
      } else {
        theta = (360 - theta) / 360;
      }
      r = r / radius;

      // now setup our new color
      newColor = this.props.color.hsl();
      newColor._hue = parseFloat(theta);
      newColor._lightness = 1 - parseFloat(r);
      newColor = onecolor(newColor);
      this.props.onColorChange(newColor);
    }
  },
  onMouseDown: function(e) {
    this.down++;
    if (e.target.id === 'color-wheel') {
      this.handleChange(e);
    }
  },
  onMouseUp: function(e) {
    this.down--;
    if (e.target.id === 'color-wheel') {
      this.handleChange(e);
    }
  },
  onMouseMove: function(e) {
    if (e.target.id === 'color-wheel' && this.down > 0) {
      this.handleChange(e);
    }
  },
  render: function() {
    let styleContainer;
    let stylePos;
    let negAlpha;
    let s;
    let schemeColors = [];
    s = Math.round(this.props.color.hsl()._saturation * 100);
    s = s === 100 ? 99 : s % 100;
    // setup style
    styleContainer = {
      position: 'relative',
      width: diameter,
      height: diameter,
      margin: '0 auto 10px'
    };
    stylePos = {
      position: 'absolute',
      width: diameter,
      height: diameter,
      top: 0,
      left: 0
    };
    negAlpha = 1 - this.props.color.alpha();
    if (this.props.stats.schemes.hasOwnProperty(this.props.selectedScheme)) {
      schemeColors = this.props.stats.schemes[this.props.selectedScheme];
    }
    return (
      <div id="color-wheel-container" style={styleContainer}>
        <img style={stylePos} src={`/colorify/img/wheels/${s}.png`} />
        <svg style={stylePos}>
          <defs dangerouslySetInnerHTML={{ __html: imagePattern }} />
          <g>
            <circle
              id="color-wheel"
              fill="url(#image)"
              style={{ opacity: negAlpha }}
              cx={radius}
              cy={radius}
              r={radius}
            />
          </g>
          <CirclePoint radius={radius} type="scheme" colors={schemeColors} />
          <CirclePoint
            radius={radius}
            type="hover"
            colors={this.props.hoverColors}
          />
          <CirclePoint
            radius={radius}
            type="selected"
            colors={[this.props.color]}
          />
        </svg>
      </div>
    );
  }
});
