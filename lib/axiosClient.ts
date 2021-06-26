import axios from 'axios';

// eslint-disable-next-line no-undef
const websiteUrl = process.env.WEBSITE_URL;

export const ichorAxios = axios.create({
    baseURL: `https://${websiteUrl}/api`,
    headers: {
        'Content-Type': 'application/json',
        'User-Agent': '*'
    }
});
