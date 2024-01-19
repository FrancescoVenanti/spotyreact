// MainLinks.js
import React from "react";
import { Col, Row } from "react-bootstrap";

function MainLinks() {
	return (
		<Row>
			<Col md={9} lg={11} className="mainLinks d-none d-md-flex">
				<a href="/">TRENDING</a>
				<a href="/">PODCAST</a>
				<a href="/">MOODS AND GENRES</a>
				<a href="/">NEW RELEASES</a>
				<a href="/">DISCOVER</a>
			</Col>
		</Row>
	);
}

export default MainLinks;
