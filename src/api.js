//base url
const base_url = `https://api.rawg.io/api/`;

//getting the date
const getCurrentMonth = () => {
	const month = new Date().getMonth() + 1;
	if (month < 10) {
		return `0${month}`;
	} else {
		return month;
	}
};

const getCurrentDay = () => {
	const day = new Date().getDay();
	if (day < 10) {
		return `0${day}`;
	} else {
		return day;
	}
};

//current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//popular game
const popular_games = `games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

//upcoming games
const upcoming_games = `games?key=${process.env.REACT_APP_API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page-size=10`;

//new games
const new_games = `games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page-size=10`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${new_games}`;

//game details
export const gameDetailsUrl = (game_id) =>
	`${base_url}games/${game_id}?key=${process.env.REACT_APP_API_KEY}`;
//game screenshots
export const gameScreenshotUrl = (game_id) =>
	`${base_url}games/${game_id}/screenshots?key=${process.env.REACT_APP_API_KEY}`;

//searched game
export const searchGameUrl = (game_name) =>
	`${base_url}games?key=${process.env.REACT_APP_API_KEY}&search=${game_name}&page-size=9`;
