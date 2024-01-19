import { Col, Container, Row } from "react-bootstrap";
import shuffleIcon from "../assets/playerbuttons/shuffle.png";
import playIcon from "../assets/playerbuttons/play.png";
import prevIcon from "../assets/playerbuttons/prev.png";
import nextIcon from "../assets/playerbuttons/next.png";
import repeatIcon from "../assets/playerbuttons/repeat.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import store from "../redux/store/store";

const MusicPlayer = () => {
	const actualState = store.getState();
	const photo = useSelector((state) => state.result.photo);
	const artist = useSelector((state) => state.result.artist);
	const songName = useSelector((state) => state.result.songName);
	const songUrl = useSelector((state) => state.result.songUrl);
	useEffect(() => {
		console.log(photo);
	}, [photo]);

	const [isPlaying, setIsPlaying] = useState(false);

	const audio = new Audio(songUrl);

	/* to-do funzione pausa non funzionante  */
	const playSong = () => {
		if (isPlaying) {
			audio.pause();
		} else {
			audio.play();
		}
		setIsPlaying(!isPlaying);
	};

	return (
		<Container fluid className="fixed-bottom bg-container pt-1">
			<Row className="h-100">
				<Col xl={10} className="offset-lg-2">
					<div className="position-absolute top-25" width={100}>
						<p className="text-light">{artist}</p>
						<p className="text-light">{songName}</p>
					</div>
					<Row className="h-100 flex-column justify-content-center align-items-center">
						<Col xs={6} md={4} className="playerControls">
							<div className="d-flex p-0 m-0">
								<a href="/">
									<img src={shuffleIcon} alt="shuffle" />
								</a>
								<a href="/">
									<img src={prevIcon} alt="prev" />
								</a>
								<a onClick={playSong}>
									<img src={playIcon} alt="play" />
								</a>
								<a href="/">
									<img src={nextIcon} alt="next" />
								</a>
								<a href="/">
									<img src={repeatIcon} alt="repeat" />
								</a>
							</div>
							<div className="progress mt-3">
								<div role="progressbar" aria-roledescription="progressbar"></div>
							</div>
						</Col>
					</Row>
					<div className="position-absolute end-0 top-0">
						<img className="img-fluid" width={100} src={photo} alt="" />
					</div>
				</Col>
			</Row>
		</Container>
	);
};
export default MusicPlayer;
