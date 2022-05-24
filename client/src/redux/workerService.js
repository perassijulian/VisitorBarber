import { useSelector } from "react-redux";
import { publicRequest, userRequest } from "../requestMethods";
import {
    registerWorkerStart,
    registerWorkerSuccess,
    registerWorkerFailure,
    getWorkerStart,
    getWorkerSuccess,
    getWorkerFailure,
    getWorkersStart,
    getWorkersSuccess,
    getWorkersFailure,

} from './workerRedux';


const API_URL = '/worker';

//Register worker
export const registerWorker = async (dispatch, workerData, accessToken) => {
    dispatch(registerWorkerStart());
    try {
        const res = await userRequest.post("/worker/register", workerData, 
            { headers: 
                { token: `access_token=${accessToken}`}
            }
        )
        dispatch(registerWorkerSuccess(res.data))
    } catch (err) {
        dispatch(registerWorkerFailure(err))
    }
}

//Get worker info
export const getWorker = async (dispatch, id) => {
    dispatch(getWorkerStart());
    try {
        const res = await publicRequest.get(`/worker/find/${id}`);
        dispatch(getWorkerSuccess(res.data[0]));
    } catch (err) {
        dispatch(getWorkerFailure(err));
    }
}

//Get workers
export const getWorkers = async (dispatch) => {
    dispatch(getWorkersStart());
    try {
        const res = await publicRequest.get('/worker');
        dispatch(getWorkersSuccess(res.data));
    } catch (err) {
        dispatch(getWorkersFailure());
    }
}

