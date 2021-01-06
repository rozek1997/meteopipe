import axios from "axios";


export default axios.create({
    baseURL: "https://ly1blhfy8i.execute-api.eu-central-1.amazonaws.com/Test/",
    headers: {
        "Content-Type": "application/json"
    },
    responseType: "json"

})