import axios from "axios";

const api = axios.create({
    baseURL: 'http://ourikas.github.io'
});

export default api;