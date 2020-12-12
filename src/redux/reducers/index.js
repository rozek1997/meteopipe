import {combineReducers} from "redux";

const initialState = {
    isMenuOpen: false
};

const menuReducer = (state = initialState, action) => {
    if (action.type === "CLOSE_MENU")
        return {...state, isMenuOpen: false}
    if (action.type === "OPEN_MENU")
        return {...state, isMenuOpen: true}


    return state;
}


export const reducers = combineReducers({
    menuStatus: menuReducer
});