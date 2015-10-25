import React from 'react';
import { Col, Table, Popover } from 'react-bootstrap';
import { History } from 'react-router';

module.exports = React.createClass({
	mixins: [History],
	getDefaultProps: function () {
		return {
			type: '',
			flags: [1, 1, 1],
			on: '',
			off: '',
			fnName: '',
			hex: '#000000'
		};
	},
	getInitialState: function () {
		return {
			hover: false
		};
	},
	handleClick: function () {
		this.history.pushState(null, `/colorify/stats/${this.props.hex.replace('#', '')}`);
	},
	handleHover: function (val) {
		this.setState({hover: val});
	},
	render: function () {
		let tooltip;
		// || this.props.hex === '#967897'
		if (this.state.hover  || this.props.hex === '#967897') {
			tooltip = (
				<Popover
					title={this.props.hex}
					placement="top"
					positionLeft={-92} positionTop={-195}>
					<Table style={{width: 218, height: 110}}>
						<tbody>
							<tr>
								<th style={{textAlign: 'right'}}>Action:</th>
								<td>{this.props.fnName}</td>
							</tr>
							<tr>
								<th style={{textAlign: 'right'}}>Change:</th>
								<td>{this.props.on}</td>
							</tr>
							<tr>
								<th style={{textAlign: 'right'}}>Don't Change:</th>
								<td>{this.props.off}</td>
							</tr>
						</tbody>
					</Table>
				</Popover>
			);
		}
		return (
			<Col xs={1}>
				<div
					onClick={this.handleClick}
					onMouseEnter={this.handleHover.bind(null, true)}
					onMouseLeave={this.handleHover.bind(null, false)}
					style={{
						background: this.props.hex,
						width: '25px',
						height: '25px',
						//boxShadow: '0px 0px 2px black',
						border: '1px solid black',
						cursor: 'pointer',
						margin: '0 auto'
				}}>
					{tooltip}&nbsp;
				</div>
			</Col>
		);
	}
});
