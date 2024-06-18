import axios from "axios";

export const api = axios.create({
    baseURL:  "http://192.168.106.30:3000"
})