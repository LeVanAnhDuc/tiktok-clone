import axios from 'axios';

export const instance = axios.create({
    // get URL from .env
    baseURL: process.env.REACT_APP_BASIC_URL,
});

export const get = async (path, option = {}) => {
    const res = await instance.get(path, option);
    return res.data;
};
