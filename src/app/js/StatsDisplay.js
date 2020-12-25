import React, { Component } from 'react';
import ColorSpaces from './ColorSpaces';
import Tiles from './Tiles';
import { friendlyName } from './helpers.js';
import throttle from 'lodash.throttle';
const throttleTime = 50;

class StatsDisplay extends Component {
  constructor(props) {
    super(props);
    const $this = this;
    this.state = {
      throttledUpdate: throttle(
        function () {
          $this.forceUpdate();
        },
        throttleTime,
        { leading: false }
      ),
    };
  }
  shouldComponentUpdate() {
    setTimeout(this.state.throttledUpdate, 0); // setting timeout of 0 is important!
    return false;
  }
  buildSchemes = () => {
    const schemes = [];
    let scheme;
    for (const schemeName in this.props.stats.schemes) {
      if (
        Object.prototype.hasOwnProperty.call(
          this.props.stats.schemes,
          schemeName
        )
      ) {
        scheme = this.props.stats.schemes[schemeName];
        // add to scheme list
        schemes.push(
          <h5 key={`name-${schemeName}`}>{friendlyName(schemeName)}</h5>
        );
        schemes.push(
          <Tiles
            key={`scheme-${schemeName}`}
            alpha={this.props.stats.alpha}
            scheme={scheme}
            onColorChange={this.props.onColorChange}
          />
        );
      }
    }
    return schemes;
  }
  render() {
    const schemes = this.buildSchemes();
    return (
      <div className="stat-display">
        <h3 className="page-header">Color Spaces</h3>
        <ColorSpaces stats={this.props.stats} />
        <h3 className="page-header">Websafe / Websmart</h3>
        <Tiles
          alpha={this.props.stats.alpha}
          scheme={[this.props.stats.websafe, this.props.stats.websmart]}
          onColorChange={this.props.onColorChange}
        />
        <h3 className="page-header">Tints</h3>
        <Tiles
          alpha={this.props.stats.alpha}
          scheme={this.props.stats.tints}
          onColorChange={this.props.onColorChange}
        />
        <h3 className="page-header">Tones</h3>
        <Tiles
          alpha={this.props.stats.alpha}
          scheme={this.props.stats.tones}
          onColorChange={this.props.onColorChange}
        />
        <h3 className="page-header">Shades</h3>
        <Tiles
          alpha={this.props.stats.alpha}
          scheme={this.props.stats.shades}
          onColorChange={this.props.onColorChange}
        />
        <h3 className="page-header">Color Schemes</h3>
        {schemes}
        <br />
        <br />
      </div>
    );
  }
}

export default StatsDisplay;
