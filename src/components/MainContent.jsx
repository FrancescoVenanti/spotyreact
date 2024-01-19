// MainContent.js
import React from "react";
import MainLinks from "./MainLinks";
import Section from "./Section";
import { Col } from "react-bootstrap";

function MainContent() {
	return (
		<Col sm={12} md={8} className="offset-md-3 mainPage">
			<MainLinks />
			<Section title="Search Results" id="searchResults" />
			<Section title="Rock Classics" id="rock" />
			<Section title="Pop Culture" id="pop" />
			<Section title="#HipHop" id="hiphop" />
		</Col>
	);
}

export default MainContent;
