import axios from 'axios';

const API_URL = '/worker';

//Register worker
const registerWorker = async (workerData) => {
        const response = await axios.post(API_URL + '/signup', workerData);

    return response.data;
}

//Get worker info
const getWorkerInfo = async (user) => {
    const response = await axios.get(API_URL + '/my-account');

    for (let i = 0; i<= response.data.length; i++) {
        if (user._id === response.data[i].user) {
            console.log('getWorkerInfo return', response.data[i])
            return response.data[i]
        } 
    }
    throw new Error('Worker has been not found')
}

const workerService = {
    registerWorker,
    getWorkerInfo,
} 

export default workerService;