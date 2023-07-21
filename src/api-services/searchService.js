import * as request from '../utils/request';

export const search = async (q, type = 'less') => {
    try {
        const res = await request.instance.get(`users/search`, {
            params: {
                q,
                type,
            },
        });
        return res.data.data;
    } catch (error) {
        // handle error
    }
};
