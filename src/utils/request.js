import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, option = {}) => {
    const res = await instance.get(path, option);
    return res.data;
};
