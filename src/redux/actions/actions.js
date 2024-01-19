export const showResults = (photo, artist, songName, songUrl) => ({
	type: "SHOW_RESULTS",
	payload: { photo, artist, songName, songUrl },
});
export const queryResult = (data) => ({
	type: "QUERY_RESULT",
	payload: data.data,
});
