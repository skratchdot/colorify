import React, { Component } from 'react';
import onecolor from 'onecolor';

const getRgbCss = function (rgb, value, index) {
  return `rgb(
		${index === 0 ? value : rgb[0]},
		${index === 1 ? value : rgb[1]},
		${index === 2 ? value : rgb[2]})`;
};

class MixerGradient extends Component {
  constructor(props) {
    super(props);
    const yPositions = this.getYPositions(this.props);
    this.svgPoint = null;
    this.state = {
      x1: 0,
      x2: 255,
      y1: yPositions.y1,
      y2: yPositions.y2,
      isMoving: [],
    };
  }
  componentDidMount() {
    //window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
    this.svgPoint = this.refs.svgContainer.createSVGPoint();
  }
  componentWillReceiveProps(nextProps) {
    const yPositions = this.getYPositions(nextProps);
    this.setState({
      y1: yPositions.y1,
      y2: yPositions.y2,
    });
  }
  componentWillUnmount() {
    //window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
    this.svgPoint = null;
  }
  getYPositions = (props) => {
    let y1 = 0;
    let y2 = 0;
    if (props.index >= 0 || props.index <= 2) {
      y1 = props.rgb1[props.index];
      y2 = props.rgb2[props.index];
    }
    return {
      y1: y1,
      y2: y2,
    };
  };
  handleMouseMove = (e) => {
    let loc;
    const newState = {};
    if (this.state.isMoving.length && this.svgPoint !== null) {
      this.svgPoint.x = e.clientX;
      this.svgPoint.y = e.clientY;
      loc = this.svgPoint.matrixTransform(
        this.refs.svgContainer.getScreenCTM().inverse()
      );
      this.state.isMoving.forEach(function (num) {
        newState[`y${num}`] = loc.y;
      });
      this.setState(newState);
    }
  }
  handleMouseDown = (num) => {
    this.setState({ isMoving: [num] });
  }
  handleMouseUp = () => {
    let hex1;
    let hex2;
    if (this.state.isMoving.length) {
      if (typeof this.props.handleHexChanges === 'function') {
        hex1 = onecolor(
          getRgbCss(this.props.rgb1, this.state.y1, this.props.index)
        )
          .hex()
          .toLowerCase();
        hex2 = onecolor(
          getRgbCss(this.props.rgb2, this.state.y2, this.props.index)
        )
          .hex()
          .toLowerCase();
        this.props.handleHexChanges(hex1, hex2);
      }
      this.setState({ isMoving: [] });
    }
  }
  render() {
    const $this = this;
    let id;
    const gradients = [];
    const rects = [];
    const max = $this.props.index === null ? 1 : 255;
    for (let i = 0; i < max; i++) {
      id = `mixer-gradient-${$this.props.id}-${i}`;
      gradients.push(
        <linearGradient
          id={id}
          key={`gradient-${i}`}
          x1="0%"
          y1="50%"
          x2="100%"
          y2="50%"
        >
          <stop
            offset="0%"
            stopColor={getRgbCss($this.props.rgb1, i, $this.props.index)}
          />
          <stop
            offset="100%"
            stopColor={getRgbCss($this.props.rgb2, i, $this.props.index)}
          />
        </linearGradient>
      );
      rects.push(
        <rect
          key={`rect-${i}`}
          fill={`url(#${id})`}
          width="255"
          height={256 - max}
          x="0"
          y={i}
        />
      );
    }
    return (
      <div className={`mixer-gradient${this.props.isEditor ? ' editor' : ''}`}>
        <svg
          ref="svgContainer"
          viewBox="0 0 255 255"
          preserveAspectRatio="none"
          onMouseMove={this.handleMouseMove}
        >
          <defs>{gradients}</defs>
          <g>{rects}</g>
          <g style={{ display: $this.props.index === null ? 'none' : 'block' }}>
            <line
              x1={this.state.x1}
              x2={this.state.x2}
              y1={this.state.y1}
              y2={this.state.y2}
              stroke="black"
              strokeWidth="1"
            />
            <ellipse
              cx={this.state.x1}
              cy={this.state.y1}
              rx="1"
              ry="8"
              onMouseDown={this.handleMouseDown.bind(null, 1)}
            />
            <ellipse
              cx={this.state.x2}
              cy={this.state.y2}
              rx="1"
              ry="8"
              onMouseDown={this.handleMouseDown.bind(null, 2)}
            />
          </g>
        </svg>
      </div>
    );
  }
}

MixerGradient.defaultProps = {
  rgb1: [],
  rgb2: [],
  handleHexChanges: null,
  index: null,
  isEditor: true,
};

export default MixerGradient;
