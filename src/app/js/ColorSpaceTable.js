import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import getPath from 'object-path-get';

class ColorSpaceTable extends Component {
  render() {
    return (
      <div className="math-table-container">
        <Table className="math-table">
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Color 1</th>
              <th>Color 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{this.props.title.substr(0, 1)}</th>
              <td>{getPath(this.props, 'values.0.1')}</td>
              <td>{getPath(this.props, 'values.1.1')}</td>
            </tr>
            <tr>
              <th>{this.props.title.substr(1, 1)}</th>
              <td>{getPath(this.props, 'values.0.2')}</td>
              <td>{getPath(this.props, 'values.1.2')}</td>
            </tr>
            <tr>
              <th>{this.props.title.substr(2, 1)}</th>
              <td>{getPath(this.props, 'values.0.3')}</td>
              <td>{getPath(this.props, 'values.1.3')}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

ColorSpaceTable.defaultProps = {
  title: 'RGB',
  values: [],
};

export default ColorSpaceTable;
