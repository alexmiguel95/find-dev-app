import { AxiosError, AxiosResponse } from 'axios';
import developerApi from '../api/developer.api';
import { IDeveloper, IStack, IState } from '../models/developer';
import HttpStatus from '../models/enums/httpStatus';

const developerService = () => {
    const getAllDeveloper = async (): Promise<IDeveloper[]> => {
        try {
            const result: AxiosResponse<IDeveloper[]> = await developerApi.getAllDeveloper();
            if (result.status === HttpStatus.OK && result.data != null) {
                return Promise.resolve(result.data);
            }

            return Promise.reject({ status: result.status } as AxiosResponse);
        } catch (error) {
            const { response } = error as AxiosError;

            console.error(response);
            return Promise.reject(response);
        }
    };

    const getAllStacks = async (): Promise<IStack[]> => {
        try {
            const result: AxiosResponse<IStack[]> = await developerApi.getAllStacks();
            if (result.status === HttpStatus.OK && result.data != null) {
                return Promise.resolve(result.data);
            }

            return Promise.reject({ status: result.status } as AxiosResponse);
        } catch (error) {
            const { response } = error as AxiosError;

            console.error(response);
            return Promise.reject(response);
        }
    };

    const getStack = async (id: number): Promise<IStack> => {
        try {
            const result: AxiosResponse<IStack> = await developerApi.getStack(id);
            if (result.status === HttpStatus.OK && result.data != null) {
                return Promise.resolve(result.data);
            }

            return Promise.reject({ status: result.status } as AxiosResponse);
        } catch (error) {
            const { response } = error as AxiosError;

            console.error(response);
            return Promise.reject(response);
        }
    };

    const getState = async (id: number): Promise<IState> => {
        try {
            const result: AxiosResponse<IState> = await developerApi.getState(id);
            if (result.status === HttpStatus.OK && result.data != null) {
                return Promise.resolve(result.data);
            }

            return Promise.reject({ status: result.status } as AxiosResponse);
        } catch (error) {
            const { response } = error as AxiosError;

            console.error(response);
            return Promise.reject(response);
        }
    };

    return {
        getAllDeveloper,
        getAllStacks,
        getStack,
        getState,
    };
};

export default developerService();
