import { combineReducers } from "redux";

const initialState = {
	clickedItem: false,
	photo: "",
	artist: "",
	songName: "",
	songUrl: "",
};
const initialQuery = { data: [] };

const stateReducer = (state = { initialState }, action) => {
	switch (action.type) {
		case "SHOW_RESULTS":
			return {
				clickedItem: !state.clickedItem,
				photo: action.payload.photo,
				artist: action.payload.artist,
				songName: action.payload.songName,
				songUrl: action.payload.songUrl,
			};
		default:
			return state;
	}
};
const queryReducer = (state = initialQuery, action) => {
	switch (action.type) {
		case "QUERY_RESULT":
			console.log(action.payload);
			return {
				...state,

				data: action.payload,
			};
		default:
			console.log(action.payload);
			console.log("Default case - no action taken");
			return state;
	}
};
/*export default stateReducer; */

const rootReducer = combineReducers({
	result: stateReducer,
	queryReducer,
});

export default rootReducer;
