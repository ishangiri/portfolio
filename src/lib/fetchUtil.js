import axios from "axios";


export const fetchUtil = axios.create({
    baseURL : '',
    headers: {
        'Content-Type' : 'application/json'
    }
})