import axios from 'axios';

const request = axios.create({
    baseURL: `https://tiktok.fullstack.edu.vn/api`,
});

export const get = async (path,options={}) => {
    let response = await request.get(path,options)
    return response.data
}
