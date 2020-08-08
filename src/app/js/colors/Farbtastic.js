import React, { Component } from 'react';
import $ from '../../../lib/farbtastic-jquery';

class Farbtastic extends Component {
  constructor(props) {
    super(props);
    this.pickerRef = React.createRef();
    this.picker = null;
    this.state = {
      callbackCalledOnce: false,
    };
  }
  componentDidMount() {
    const $this = this;
    if (!$this.picker) {
      $this.picker = $.farbtastic($this.pickerRef.current, {
        width: $this.props.width,
        height: $this.props.height,
        callback: function (hex) {
          if (
            typeof $this.props.onColorChange === 'function' &&
            $this.state.callbackCalledOnce
          ) {
            $this.props.onColorChange(hex);
          } else if (!$this.state.callbackCalledOnce) {
            $this.setState({ callbackCalledOnce: true });
          }
        },
      });
      $this.picker.setColor($this.props.hex);
    }
  }
  componentDidUpdate() {
    if (this.picker && this.props.setColor) {
      this.picker.setColor(this.props.hex);
    }
  }
  componentWillUnmount() {
    this.picker = null;
  }
  render() {
    return (
      <div className="farbastic-container">
        <div ref={this.pickerRef}></div>
      </div>
    );
  }
}

Farbtastic.defaultProps = {
  width: 130,
  height: 130,
  hex: '#000000',
  setColor: true,
};

export default Farbtastic;
