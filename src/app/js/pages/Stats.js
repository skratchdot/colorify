import colorStats from 'color-stats';
import onecolor from 'onecolor';
import getPath from 'object-path-get';
import { History } from 'react-router';
import React from 'react';
import { Row, Col, Button, Label, Glyphicon } from 'react-bootstrap';
import Page from '../Page';
import Rect from '../colors/Rect';
import Native from '../colors/Native';
import Circle from '../colors/Circle';
import SchemeButtons from '../SchemeButtons';
import StatsDisplay from '../StatsDisplay';
import StatsJsonPopup from '../StatsJsonPopup';
import Tiles from '../Tiles';

const format = function (value, min, max, precision) {
  return parseFloat(((value * max) + min).toFixed(precision));
};

export default React.createClass({
  mixins: [History],
  getInitialState: function () {
    const searchText = getPath(this.props.params, 'color', '');
    const stats = colorStats(searchText);
    const color = onecolor(stats.lib.onecolor.cssa);
    return {
      searchText: searchText,
      stats: stats,
      color: color,
      hoverColors: [],
      selectedScheme: ''
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
    let colorString = nextState.color.hex().replace('#', '');
    if (nextState.color.alpha() < 1) {
      colorString = nextState.color.cssa();
    }
    // TODO: add selectedScheme query params
    this.history.replaceState(null, `/colorify/stats/${encodeURIComponent(colorString)}`);
  },
  handleSearch: function (e) {
    const searchText = e.target.value;
    const stats = colorStats(searchText);
    const color = onecolor(stats.lib.onecolor.cssa);
    this.setState({
      searchText: searchText,
      stats: stats,
      color: color
    });
  },
  handleColorChange: function (color) {
    const searchText = color.cssa();
    const stats = colorStats(searchText);
    color = onecolor(color);
    this.setState({
      searchText: searchText,
      stats: stats,
      color: color
    });
  },
  handleRandomClick: function (rgbOnly) {
    return function () {
      const stats = colorStats.random(null, rgbOnly);
      const searchText = stats.lib.onecolor.cssa;
      const color = onecolor(searchText);
      this.setState({
        searchText: searchText,
        stats: stats,
        color: color
      });
    }.bind(this);
  },
  handleSchemeChange: function (scheme) {
    this.setState({selectedScheme: scheme});
  },
  render: function () {
    let schemeColors = [this.state.stats.hex];
    if (Object.prototype.hasOwnProperty.call(this.state.stats.schemes, this.state.selectedScheme)) {
      schemeColors = this.state.stats.schemes[this.state.selectedScheme];
    }
    return (
      <Page pageName="Stats">
        <Row>
          <Col md={5}>
            <div className="well">
              <Row>
                <Col md={8} xs={8}>
                  <h3 className="pull-left">
										Stats
										&nbsp;
                    <small>{this.state.stats.hex}</small>
                  </h3>
                  <small className="pull-left" style={{marginTop:'5px', marginLeft:'10px'}}>
                    <Label bsStyle={this.state.stats.parseSuccessful ? 'success' : 'danger'}>
											parsed
                    </Label>
                  </small>
                </Col>
                <Col md={4} xs={4} className="text-right">
                  <StatsJsonPopup stats={this.state.stats} />
                </Col>
              </Row>
              <div className="spacer"></div>
              <Row>
                <Col md={12}>
                  <input
                    type="search"
                    value={this.state.searchText}
                    placeholder="Search for a color..."
                    className="form-control"
                    onChange={this.handleSearch}
                  />
                </Col>
              </Row>
              <div className="spacer"></div>
              <Row>
                <Col md={4} xs={4}>
                  <Native
                    color={this.state.color}
                    style={{cursor:'pointer'}}
                    onColorChange={this.handleColorChange}
                    className="form-control"
                  />
                </Col>
                <Col md={4} xs={4}>
                  <Button
                    onClick={this.handleRandomClick(false)}
                    className="btn btn-primary form-control">
										RGBA
										&nbsp;
                    <Glyphicon glyph="random" />
                  </Button>
                </Col>
                <Col md={4} xs={4}>
                  <Button
                    onClick={this.handleRandomClick(true)}
                    className="btn btn-primary form-control">
										RGB
										&nbsp;
                    <Glyphicon glyph="random" />
                  </Button>
                </Col>
              </Row>
              <div className="spacer"></div>
              <StatsDisplay stats={this.state.stats} onColorChange={this.handleColorChange} />
              <br />
            </div>
          </Col>
          <Col md={3} className="text-center">
            <div className="well">
              <Row>
                <Col md={12} xs={12}>
                  <h4 className="pull-left">hue</h4>
                  <h5 className="pull-right"><small>{format(this.state.color.hsl()._hue, 0, 360, 2)}&deg;</small></h5>
                </Col>
              </Row>
              <Rect onColorChange={this.handleColorChange} color={this.state.color} type="h" />
              <Row>
                <Col md={12} xs={12}>
                  <h4 className="pull-left">saturation</h4>
                  <h5 className="pull-right"><small>{format(this.state.color.hsl()._saturation, 0, 100, 2)}%</small></h5>
                </Col>
              </Row>
              <Rect onColorChange={this.handleColorChange} color={this.state.color} type="s" />
              <Row>
                <Col md={12} xs={12}>
                  <h4 className="pull-left">luminance <span style={{fontSize:'0.6em'}}>(lightness)</span></h4>
                  <h5 className="pull-right"><small>{format(this.state.color.hsl()._lightness, 0, 100, 2)}%</small></h5>
                </Col>
              </Row>
              <Rect onColorChange={this.handleColorChange} color={this.state.color} type="l" />

              <hr />
              <Row>
                <Col md={12} xs={12}>
                  <h4 className="pull-left">red</h4>
                  <h5 className="pull-right"><small>{format(this.state.color.red(), 0, 255, 0)}</small></h5>
                </Col>
              </Row>
              <Rect onColorChange={this.handleColorChange} color={this.state.color} type="r" />
              <Row>
                <Col md={12} xs={12}>
                  <h4 className="pull-left">green</h4>
                  <h5 className="pull-right"><small>{format(this.state.color.green(), 0, 255, 0)}</small></h5>
                </Col>
              </Row>
              <Rect onColorChange={this.handleColorChange} color={this.state.color} type="g" />
              <Row>
                <Col md={12} xs={12}>
                  <h4 className="pull-left">blue</h4>
                  <h5 className="pull-right"><small>{format(this.state.color.blue(), 0, 255, 0)}</small></h5>
                </Col>
              </Row>
              <Rect onColorChange={this.handleColorChange} color={this.state.color} type="b" />

              <hr />
              <Row>
                <Col md={12} xs={12}>
                  <h4 className="pull-left">alpha</h4>
                  <h5 className="pull-right"><small>{format(this.state.color.alpha(), 0, 1, 3)}</small></h5>
                </Col>
              </Row>
              <Rect onColorChange={this.handleColorChange} color={this.state.color} type="a" />
              <br />
            </div>
          </Col>
          <Col md={4} className="text-center">
            <Circle
              color={this.state.color}
              hoverColors={this.state.hoverColors}
              stats={this.state.stats}
              selectedScheme={this.state.selectedScheme}
              onColorChange={this.handleColorChange}
            />
            <div className="well text-center" style={{minHeight:'340px'}}>
              <h4>Color Schemes</h4>
              <br />
              <SchemeButtons
                stats={this.state.stats}
                selectedScheme={this.state.selectedScheme}
                onSchemeChange={this.handleSchemeChange}
              />
              <br />
              <Tiles alpha={this.state.color.alpha()} scheme={schemeColors} onColorChange={this.handleColorChange} />
            </div>
          </Col>
        </Row>
      </Page>
    );
  }
});
