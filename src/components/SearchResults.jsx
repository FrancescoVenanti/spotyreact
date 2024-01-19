import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { showResults } from "../redux/actions/actions";

const SearchContent = (props) => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.queryReducer);
	return (
		<Row className="mt-4">
			<h2 className="text-light">{props.title}</h2>
			<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
				{data.data.map((item) => {
					return (
						<div
							key={item.id}
							className="col text-center"
							onClick={() => {
								dispatch(showResults(item.album.cover_medium, item.artist.name, item.title, item.preview));
							}}
						>
							<div role="button">
								<img className="img-fluid" src={item.album.cover_medium} alt="track" />
								<p>{item.title}</p>
								<p>{item.artist.name}</p>
							</div>
						</div>
					);
				})}
			</div>
		</Row>
	);
};
export default SearchContent;
