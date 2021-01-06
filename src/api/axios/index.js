import {axios} from "./apiconfig";


export const api = {
    listMyDevices: (uuid) => axios.get("/device/list-my-device", {
        uuid
    }),
    registerDevice: (thing_name, uuid) => axios.post("/device/register-device", {
        thing_name,
        uuid
    }),
    removeDevice: (thing_name, uuid) => axios.delete("/device/delete-device", {
        thing_name,
        uuid
    })
}