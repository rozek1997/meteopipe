import {combineReducers} from "redux";

const initialState = {
    isMenuOpen: false,

};

const userInitialState = {
    uuid: "",
    email: ""
}

const deviceInitialState = {
    deviceList: [],
    selectedDevice: ""
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

const deviceReducer = (state = deviceInitialState, action) => {
    if (action.type === "LIST_DEVICES") {
        return {
            ...state,
            deviceList: [...action.payload.deviceList]
        }
    }

    if (action.type === "SELECT_DEVICE") {
        return {
            ...state,
            selectedDevice: action.payload.deviceID
        }
    }

    return state;
}


export const reducers = combineReducers({
    menuStatus: menuReducer,
    userInfo: userReducer,
    devicesStatus: deviceReducer
});