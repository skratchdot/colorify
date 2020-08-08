import React, { Component } from 'react';
import onecolor from 'onecolor';

// 0: color space, 1: property name, 2: number of gradients
const values = {
  h: ['hsl', '_hue', 360],
  s: ['hsl', '_saturation', 3],
  l: ['hsl', '_lightness', 3],
  r: ['rgb', '_red', 2],
  g: ['rgb', '_green', 2],
  b: ['rgb', '_blue', 2],
  a: ['rgb', '_alpha', 2],
};

class Rect extends Component {
  handleRange = (e) => {
    let newColor;
    const type = this.props.type;
    if (
      typeof this.props.onColorChange === 'function' &&
      typeof type === 'string' &&
      Object.prototype.hasOwnProperty.call(values, type)
    ) {
      newColor = this.props.color[values[type][0]]();
      newColor[values[type][1]] = parseFloat(e.target.value);
      newColor = onecolor(newColor);
      this.props.onColorChange(newColor);
    }
  }
  render() {
    let value = 0;
    const type = this.props.type;
    const style = {};
    let info;
    let background;
    if (
      typeof type === 'string' &&
      Object.prototype.hasOwnProperty.call(values, type)
    ) {
      info = values[type];
      value = this.props.color[info[0]]()[info[1]];
      background = [];
      if (info[0] === 'hsl') {
        for (let i = 0; i < info[2]; i++) {
          const h =
            type === 'h' ? (i / 359) * 360 : this.props.color.hsl()._hue * 360;
          const s =
            type === 's'
              ? (i / 2) * 100
              : this.props.color.hsl()._saturation * 100;
          const l =
            type === 'l'
              ? (i / 2) * 100
              : this.props.color.hsl()._lightness * 100;
          background.push(`hsla(${h},${s}%,${l}%,${this.props.color.alpha()})`);
        }
      } else {
        for (let i = 0; i < info[2]; i++) {
          const r = Math.round(
            type === 'r' ? i * 255 : this.props.color.rgb()._red * 255
          );
          const g = Math.round(
            type === 'g' ? i * 255 : this.props.color.rgb()._green * 255
          );
          const b = Math.round(
            type === 'b' ? i * 255 : this.props.color.rgb()._blue * 255
          );
          const a = type === 'a' ? i : this.props.color.alpha();
          background.push(`rgba(${r},${g},${b},${a})`);
        }
      }
      style.background = `linear-gradient(to right, ${background.join(',')})`;
    }
    return (
      <div className="color-rect">
        <div className="color-rect-alpha"></div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.001"
          value={value}
          style={style}
          onChange={this.handleRange}
          onInput={this.handleRange}
        />
      </div>
    );
  }
}

export default Rect;
