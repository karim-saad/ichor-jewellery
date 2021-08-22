import axios from 'axios';

export const ichorAxios = axios.create({
    baseURL: process.env.ICHOR_API_BASE_URL,
    headers: {
        Authorization: process.env.ICHOR_AUTH_TOKEN,
        'Content-Type': 'application/json'
    }
});
