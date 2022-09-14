import { AxiosResponse } from 'axios';
import { IDeveloper } from '../models/developer';
import api from './api';

const developerApi = () => {
    const getAllDeveloper = (): Promise<AxiosResponse<IDeveloper[]>> => {
        return api.get<IDeveloper[]>('/devs');
    };

    return {
        getAllDeveloper,
    };
};

export default developerApi();
