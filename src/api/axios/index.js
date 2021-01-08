import axios from "./apiconfig";
import {Auth} from "aws-amplify";


axios.interceptors.request.use(config => {
    return Auth.currentSession()
        .then(session => { // User is logged in.
            axios.defaults.headers.common["Authorization"] = session.idToken.jwtToken;
            return Promise.resolve(config);
        })
        .catch(() => {
            // No logged-in user: don't set auth header
            return Promise.resolve(config);
        })
})

export const api = {
    listMyDevices: (uuid) => axios.get("/devices", {
        params: {
            uuid
        }
    }),
    registerDevice: (thing_name, uuid) => axios.post("/devices", {
        thing_name,
        uuid
    }),
    removeDevice: (deviceId) => axios.delete("/devices", {
        params: {
            deviceId
        }
    })
}