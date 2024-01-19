// Sidebar.js
import React from "react";
import logo from "../assets/logo/logo.png";
import { Container, Navbar, Nav, Form, FormControl, Button, Col } from "react-bootstrap";

const Sidebar = () => {
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
									<Form className="input-group mt-3">
										<FormControl
											type="text"
											id="searchField"
											placeholder="Search"
											aria-label="Search"
											aria-describedby="basic-addon2"
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
