import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MathCol from './MathCol';

module.exports = React.createClass({
	getDefaultProps: function () {
		return {
			type: 'RGB',
			flags: [1, 1, 1],
			labels: ['R', 'G', 'B'],
			cols: []
		};
	},
	render: function () {
		const $this = this;
		let on = [];
		let off = [];
		this.props.flags.forEach(function (val, index) {
			if (val) {
				on.push($this.props.type.substr(index, 1));
			} else {
				off.push($this.props.type.substr(index, 1));
			}
		});
		on = on.join(',');
		off = off.join(',');
		return (
			<Row>
				<Col md={4} sm={6}>
					<h3 className="type-label">
						{this.props.labels.map(function (label, i) {
							return (<span key={i} className={$this.props.flags[i] ? 'on' : 'off'}>{label}</span>);
						})}
					</h3>
				</Col>
				<Col md={8} sm={6}>
					<Row>
						{this.props.cols.map(function (col, i) {
							return (<MathCol
								key={col.fnName + i}
								type={$this.props.type}
								flags={$this.props.flags}
								on={on}
								off={off}
								fnName={col.fnName}
								hex={col.hex}
							/>);
						})}
					</Row>
				</Col>
			</Row>
		);
	}
});
