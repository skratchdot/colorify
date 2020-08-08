import React, { Component } from 'react';
import onecolor from 'onecolor';

class CirclePoint extends Component {
  render() {
    const className = this.props.type;
    const points = [];
    let size = 3;
    if (className === 'selected') {
      size = 4;
    }
    for (let i = 0; i < this.props.colors.length; i++) {
      const offset = this.props.radius;
      const color = onecolor(this.props.colors[i]);
      const hue = color.hsl()._hue * 360;
      const lightness = (1 - color.hsl()._lightness) * offset;
      // add circle
      const cx = lightness * Math.cos((hue * 2 * Math.PI) / 360) + offset;
      const cy = lightness * Math.sin((hue * 2 * Math.PI) / 360) + offset;
      points.push(
        <circle
          key={`circle${i}`}
          className={className}
          cx={cx}
          cy={cy}
          r={size}
        />
      );
      // add line
      const x2 =
        (lightness - size) * Math.cos((hue * 2 * Math.PI) / 360) + offset;
      const y2 =
        (lightness - size) * Math.sin((hue * 2 * Math.PI) / 360) + offset;
      points.push(
        <line
          key={`line${i}`}
          className={className}
          x1={offset}
          y1={offset}
          x2={x2}
          y2={y2}
        />
      );
    }
    return <g>{points}</g>;
  }
}

export default CirclePoint;
