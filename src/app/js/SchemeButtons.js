import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { friendlyName } from './helpers.js';

class SchemeButtons extends Component {
  handleSchemeChange = (scheme) => {
    if (typeof this.props.onSchemeChange === 'function') {
      this.props.onSchemeChange(scheme);
    }
  }
  render() {
    const buttons = [];
    const schemes = this.props.stats.schemes;
    buttons.push(
      <Button
        bsStyle="default"
        bsSize="xsmall"
        key="normal"
        className={
          Object.prototype.hasOwnProperty.call(
            this.props.stats.schemes,
            this.props.selectedScheme
          )
            ? ''
            : 'active'
        }
        data-scheme="Normal"
        onClick={this.handleSchemeChange.bind(null, 'Normal')}
      >
        Normal
      </Button>
    );
    for (const schemeName in schemes) {
      if (Object.prototype.hasOwnProperty.call(schemes, schemeName)) {
        buttons.push(
          <Button
            bsStyle="default"
            bsSize="xsmall"
            key={schemeName}
            className={this.props.selectedScheme === schemeName ? 'active' : ''}
            data-scheme={schemeName}
            onClick={this.handleSchemeChange.bind(null, schemeName)}
          >
            {friendlyName(schemeName)}
          </Button>
        );
      }
    }
    return <div id="scheme-buttons">{buttons}</div>;
  }
}

export default SchemeButtons;
