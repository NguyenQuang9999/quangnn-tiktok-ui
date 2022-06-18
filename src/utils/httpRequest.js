import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path,options={}) => {
    let response = await httpRequest.get(path,options)
    return response.data
}
