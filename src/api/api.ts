import axios, { AxiosRequestConfig } from 'axios';

const api = () => {
    const config: AxiosRequestConfig = {
        baseURL: 'https://',
        timeout: 60 * 1000,
    };

    const instance = axios.create(config);

    instance.interceptors.request.use(async config => {
        
        return config;
    });

    return instance;
};

export default api();
