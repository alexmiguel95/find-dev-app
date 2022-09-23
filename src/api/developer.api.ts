import { AxiosResponse } from 'axios';
import { IDeveloper, IStack, IState } from '../models/developer';
import api from './api';

const developerApi = () => {
    const getAllDeveloper = (): Promise<AxiosResponse<IDeveloper[]>> => {
        return api.get<IDeveloper[]>('/devs');
    };

    const getAllStacks = (): Promise<AxiosResponse<IStack[]>> => {
        return api.get<IStack[]>('/stacks');
    };

    const getStack = (id: number): Promise<AxiosResponse<IStack>> => {
        return api.get<IStack>(`/stacks/${id}`);
    };

    const getState = (id: number): Promise<AxiosResponse<IState>> => {
        return api.get<IState>(`/state/${id}`);
    };

    return {
        getAllDeveloper,
        getAllStacks,
        getStack,
        getState,
    };
};

export default developerApi();
