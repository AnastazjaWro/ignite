const base_url = "https://api.rawg.io/api/";
const key = "b0b478568fe34823a84c051dffe92ed0";

const getCurrentMonth = () => {
  const month = new Date().getMonth() +1;
  if(month < 10) {
    return `0${month}`;
  } else{
    return month;
  }
}

const getCurrentDay = () => {
  const day = new Date().getDate();
  if(day < 10) {
    return `0${day}`;
  } else{
    return day;
  }
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;


const popular_games = `games?key=${key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${newGames}`;

export const gameDetailsUrl = (game_ID) => `${base_url}games/${game_ID}?key=${key}`;
//Game ScreenShots
export const gameScreenshotUrl = (game_ID) => `${base_url}games/${game_ID}/screenshots?key=${key}`;

// Searched Game

export const searchGameURL = (game_name) => `${base_url}games?search=${game_name}&page_size=12&key=${key}`