import axios from "axios";

export default axios.default({
    baseURL: process.env.REACT_APP_SERVER_URL,
    headers: {
        "Content-type": "application/json",
    }
})