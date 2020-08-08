import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { History } from 'react-router';
import onecolor from 'onecolor';
import getPath from 'object-path-get';
import Page from '../Page';
import Farbtastic from '../colors/Farbtastic';
import MixerGradient from '../colors/MixerGradient';
import createReactClass from 'create-react-class';

const getRgb = function (color) {
  return onecolor(color).css().replace(/[^0-9,]/gi, '').split(',').map(function (num) {
    return parseInt(num, 10);
  });
};

export default createReactClass({
  mixins: [History],
  getInitialState: function () {
    let color1;
    let color2;
    color1 = onecolor(getPath(this.props.params, 'color1', '428bca'));
    color2 = onecolor(getPath(this.props.params, 'color2', 'd9534f'));
    return {
      hex1: color1.hex().toLowerCase(),
      hex2: color2.hex().toLowerCase(),
      farbtasticSetColor: true
    };
  },
  shouldComponentUpdate: function (nextProps, nextState) {
    if (this.state === nextState) {
      return false;
    } else {
      return true;
    }
  },
  componentWillUpdate: function (nextProps, nextState) {
    const h1 = encodeURIComponent(nextState.hex1.replace('#', ''));
    const h2 = encodeURIComponent(nextState.hex2.replace('#', ''));
    this.history.replaceState(null, `/colorify/mixer/${h1}/${h2}`);
  },
  setHex: function ($state) {
    const $this = this;
    ['hex1', 'hex2', 'farbtasticSetColor'].forEach(function (key) {
      if (!Object.prototype.hasOwnProperty.call($state, key)) {
        $state[key] = $this.state[key];
      }
    });
    $this.setState($state);
  },
  getColorChangeHandler: function (index, isColorInput) {
    const $this = this;
    return function (e) {
      const newState = {
        farbtasticSetColor: isColorInput
      };
      const key = `hex${index}`;
      newState[key] = isColorInput ? e.target.value : e;
      if (newState[key] !== $this.state[key]) {
        $this.setHex(newState);
      }
    };
  },
  randomHandler: function (indices, channels) {
    let hexKey;
    let color;
    const newState = {
      farbtasticSetColor: true
    };
    if (!Array.isArray(channels)) {
      channels = [];
    }
    for (let i = 0; i < indices.length; i++) {
      hexKey = `hex${indices[i]}`;
      color = onecolor(this.state[hexKey]);
      newState[hexKey] = onecolor([
        'RGB',
        channels[0] === 0 ? color.red() : Math.random(),
        channels[1] === 0 ? color.green() : Math.random(),
        channels[2] === 0 ? color.blue() : Math.random()
      ]).hex();
    }
    this.setHex(newState);
  },
  swapHandler: function () {
    this.setHex({
      hex1: this.state.hex2,
      hex2: this.state.hex1,
      farbtasticSetColor: true
    });
  },
  handleHexChanges: function (hex1, hex2) {
    this.setState({
      hex1: hex1.toLowerCase(),
      hex2: hex2.toLowerCase(),
      farbtasticSetColor: true
    });
  },
  render: function () {
    const hex1 = this.state.hex1;
    const hex2 = this.state.hex2;
    const rgb1 = getRgb(hex1);
    const rgb2 = getRgb(hex2);
    return (
      <Page pageName="Mixer">
        <Row>
          <Col md={2} className="color-column">
            <Farbtastic
              hex={hex1}
              setColor={this.state.farbtasticSetColor}
              onColorChange={this.getColorChangeHandler(1, false)}
            />
            <input
              type="color"
              value={hex1}
              onChange={this.getColorChangeHandler(1, true)}
              onInput={this.getColorChangeHandler(1, true)}
            />
            <h6 className="hex-display">{hex1}</h6>
            <Button bsStyle="primary" onClick={this.randomHandler.bind(null, [1])}>Randomize 1 (RGB)</Button>
            <Button bsStyle="primary" onClick={this.randomHandler.bind(null, [1, 2])}>Randomize 1 & 2 (RGB)</Button>
            <Button bsStyle="primary" onClick={this.randomHandler.bind(null, [1], [1, 0, 0])}>Randomize 1 (RED)</Button>
            <Button bsStyle="primary" onClick={this.randomHandler.bind(null, [1], [0, 1, 0])}>Randomize 1 (BLUE)</Button>
            <Button bsStyle="primary" onClick={this.randomHandler.bind(null, [1], [0, 0, 1])}>Randomize 1 (GREEN)</Button>
          </Col>
          <Col md={8}>
            <MixerGradient id="0" rgb1={rgb1} rgb2={rgb2} index={null} isEditor={false} />
            <MixerGradient id="1" rgb1={rgb1} rgb2={rgb2} index={0} handleHexChanges={this.handleHexChanges} />
            <MixerGradient id="2" rgb1={rgb1} rgb2={rgb2} index={1} handleHexChanges={this.handleHexChanges} />
            <MixerGradient id="3" rgb1={rgb1} rgb2={rgb2} index={2} handleHexChanges={this.handleHexChanges} />
          </Col>
          <Col md={2} className="color-column">
            <Farbtastic
              hex={hex2}
              setColor={this.state.farbtasticSetColor}
              onColorChange={this.getColorChangeHandler(2, false)}
            />
            <input
              type="color"
              value={hex2}
              onChange={this.getColorChangeHandler(2, true)}
              onInput={this.getColorChangeHandler(2, true)}
            />
            <h6 className="hex-display">{hex2}</h6>
            <Button bsStyle="primary" onClick={this.randomHandler.bind(null, [2])}>Randomize 2 (RGB)</Button>
            <Button bsStyle="primary" onClick={this.swapHandler}>Swap 1 & 2</Button>
            <Button bsStyle="primary" onClick={this.randomHandler.bind(null, [2], [1, 0, 0])}>Randomize 2 (RED)</Button>
            <Button bsStyle="primary" onClick={this.randomHandler.bind(null, [2], [0, 1, 0])}>Randomize 2 (BLUE)</Button>
            <Button bsStyle="primary" onClick={this.randomHandler.bind(null, [2], [0, 0, 1])}>Randomize 2 (GREEN)</Button>
          </Col>
        </Row>
      </Page>
    );
  }
});
