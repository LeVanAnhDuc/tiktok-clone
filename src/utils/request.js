import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});
