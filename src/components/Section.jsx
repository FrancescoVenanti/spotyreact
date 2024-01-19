// Section.js
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { showResults } from "../redux/actions/actions";
import store from "../redux/store/store";
/* import { fetchData } from "../redux";  */

function Section({ title, id, search }) {
	const dispatch = useDispatch();
	/*
	const data = useSelector((state) => state.data);
	const loading = useSelector((state) => state.loading);
	const error = useSelector((state) => state.error); */

	const [singleData, setSingleData] = useState(null);

	const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

	const fetchArtist = async () => {
		try {
			const response = await fetch(url + search); //artist
			const dataArtist = await response.json();
			setSingleData(dataArtist);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		/* dispatch(fetchData(search));
		setSingleData(data); */

		fetchArtist();
	}, []);
	return (
		<Row>
			<Col md={10}>
				<div id={id}>
					<h2>{title}</h2>
					<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
						{singleData &&
							singleData.data.slice(0, 4).map((artist) => {
								return (
									<div
										key={artist.id}
										className="col text-center"
										onClick={() => {
											console.log(store.getState());
											dispatch(
												showResults(artist.album.cover_medium, artist.artist.name, artist.title, artist.preview)
											);
											console.log(store.getState());
										}}
									>
										<div role="button">
											<img className="img-fluid" src={artist.album.cover_medium} alt="track" />
											<p>{artist.title}</p>
											<p>{artist.artist.name}</p>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</Col>
		</Row>
	);
}

export default Section;
