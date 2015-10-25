import React from 'react';
import { Row, Col, Well } from 'react-bootstrap';
import Page from '../Page';
import readme from '../Readme';

module.exports = React.createClass({
	render: function () {
		return (
			<Page pageName="About">
				<Row>
					<Col md={8}>
						<Well dangerouslySetInnerHTML={{__html: readme.main}} />
					</Col>
					<Col md={4}>
						<Well dangerouslySetInnerHTML={{__html: readme.links}} />
					</Col>
				</Row>
			</Page>
		);
	}
});
