import {combineReducers} from "redux";

const initialState = {
    menuOpen: false
};

const menuReducer = (state = initialState, action) => {
    if (action.type === "CLOSE_MENU")
        return {...state, menuOpen: false}
    if (action.type === "OPEN_MENU")
        return {...state, menuOpen: true}


    return state
}


export const reducers = combineReducers({
    isMenuOpen: menuReducer
});