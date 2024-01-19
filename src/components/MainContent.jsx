// MainContent.js
import React, { useEffect } from "react";
import MainLinks from "./MainLinks";
import Section from "./Section";
import { Col } from "react-bootstrap";
import SearchContent from "./SearchResults";
import { useSelector } from "react-redux";

function MainContent() {
	const data = useSelector((state) => state.queryReducer);
	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<Col sm={12} md={8} className="offset-md-3 mainPage pb-5">
			<MainLinks />
			{data.data.length > 1 ? <SearchContent title="Search results" /> : null}
			<Section title="Rock Classics" id="rock" search="queen" />
			<Section title="Pop Culture" id="pop" search="katy perry" />
			<Section title="#HipHop" id="hiphop" search="eminem" />
		</Col>
	);
}

export default MainContent;
