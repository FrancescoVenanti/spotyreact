// Sidebar.js
import React, { useState } from "react";
import logo from "../assets/logo/logo.png";
import { Container, Navbar, Nav, Form, FormControl, Button, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { queryResult } from "../redux/actions/actions";
import store from "../redux/store/store";

const Sidebar = () => {
	const dispatch = useDispatch();
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearchSubmit = (event) => {
		event.preventDefault();

		// Use the searchQuery to construct the URL and perform the fetch operation
		const searchUrl = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery}`;

		fetchQuery(searchUrl);
	};
	const fetchQuery = async (url) => {
		try {
			const response = await fetch(url);
			const dataQuery = await response.json();
			console.log(dataQuery);
			await dispatch(queryResult(dataQuery));
			console.log(store.getState());
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<Col xs={2}>
			<Navbar className="navbar-expand-md fixed-left justify-content-between" id="sidebar">
				<Container className="flex-column align-items-start">
					<Navbar.Brand href="/">
						<img src={logo} alt="Spotify Logo" width="131" height="40" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarNavAltMarkup" />
					<Navbar.Collapse id="navbarNavAltMarkup">
						<Nav>
							<ul>
								<li>
									<Nav.Link className="d-flex align-items-center" href="/">
										<i className="bi bi-house-door-fill"></i>&nbsp; Home
									</Nav.Link>
								</li>
								<li>
									<Nav.Link className="d-flex align-items-center" href="/">
										<i className="bi bi-book-fill"></i>&nbsp; Your Library
									</Nav.Link>
								</li>
								<li>
									<Form className="input-group mt-3" onSubmit={handleSearchSubmit}>
										<FormControl
											type="text"
											id="searchField"
											placeholder="Search"
											aria-label="Search"
											aria-describedby="basic-addon2"
											onChange={(e) => setSearchQuery(e.target.value)}
										/>
										<Button variant="outline-secondary" size="sm" type="submit">
											GO
										</Button>
									</Form>
								</li>
							</ul>
						</Nav>
					</Navbar.Collapse>
				</Container>
				<div className="nav-btn">
					<Button variant="light" className="rounded-pill signup-btn" type="button">
						Sign Up
					</Button>
					<Button variant="dark" className="rounded-pill login-btn" type="button">
						Login
					</Button>
					<div>
						<a href="/">Cookie Policy</a> | <a href="/"> Privacy</a>
					</div>
				</div>
			</Navbar>
		</Col>
	);
};

export default Sidebar;
