import axios from "axios";


export default axios.create({
    baseURL: "https://ax21qszj9e.execute-api.eu-central-1.amazonaws.com/Test/",
    responseType: "json"

})