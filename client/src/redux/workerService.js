import { userRequest } from "../requestMethods";

const API_URL = '/worker';

//Register worker
export const registerWorker = async (dispatch, workerData) => {
    const response = await userRequest.post(API_URL + '/signup', workerData);

    if (response.data) {
        localStorage.setItem('workerInfo', JSON.stringify(response.data))
    };

    return response.data;
}

//Get worker info
export const getWorkerInfo = async (dispatch) => {
    const response = await userRequest.get(API_URL + '/my-account');

    return response.data;
}