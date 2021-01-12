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

export const selectDevice = (deviceID) => {
    return {
        type: "SELECT_DEVICE",
        payload: {
            deviceID
        }
    }
}

export const fetchDeviceStatus = deviceStatus => {

    let deviceStatusObj = {}
    return {
        type: "FETCH_DEVICE_STATUS_SUCCESS",
        payload: {}
    }
}