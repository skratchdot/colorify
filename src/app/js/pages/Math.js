import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import onecolor from 'onecolor';
import getPath from 'object-path-get';
import * as colorify from '../../../lib/colorify';
import LastInWorker from '../workers/last-in-worker.js';
import ColorSpaceTable from '../ColorSpaceTable';
import MathRow from '../MathRow';
import MathHeaderCol from '../MathHeaderCol';
import Page from '../Page';
import Farbtastic from '../colors/Farbtastic';
import { withRouter } from 'react-router-dom';

const verticalText = function (text) {
  const nbsp = <span>&nbsp;</span>;
  return text.split('').map(function (item, i) {
    return (
      <div key={i} style={{ lineHeight: '1.1em' }} className="math-header-text">
        {item === ' ' ? nbsp : item.toUpperCase()}
      </div>
    );
  });
};
const combinationFunctionNames = colorify.getCombinationFunctionNames();
const combinationFunctionNamesNormalized = combinationFunctionNames.map(
  function (name) {
    const split = name.split('');
    while (split.length < 10) {
      split.unshift(' ');
    }
    return split.join('');
  }
);

class MathComp extends Component {
  constructor(props) {
    super(props);
    let color1;
    let color2;
    color1 = onecolor(getPath(this.props, 'match.params.color1', '428bca'));
    color2 = onecolor(getPath(this.props, 'match.params.color2', 'd9534f'));
    this.state = {
      hex1: color1.hex().toLowerCase(),
      hex2: color2.hex().toLowerCase(),
      farbtasticSetColor: true,
    };
  }
  componentWillMount() {
    const $this = this;
    if (!$this.worker) {
      // this line requires webpack with `worker-loader`
      $this.worker = new LastInWorker(
        '/colorify/workers/worker-math.bundle.js',
        function (data) {
          $this.setState(data);
        }
      );
    }
  }
  componentDidMount() {
    this.worker.exec(
      this.state.hex1,
      this.state.hex2,
      this.state.farbtasticSetColor
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state === nextState) {
      return false;
    } else {
      return true;
    }
  }
  componentWillUpdate(nextProps, nextState) {
    const h1 = encodeURIComponent(nextState.hex1.replace('#', ''));
    const h2 = encodeURIComponent(nextState.hex2.replace('#', ''));
    this.props.history.replace(`/colorify/math/${h1}/${h2}`);
  }
  componentWillUnmount() {
    if (this.worker) {
      this.worker.terminate();
      this.worker = null;
    }
  }
  setHex = ($state) => {
    const $this = this;
    ['hex1', 'hex2', 'farbtasticSetColor'].forEach(function (key) {
      if (!Object.prototype.hasOwnProperty.call($state, key)) {
        $state[key] = $this.state[key];
      }
    });
    $this.worker.exec($state.hex1, $state.hex2, $state.farbtasticSetColor);
  };
  getColorChangeHandler = (index, isColorInput) => (e) => {
    const newState = {
      farbtasticSetColor: isColorInput,
    };
    const key = `hex${index}`;
    newState[key] = isColorInput ? e.target.value : e;
    if (newState[key] !== this.state[key]) {
      this.setHex(newState);
    }
  };
  getRandomHandler = (indices) => () => {
    const newState = {
      farbtasticSetColor: true,
    };
    for (let i = 0; i < indices.length; i++) {
      newState[`hex${indices[i]}`] = onecolor([
        'RGB',
        Math.random(),
        Math.random(),
        Math.random(),
      ]).hex();
    }
    this.setHex(newState);
  };
  swapHandler = () => {
    this.setHex({
      hex1: this.state.hex2,
      hex2: this.state.hex1,
      farbtasticSetColor: true,
    });
  };
  render() {
    return (
      <Page pageName="Math">
        <Row>
          <Col md={4} sm={6} className="color-controls">
            <Row>
              <Col xs={6}>
                <Farbtastic
                  hex={this.state.hex1}
                  setColor={this.state.farbtasticSetColor}
                  onColorChange={this.getColorChangeHandler(1, false)}
                />
                <input
                  type="color"
                  value={this.state.hex1}
                  onChange={this.getColorChangeHandler(1, true)}
                  onInput={this.getColorChangeHandler(1, true)}
                />
                <Button
                  bsStyle="primary"
                  onClick={this.getRandomHandler([1])}
                >
                  Randomize 1
                </Button>
              </Col>
              <Col xs={6}>
                <Farbtastic
                  hex={this.state.hex2}
                  setColor={this.state.farbtasticSetColor}
                  onColorChange={this.getColorChangeHandler(2, false)}
                />
                <input
                  type="color"
                  value={this.state.hex2}
                  onChange={this.getColorChangeHandler(2, true)}
                  onInput={this.getColorChangeHandler(2, true)}
                />
                <Button
                  bsStyle="primary"
                  onClick={this.getRandomHandler([2])}
                >
                  Randomize 2
                </Button>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Button
                  bsStyle="primary"
                  onClick={this.getRandomHandler([1, 2])}
                >
                  Randomize Both
                </Button>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Button bsStyle="primary" onClick={this.swapHandler}>
                  Swap 1 &amp; 2
                </Button>
              </Col>
            </Row>
          </Col>
          <Col md={8} sm={6}>
            <Row>
              <MathHeaderCol
                label="Color 1:"
                hex={this.state.hex1}
                rgbString={getPath(this.state, 'rgbString1')}
              />
              <MathHeaderCol
                label="Color 2:"
                hex={this.state.hex2}
                rgbString={getPath(this.state, 'rgbString2')}
              />
            </Row>
            <Row className="math-header-row">
              {combinationFunctionNamesNormalized.map(function (name, i) {
                return (
                  <Col key={i} xs={1}>
                    {verticalText(name)}
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
        <hr className="type-splitter" />
        <ColorSpaceTable
          title="RGB"
          values={getPath(this.state, 'valuesRGB')}
        />
        <div>
          {getPath(this.state, 'RGB', []).map(function (row, i) {
            return (
              <MathRow
                key={`rgbRow-${i}`}
                flags={row.flags}
                labels={row.labels}
                type={row.type}
                cols={row.cols}
              />
            );
          })}
        </div>
        <hr className="type-splitter" />
        <ColorSpaceTable
          title="HSL"
          values={getPath(this.state, 'valuesHSL')}
        />
        <div>
          {getPath(this.state, 'HSL', []).map(function (row, i) {
            return (
              <MathRow
                key={`hslRow-${i}`}
                flags={row.flags}
                labels={row.labels}
                type={row.type}
                cols={row.cols}
              />
            );
          })}
        </div>
        <br />
      </Page>
    );
  }
}

export default withRouter(MathComp);
