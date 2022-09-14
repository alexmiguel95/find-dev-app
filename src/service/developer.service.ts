import { AxiosError, AxiosResponse } from 'axios';
import developerApi from '../api/developer.api';
import { IDeveloper } from '../models/developer';
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

    return {
        getAllDeveloper,
    };
};

export default developerService();
