import axios from 'axios';
import {
	popularGamesUrl,
	upcomingGamesUrl,
	newGamesUrl,
	searchGameUrl,
} from '../api';

export const loadGames = () => async (dispatch) => {
	//fetch axios
	const popularData = await axios.get(popularGamesUrl());
	const newGamesData = await axios.get(newGamesUrl());
	const upcomingData = await axios.get(upcomingGamesUrl());

	dispatch({
		type: 'LOADED_GAMES',
	});

	dispatch({
		type: 'FETCH_GAMES',
		payload: {
			popular: popularData.data.results,
			upcoming: upcomingData.data.results,
			newGames: newGamesData.data.results,
		},
	});
};

export const fetchSearch = (game_name) => async (dispatch) => {
	const searchGames = await axios.get(searchGameUrl(game_name));
	dispatch({
		type: 'FETCH_SEARCHED',
		payload: {
			searched: searchGames.data.results,
		},
	});
};
