import axios from 'axios';

const API_URL = '/user/worker';

//Register worker
const registerWorker = async (workerData) => {
        const response = await axios.post(API_URL, workerData);

    return response.data;
}

const workerService = {
    registerWorker,
} 

export default workerService;