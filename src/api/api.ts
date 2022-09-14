import axios, { AxiosRequestConfig } from 'axios';

const api = () => {
    const config: AxiosRequestConfig = {
        baseURL: 'https://finddev-api.herokuapp.com/',
        timeout: 60 * 1000,
    };

    const instance = axios.create(config);

    instance.interceptors.request.use(async config => {
        // TODO: configurar token AWS Cognito
        return config;
    });

    return instance;
};

export default api();
