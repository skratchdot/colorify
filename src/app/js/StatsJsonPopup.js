import React from 'react';
import { Button, Modal } from 'react-bootstrap';

// Our custom component is managing whether the Modal is visible
export default React.createClass({
  getInitialState: function () {
    return {
      show: false,
    };
  },
  render: function () {
    const close = () => this.setState({ show: false });
    const open = () => this.setState({ show: true });
    const title = `JSON Color Stats - ${this.props.stats.hex}`;
    const json = JSON.stringify(this.props.stats, null, '  ');
    const style = { height: '400px' };
    return (
      <div>
        <Button onClick={open} bsStyle="primary" className="btn-sm">
          View JSON
        </Button>
        <Modal show={this.state.show} onHide={close}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <textarea
              readOnly="readonly"
              className="form-control"
              style={style}
            >
              {json}
            </textarea>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close} bsStyle="primary">
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  },
});
