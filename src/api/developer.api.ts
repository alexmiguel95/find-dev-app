import { AxiosResponse } from 'axios';
import { IDeveloper, IStack } from '../models/developer';
import api from './api';

const developerApi = () => {
    const getAllDeveloper = (): Promise<AxiosResponse<IDeveloper[]>> => {
        return api.get<IDeveloper[]>('/devs');
    };

    const getAllStacks = (): Promise<AxiosResponse<IStack[]>> => {
        return api.get<IStack[]>('/stacks');
    };

    return {
        getAllDeveloper,
        getAllStacks,
    };
};

export default developerApi();
