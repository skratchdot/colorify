import React from 'react';
import { Button } from 'react-bootstrap';
import { friendlyName } from './helpers.js';

export default React.createClass({
  handleSchemeChange: function(scheme) {
    if (typeof this.props.onSchemeChange === 'function') {
      this.props.onSchemeChange(scheme);
    }
  },
  render: function() {
    const buttons = [];
    const schemes = this.props.stats.schemes;
    buttons.push(
      <Button
        bsStyle="default"
        bsSize="xsmall"
        key="normal"
        className={
          this.props.stats.schemes.hasOwnProperty(this.props.selectedScheme)
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
      if (schemes.hasOwnProperty(schemeName)) {
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
});
