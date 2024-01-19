// Section.js
import React from "react";
import { Col, Row } from "react-bootstrap";

function Section({ title, id }) {
	return (
		<Row>
			<Col md={10}>
				<div id={id}>
					<h2>{title}</h2>
					<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
						{/* Section content goes here */}
					</div>
				</div>
			</Col>
		</Row>
	);
}

export default Section;
