export const closeMenu = () => {
    return {
        type: "CLOSE_MENU"
    }
}

export const openMenu = () => {
    return {
        type: "OPEN_MENU"
    }
}

export const login = (uuid, email) => {
    return {
        type: "LOGIN",
        payload: {
            uuid,
            email
        }
    }
}

export const logout = () => {
    return {
        type: "LOGOUT",
        payload: {
            uuid: "",
            email: ""
        }
    }
}

export const listDevices = (deviceList) => {
    return {
        type: "LIST_DEVICES",
        payload: {
            deviceList
        }
    }
}

export const chooseDevice = (deviceID) => {
    return {
        type: "CHOOSE_DEVICE",
        payload: {
            deviceID
        }
    }
}