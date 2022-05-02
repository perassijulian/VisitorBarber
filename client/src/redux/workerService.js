import { userRequest } from "../requestMethods";
import {
    registerWorkerStart,
    registerWorkerSuccess,
    registerWorkerFailure,

} from './workerRedux';

const API_URL = '/worker';

//Register worker
export const registerWorker = async (dispatch, workerData) => {
    dispatch(registerWorkerStart());
    
    try {
        const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
        const currentUser = user && JSON.parse(user).currentUser;
        const TOKEN = currentUser?.accessToken;
        const response = await userRequest.post(API_URL + '/signup', workerData, {
            headers: {'token':TOKEN}});

        if (response.data) {
            localStorage.setItem('workerInfo', JSON.stringify(response.data))
        };

        dispatch(registerWorkerSuccess(response.data))
    } catch (error) {
        dispatch(registerWorkerFailure(error))
    }
}

//Get worker info
export const getWorkerInfo = async (dispatch) => {
    const response = await userRequest.get(API_URL + '/my-account');

    return response.data;
}