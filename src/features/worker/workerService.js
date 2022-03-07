import axios from 'axios';

const API_URL = '/worker';

//Register worker
const registerWorker = async (workerData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL + '/signup', workerData, config);

    return response.data;
}

//Get worker info
const getWorkerInfo = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    
    const response = await axios.get(API_URL + '/my-account', config);

    return response.data;
}

const workerService = {
    registerWorker,
    getWorkerInfo,
} 

export default workerService;