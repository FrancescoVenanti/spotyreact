import MainPage from "./components/MainPage";
import MusicPlayer from "./components/MusicPlayer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div id="app">
			<MainPage />
			<MusicPlayer />
		</div>
	);
}

export default App;
