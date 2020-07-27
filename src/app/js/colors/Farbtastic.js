import React from 'react';
import $ from '../../../lib/farbtastic-jquery';

export default React.createClass({
  getDefaultProps: function () {
    return {
      width: 130,
      height: 130,
      hex: '#000000',
      setColor: true
    };
  },
  getInitialState: function () {
    return {
      callbackCalledOnce: false
    };
  },
  componentDidMount: function () {
    const $this = this;
    if (!$this.picker) {
      $this.picker = $.farbtastic($this.refs.picker, {
        width: $this.props.width,
        height: $this.props.height,
        callback: function (hex) {
          if (typeof $this.props.onColorChange === 'function' &&
							$this.state.callbackCalledOnce) {
            $this.props.onColorChange(hex);
          } else if (!$this.state.callbackCalledOnce) {
            $this.setState({callbackCalledOnce: true});
          }
        }
      });
      $this.picker.setColor($this.props.hex);
    }
  },
  componentDidUpdate: function () {
    if (this.picker && this.props.setColor) {
      this.picker.setColor(this.props.hex);
    }
  },
  componentWillUnmount: function () {
    this.picker = null;
  },
  picker: null,
  render: function () {
    return (
      <div className="farbastic-container">
        <div ref="picker"></div>
      </div>
    );
  }
});
