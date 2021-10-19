import axios from 'axios';
import { getEnvironmentVariable } from '.';

export const ichorAxios = axios.create({
    baseURL: getEnvironmentVariable('ICHOR_API_BASE_URL'),
    headers: {
        Authorization: getEnvironmentVariable('ICHOR_AUTH_TOKEN'),
        'Content-Type': 'application/json'
    }
});
