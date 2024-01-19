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

	const [likedStates, setLikedStates] = useState(Array(4).fill(true));

	const handleLikeClick = (index) => {
		const newLikedStates = [...likedStates];
		newLikedStates[index] = !newLikedStates[index];
		setLikedStates(newLikedStates);
	};
	return (
		<Row>
			<Col md={10}>
				<div id={id}>
					<h2>{title}</h2>
					<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
						{singleData &&
							singleData.data.slice(0, 4).map((artist, index) => {
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
											<p>
												{artist.artist.name}{" "}
												{likedStates[index] ? (
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														fill="currentColor"
														className="bi bi-heart"
														viewBox="0 0 16 16"
														onClick={() => {
															handleLikeClick(index);
														}}
													>
														<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
													</svg>
												) : (
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														fill="currentColor"
														class="bi bi-heart-fill"
														viewBox="0 0 16 16"
														onClick={() => {
															handleLikeClick(index);
														}}
													>
														<path
															fill-rule="evenodd"
															d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
														/>
													</svg>
												)}
											</p>
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
