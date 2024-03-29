//auth
export const LOGIN = '/login';
export const REGISTER = '/register';

//categories
export const GET_CATEGORIES = '/categories';
export const POST_CREATE_CATEGORY = '/category';
export const POST_CREATE_SUBCATEGORY = '/sub_category';
export const GET_SUBCATEGORY_BY_ID = '/sub_category';

//variables
export const GET_VARIABLES = '/variables';
export const POST_CREATE_VARIABLE = '/variable';
export const DELETE_VARIABLE = '/variable';
export const PUT_EDIT_VARIABLE = '/variable';
export const GET_VARS_BY_IDS = '/variables_by_ids';

//posts
export const POST_CREATE_POST = '/post';
export const GET_POST_BY_ID = '/post';
export const GET_POST_VERSION_BY_ID = '/post_history';
export const POST_REVERT_POST_VERSION = '/post_revert';
export const GET_ALL_POSTS = '/posts';

//users
export const POST_GET_USERS_BY_IDS = '/users_by_ids';

//image
export const POST_IMAGE_UPLOAD = '/image';

//search
export const POST_SEARCH = '/post/search';
export const GET_SEARCH_HISTORY = '/post/search_history';
export const POST_CLEAR_HISTORY = '/post/clear_search_history';
