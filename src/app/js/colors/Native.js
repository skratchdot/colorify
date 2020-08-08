import React, { Component } from 'react';
import onecolor from 'onecolor';

class Native extends Component {
  onColorChange = (e) => {
    if (this.props.onColorChange) {
      const color = onecolor(e.target.value);
      this.props.onColorChange(color);
    }
  }
  render() {
    let color = onecolor(this.props.color);
    if (!color) {
      color = onecolor('#000000');
    }
    return (
      <input
        {...this.props}
        type="color"
        value={color.hex()}
        onChange={this.onColorChange}
        onInput={this.onColorChange}
      />
    );
  }
}

export default Native;
