import React from 'react';
import { Button, OverlayMixin, Modal } from 'react-bootstrap';

// Our custom component is managing whether the Modal is visible
module.exports = React.createClass({
	mixins: [OverlayMixin],
	getInitialState: function () {
		return {
			isModalOpen: false
		};
	},
	handleToggle: function () {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	},
	// This is called by the `OverlayMixin` when this component
	// is mounted or updated and the return value is appended to the body.
	renderOverlay: function () {
		if (!this.state.isModalOpen) {
			return <span />;
		}
		const title = `JSON Color Stats - ${this.props.stats.hex}`;
		const json = JSON.stringify(this.props.stats, null, '\t');
		const style = {height: '400px'};
		return (
			<Modal title={title} onRequestHide={this.handleToggle}>
				<div className="modal-body">
					<textarea readOnly="readonly" className="form-control" style={style}>{json}</textarea>
				</div>
				<div className="modal-footer">
					<Button onClick={this.handleToggle} bsStyle="primary">Close</Button>
				</div>
			</Modal>
		);
	},
	render: function () {
		return (
			<Button onClick={this.handleToggle} bsStyle="primary" className="btn-sm">View JSON</Button>
		);
	}
});
