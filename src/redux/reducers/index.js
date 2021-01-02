import {combineReducers} from "redux";

const initialState = {
    isMenuOpen: false,

};

const userInitialState = {
    uuid: "",
    email: ""
}

const menuReducer = (state = initialState, action) => {
    if (action.type === "CLOSE_MENU")
        return {...state, isMenuOpen: false}
    if (action.type === "OPEN_MENU")
        return {...state, isMenuOpen: true}


    return state;
}

const userReducer = (state = userInitialState, action) => {
    if (action.type === "LOGIN") {
        return {
            ...state,
            email: action.payload.email,
            uuid: action.payload.uuid
        }
    }
    if (action.type === "LOGOUT") {
        return {
            ...state,
            email: "",
            uuid: ""
        }
    }

    return state;
}


export const reducers = combineReducers({
    menuStatus: menuReducer,
    userInfo: userReducer
});