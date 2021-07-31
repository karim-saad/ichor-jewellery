import axios from 'axios';

export const ichorAxios = axios.create({
    baseURL: process.env.ICHOR_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});
