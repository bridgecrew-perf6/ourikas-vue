import axios from "axios";

const api = axios.create({
    baseURL: 'https://ourikas.github.io'
});

export default api;