export const constants = {
    base_path: 'https://www.freetogame.com/api/',
    games: 'games',
    game_platform_search: 'games?platform=',
    game_category_search: 'games?category=',
    game_search_params: '&sort-by=',
    games_sorted: 'games?sort-by=release-date',
    game_get: 'game?id=',
};

// const CORS = 'https://cors-anywhere.herokuapp.com/';




// export const games = () => `${ CORS }${ BASE_PATH }${ games }`;
// export const gamesPlatformSearch = q_platform_game => `${ CORS }${ BASE_PATH }${ game_platform_search }${ q_platform_game }${ game_search_params }`;
// export const gamesCategorySearch = q_category_game => `${ CORS }${ BASE_PATH }${ game_category_search }${ q_category_game }${ game_search_params }`;
// export const gamesSorted = sorted_by => `${ CORS }${ BASE_PATH }${ games_sorted }${ sorted_by }`;

// export const gameGet = game_id => `${ CORS }${ BASE_PATH }${ game_get }${ game_id }`;