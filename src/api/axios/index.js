import axios from "./apiconfig";
import {Auth} from "aws-amplify";


axios.interceptors.request.use(async config => {

        const authResponse = await Auth.currentSession();
        config.headers["Authorization"] = authResponse.idToken.jwtToken;
        return config;
    },
    error => {
        Promise.reject(error)
    }
)

export const api = {
    listMyDevices: () => axios.get("/devices", {}),
    registerDevice: (thing_name) => axios.post("/devices", {
        thing_name
    }),
    removeDevice: (deviceId) => axios.delete("/devices", {
        params: {
            deviceId
        }
    })
}