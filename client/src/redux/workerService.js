import { userRequest } from "../requestMethods";
import {
    registerWorkerStart,
    registerWorkerSuccess,
    registerWorkerFailure,
    getWorkerStart,
    getWorkerSuccess,
    getWorkerFailure,

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
    } catch (err) {
        dispatch(registerWorkerFailure(err))
    }
}

//Get worker info
export const getWorker = async (dispatch, id) => {
    dispatch(getWorkerStart());
    try {
        const res = await userRequest.get(API_URL + `/find/${id}`);
        dispatch(getWorkerSuccess(res.data));
    } catch (err) {
        dispatch(getWorkerFailure(err));
    }
}