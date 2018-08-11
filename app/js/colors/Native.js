import React from 'react';
import onecolor from 'onecolor';

module.exports = React.createClass({
  onColorChange: function (e) {
    if (this.props.onColorChange) {
      const color = onecolor(e.target.value);
      this.props.onColorChange(color);
    }
  },
  render: function () {
    let color = onecolor(this.props.color);
    if (!color) {
      color = onecolor('#000000');
    }
    return (
      <input {...this.props}
        type="color"
        value={color.hex()}
        onChange={this.onColorChange}
        onInput={this.onColorChange}
      />
    );
  }
});
